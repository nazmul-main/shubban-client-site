import AdminHeader from "../../src/component/AdminHeader";
import AdminAuthGuard from "../../src/component/AdminAuthGuard";

export const metadata = {
  title: "অ্যাডমিন ড্যাশবোর্ড - শুব্বান দাওয়াতি কাফেলা",
  description: "Admin dashboard for শুব্বান দাওয়াতি কাফেলা",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <AdminAuthGuard>
        <AdminHeader />
        <main className="w-full relative z-10">
          {children}
        </main>
      </AdminAuthGuard>
    </div>
  );
} 