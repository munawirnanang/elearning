"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import { usePathname } from "next/navigation";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const pathname = usePathname();

  // kalau di /course, paksa dark mode
  const isCoursePage = pathname.startsWith("/detailProduct");

  return (<NextThemesProvider {...props} attribute="class" defaultTheme="system" enableSystem forcedTheme={isCoursePage ? undefined : "light"}>{children}</NextThemesProvider>);
}
