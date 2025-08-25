"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
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
                        <NavigationMenuLink className={`${pathname === "/dashboard" ? "bg-white text-black" : "bg-outline text-white"} hover:bg-white hover:text-black dark:bg-accent dark:hover:bg-white dark:hover:text-black`}>
                            Dashboard
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/listCourse" legacyBehavior passHref>
                        <NavigationMenuLink className={`${pathname === "/listCourse" ? "bg-white text-black" : "bg-outline text-white"} hover:bg-white hover:text-black dark:bg-accent dark:hover:bg-white dark:hover:text-black`}>
                            My Courses
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className="bg-outline hover:bg-white hover:text-black text-white hover:bg-white hover:text-black dark:bg-accent dark:hover:bg-white dark:hover:text-black">
                            Go to Community
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    );
}