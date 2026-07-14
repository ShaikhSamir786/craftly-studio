import AdminSidebar from "@/components/layout/AdminSidebar";
import AdminTopbar from "@/components/layout/AdminTopbar";
import AuthGuard from "@/components/auth/AuthGuard";

export const metadata = {
  title: "Admin Dashboard | Craftly Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-bg-primary overflow-hidden">
      <AuthGuard>
        <AdminSidebar />
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <AdminTopbar />
          <main className="flex-1 overflow-y-auto p-6 lg:p-8">
            {children}
          </main>
        </div>
      </AuthGuard>
    </div>
  );
}
