"use client"

import { usePathname } from "next/navigation";
import Navigation from "@/components/shared/navigation/navigation";
import Footer from "@/components/shared/footer/footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCashier = pathname.startsWith("/cashier");
  const isLogin = pathname.startsWith("/login");

  if (isCashier || isLogin) return <>{children}</>;

  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
