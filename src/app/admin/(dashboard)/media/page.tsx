"use client";

import { useState, useEffect, useRef } from "react";
import { getMediaItems } from "@/lib/firebase/media";
import type { MediaItem } from "@/types/media";

export default function AdminMediaPage() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const data = await getMediaItems();
        if (!cancelled) setItems(data);
      } catch (err) {
        console.error("Failed to fetch media:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/media", { method: "POST", body: formData });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Upload failed");
      }
      const saved: MediaItem = await res.json();
      setItems((prev) => [saved, ...prev]);
    } catch (err) {
      console.error("Failed to upload file:", err);
      alert("Failed to upload file. Please try again.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleDelete = async (item: MediaItem) => {
    if (!confirm(`Delete "${item.fileName}"? This cannot be undone.`)) return;
    setDeletingId(item.id);
    try {
      const res = await fetch(`/api/media/${item.id}`, { method: "DELETE" });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Delete failed");
      }
      setItems((prev) => prev.filter((i) => i.id !== item.id));
    } catch (err) {
      console.error("Failed to delete media:", err);
      alert("Failed to delete file. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const formatDate = (timestamp: unknown): string => {
    if (!timestamp) return "—";
    try {
      const date = timestamp instanceof Date ? timestamp : new Date(timestamp as string | number);
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return "—";
    }
  };

  const isImage = (fileType: string): boolean => fileType.startsWith("image/");

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <h1 className="font-display text-3xl font-bold">Media Library</h1>
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*,application/pdf"
            onChange={handleUpload}
            className="hidden"
            id="media-upload"
          />
          <label
            htmlFor="media-upload"
            className={`bg-accent text-white px-4 py-2 rounded-lg font-bold hover:bg-accent/90 transition-colors flex items-center gap-2 cursor-pointer ${
              uploading ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            {uploading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-sm">upload</span> Upload File
              </>
            )}
          </label>
        </div>
      </div>

      {loading ? (
        <div className="bg-surface border border-outline rounded-2xl p-12 text-center">
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-on-surface-variant">Loading media...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="bg-surface border border-outline rounded-2xl p-12 text-center">
          <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">folder_open</span>
          <p className="text-on-surface-variant text-lg mb-4">No media files yet.</p>
          <label
            htmlFor="media-upload"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">upload</span> Upload your first file
          </label>
        </div>
      ) : (
        <div className="bg-surface border border-outline rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-outline">
                  <th className="px-6 py-4 text-sm font-bold text-on-surface-variant">File</th>
                  <th className="px-6 py-4 text-sm font-bold text-on-surface-variant hidden md:table-cell">Type</th>
                  <th className="px-6 py-4 text-sm font-bold text-on-surface-variant hidden lg:table-cell">Size</th>
                  <th className="px-6 py-4 text-sm font-bold text-on-surface-variant hidden lg:table-cell">Uploaded</th>
                  <th className="px-6 py-4 text-sm font-bold text-on-surface-variant text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-outline last:border-b-0 hover:bg-white transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {isImage(item.fileType) ? (
                          <img src={item.fileUrl} alt="" className="w-10 h-10 rounded-lg object-cover bg-outline/20" />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-outline/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-on-surface-variant text-lg">description</span>
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-on-surface truncate max-w-[300px]">{item.fileName}</p>
                          <p className="text-sm text-on-surface-variant truncate max-w-[300px] mt-0.5">{item.fileUrl}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-sm text-on-surface-variant font-mono">{item.fileType}</span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className="text-sm text-on-surface-variant">{formatFileSize(item.fileSize)}</span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className="text-sm text-on-surface-variant">{formatDate(item.createdAt)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={item.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-outline/50 flex items-center justify-center text-on-surface-variant hover:bg-accent hover:text-white transition-colors"
                          title="Open"
                        >
                          <span className="material-symbols-outlined text-lg">open_in_new</span>
                        </a>
                        <button
                          onClick={() => handleDelete(item)}
                          disabled={deletingId === item.id}
                          className="w-9 h-9 rounded-lg bg-outline/50 flex items-center justify-center text-on-surface-variant hover:bg-red-500 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
                          title="Delete"
                        >
                          {deletingId === item.id ? (
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <span className="material-symbols-outlined text-lg">delete</span>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
