"use client";
import type { SiteBranding } from "../types/quiz";

import React, { useEffect, useState } from "react";
import { api } from "../lib/client";
import {
  DEFAULT_SITE_BRANDING,
  BRANDING_UPDATED_EVENT,
  siteBranding,
} from "../lib/site-branding.mjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, BarChart3, Settings } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [branding, setBranding] = useState(DEFAULT_SITE_BRANDING);
  useEffect(() => {
    let active = true;
    let updated = false;
    const onUpdate = (event: Event) => {
      updated = true;
      setBranding(siteBranding((event as CustomEvent<SiteBranding>).detail));
    };
    window.addEventListener(BRANDING_UPDATED_EVENT, onUpdate);
    void api<{ branding: SiteBranding }>("/api/branding")
      .then((data) => {
        if (active && !updated) setBranding(siteBranding(data.branding));
      })
      .catch(() => {
        /* Keep the default header when the network is unavailable. */
      });
    return () => {
      active = false;
      window.removeEventListener(BRANDING_UPDATED_EVENT, onUpdate);
    };
  }, [pathname]);

  const navItems = [
    { label: "Phòng thi", href: "/", icon: BookOpen },
    { label: "Số lượng dự thi", href: "/dashboard", icon: BarChart3 },
    { label: "Quản trị", href: "/admin", icon: Settings },
  ];

  return (
    <header className="site-header sticky top-0 z-50 border-b border-amber-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 py-3">
          <Link
            href="/"
            className="flex min-w-0 max-w-full items-center gap-3 sm:gap-4"
          >
            <span className="flex shrink-0 items-center justify-center p-1.5 sm:p-2">
              <img
                src={branding.logo}
                alt="Logo đơn vị tổ chức"
                width={55}
                height={62}
                className="h-10 w-10 object-contain sm:h-[52px] sm:w-[52px]"
              />
            </span>
            <span className="flex min-w-0 flex-col max-w-full lg:max-w-lg break-words">
              <span className="font-bold text-brand-700 leading-tight text-xs sm:text-base">
                {branding.navbarTitle}
              </span>
              {branding.navbarSubtitle && (
                <span className="mt-1 whitespace-pre-line text-[10px] sm:text-xs font-semibold leading-relaxed text-brand-700">
                  {branding.navbarSubtitle}
                </span>
              )}
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
