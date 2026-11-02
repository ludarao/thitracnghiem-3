import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { CONTEST_TITLE, CONTEST_DESCRIPTION } from "../lib/branding.mjs";

export const metadata: Metadata = {
  title: CONTEST_TITLE,
  description: CONTEST_DESCRIPTION,
  icons: { icon: "/csgt-logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="text-slate-800 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="site-main flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
        <footer className="site-footer mt-12 py-6 text-center">
          <p className="font-bold text-brand-800 text-sm">
            Hiểu luật giao thông · Vững bước an toàn
          </p>
          <p className="mt-2 text-xs text-slate-600">
            © {new Date().getFullYear()} · Cuộc thi tìm hiểu kiến thức pháp luật
            về trật tự an toàn giao thông đường bộ
          </p>
        </footer>
      </body>
    </html>
  );
}
