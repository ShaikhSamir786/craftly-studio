export const metadata = {
  title: "Privacy Policy | Craftly Studio",
};

export default function PrivacyPage() {
  return (
    <div className="pt-48 pb-24 max-w-3xl mx-auto px-6">
      <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-on-surface-variant mb-4">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <div className="prose prose-gray max-w-none">
        <p>This is a placeholder for the Privacy Policy.</p>
      </div>
    </div>
  );
}
