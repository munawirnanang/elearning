"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, BookOpen, Users, PenTool } from "lucide-react"
import {
    NavigationMenu,
    // NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    // NavigationMenuTrigger,
    // navigationMenuTriggerStyle,
    // NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

export function NavigationMenuDemo2() {

    const pathname = usePathname();

    return (
        <NavigationMenu className="mx-5 lg:mx-20 py-2">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/dashboard" legacyBehavior passHref>
                        {/* <NavigationMenuLink className="bg-accent hover:bg-white dark:bg-white text-black dark:text-black"> */}
                        <NavigationMenuLink className={`${pathname === "/dashboard" ? "bg-white text-black" : "bg-outline text-white"} hover:bg-white hover:text-black dark:bg-accent dark:hover:bg-white dark:hover:text-black flex-row items-center gap-1.5`}>
                            <LayoutDashboard className="h-4 w-4 text-current" />
                            Dashboard
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/listCourse" legacyBehavior passHref>
                        <NavigationMenuLink className={`${pathname === "/listCourse" ? "bg-white text-black" : "bg-outline text-white"} hover:bg-white hover:text-black dark:bg-accent dark:hover:bg-white dark:hover:text-black flex-row items-center gap-1.5`}>
                            <BookOpen className="h-4 w-4 text-current" />
                            My Services
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className="bg-outline hover:bg-white hover:text-black text-white hover:bg-white hover:text-black dark:bg-accent dark:hover:bg-white dark:hover:text-black flex-row items-center gap-1.5">
                            <Users className="h-4 w-4 text-current" />
                            Go to Community
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/creator" legacyBehavior passHref>
                        <NavigationMenuLink className={`${pathname === "/creator" ? "bg-white text-black" : "bg-outline text-white"} hover:bg-white hover:text-black dark:bg-accent dark:hover:bg-white dark:hover:text-black flex-row items-center gap-1.5`}>
                            <PenTool className="h-4 w-4 text-current" />
                            Creator Mode
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    );
}