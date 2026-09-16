"use client"

import { usePathname } from "next/navigation";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCashier = pathname.startsWith("/cashier");
  const isLogin = pathname.startsWith("/login");

  return (
    <>
      {children}
    </>
  );
}
