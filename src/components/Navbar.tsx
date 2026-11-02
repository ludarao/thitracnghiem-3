"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, BarChart3, Settings } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Phòng thi", href: "/", icon: BookOpen },
    { label: "Số lượng dự thi", href: "/dashboard", icon: BarChart3 },
    { label: "Quản trị", href: "/admin", icon: Settings },
  ];

  return (
    <header className="site-header sticky top-0 z-50 border-b border-amber-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 py-3">
          <Link href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
            <span className="flex shrink-0 items-center gap-1.5 rounded-lg bg-white p-1.5 sm:gap-2 sm:p-2">
              <Image
                src="/csgt-logo.png"
                alt="Biểu trưng Cảnh sát giao thông"
                width={55}
                height={62}
                preload
                className="h-8 w-auto object-contain sm:h-[52px]"
              />
              <Image
                src="/youth-union-logo.png"
                alt="Logo Đoàn Thanh niên Cộng sản Hồ Chí Minh"
                width={48}
                height={53}
                preload
                className="h-8 w-auto object-contain sm:h-[52px]"
              />
              <Image
                src="/women-union-logo.png"
                alt="Logo Hội Liên hiệp Phụ nữ Việt Nam"
                width={64}
                height={56}
                preload
                className="h-8 w-auto object-contain sm:h-[52px]"
              />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="font-bold text-brand-700 leading-tight text-xs sm:text-base">
                CÔNG AN TỈNH GIA LAI
              </span>
              <span className="mt-1 text-[10px] sm:text-xs font-semibold leading-relaxed text-brand-700">
                ĐOÀN THANH NIÊN - HỘI PHỤ NỮ{" "}
                <span className="block">PHÒNG CẢNH SÁT GIAO THÔNG</span>
              </span>
            </span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2 w-full lg:w-auto justify-center lg:justify-end">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  aria-label={item.label}
                  href={item.href}
                  className={`flex items-center space-x-1.5 px-2.5 sm:px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-brand-700 text-white shadow-sm"
                      : "text-brand-800 hover:bg-white/70"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-white" : "text-brand-700"}`}
                  />
                  <span className="inline">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
