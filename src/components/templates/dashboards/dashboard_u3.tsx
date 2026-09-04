'use client'

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableDemo } from "@/components/shared/table-transaction/table-transaction_u2"
import { MoveRight } from "lucide-react"

// import { TrendingUp } from "lucide-react"
import { LabelList, RadialBar, RadialBarChart } from "recharts"

import Link from "next/link"

// import { Calendar } from "@/components/ui/calendar"

import {
  Card,
  CardContent,
  CardDescription,
//   CardFooter,
  CardHeader,
//   CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radial chart with a label"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Digital Marketing Untuk Pemula",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Google For Business",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Budidaya Lele Omset 10 Juta",
    color: "var(--chart-3)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function Dashboard() {
    
//   const [date, setDate] = React.useState<Date | undefined>(new Date())
  
  return (
    <>
    <main className="mt-24 mb-14 lg:mx-16">
        <div className="px-4 sm:px-10 lg:px-8">
            {/* Your content */}
            

        </div>
    </main>
    </>
  )
}
