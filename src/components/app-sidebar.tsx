"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Boxes,
  Bot,
  CalendarCheck,
  ChefHat,
  Command,
  GalleryVerticalEnd,
  LayoutDashboard,
  Settings2,
  ShoppingCart,
  SquareTerminal,
  UtensilsCrossed,
  Wallet,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Settings",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Restaurant",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Merchant",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Acme Travel",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      name: "Cashier",
      url: "#",
      icon: Wallet,
      isActive: true,
    },
    {
      name: "Orders",
      url: "#",
      icon: ShoppingCart,
    },
    {
      name: "Reservations",
      url: "#",
      icon: CalendarCheck,
    },
    {
      name: "Menu",
      url: "#",
      icon: UtensilsCrossed,
    },
    {
      name: "Kitchen",
      url: "#",
      icon: ChefHat,
    },
    {
      name: "Inventories",
      url: "#",
      icon: Boxes,
    }
  ],
}

export function AppSidebar({
  onManageItem,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  onManageItem?: (projectName: string) => void
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.projects} /> */}
        <NavProjects projects={data.projects} onManageItem={onManageItem} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
