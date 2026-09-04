"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

type Service = {
    title: string
    category: string
    badgeClassName: string
    lessons: number
    level: string
    rating: number
    reviews: number
    image: string
}

const services: Service[] = [
    {
        title: "Sales Strategy for Beginners",
        category: "Sales",
        badgeClassName: "bg-alternative-1 text-black",
        lessons: 12,
        level: "Beginner",
        rating: 4.8,
        reviews: 320,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        title: "Digital Marketing Fundamentals",
        category: "Marketing",
        badgeClassName: "bg-alternative-2 text-black",
        lessons: 15,
        level: "Beginner",
        rating: 4.7,
        reviews: 512,
        image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        title: "Export Import Business 101",
        category: "Eksportir",
        badgeClassName: "bg-alternative-3 text-black",
        lessons: 10,
        level: "Intermediate",
        rating: 4.9,
        reviews: 210,
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        title: "UMKM Go Digital: Mulai Online",
        category: "UMKM Go Digital",
        badgeClassName: "bg-alternative-4 text-black",
        lessons: 14,
        level: "Beginner",
        rating: 4.6,
        reviews: 398,
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=400&h=300&q=80",
    },
]

export default function Product() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    const updateScrollState = () => {
        const el = scrollRef.current
        if (!el) return
        setCanScrollLeft(el.scrollLeft > 0)
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
    }

    useEffect(() => {
        updateScrollState()
        window.addEventListener("resize", updateScrollState)
        return () => window.removeEventListener("resize", updateScrollState)
    }, [])

    const scrollBy = (distance: number) => {
        scrollRef.current?.scrollBy({ left: distance, behavior: "smooth" })
    }

    return (
        <div className="mx-auto max-w-7xl px-6 sm:px-16 lg:px-16 mt-8">
            <div className="relative">
                {canScrollLeft && (
                    <button
                        type="button"
                        onClick={() => scrollBy(-320)}
                        aria-label="Scroll left"
                        className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-black hover:bg-black hover:text-white transition-colors"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                )}

                <div
                    ref={scrollRef}
                    onScroll={updateScrollState}
                    className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="snap-start shrink-0 w-84 rounded-2xl border border-black p-4 transition-shadow bg-white hover:shadow-lg hover:bg-accent/50"
                        >
                            <div className="flex items-start gap-3">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-32 w-32 rounded-2xl object-cover border border-black"
                                />
                                <div className="flex flex-col gap-2">
                                    <span
                                        className={cn(
                                            "w-fit rounded-full px-3 py-1 text-xs font-medium border border-black",
                                            service.badgeClassName
                                        )}
                                    >
                                        {service.category}
                                    </span>
                                    <p className="font-semibold leading-snug">{service.title}</p>
                                    {/* <p className="text-sm text-muted-foreground">
                                        {service.lessons} Lessons &bull; {service.level}
                                    </p> */}
                                    <div className="mt-1 flex items-center gap-1 text-sm font-medium">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        {service.rating.toFixed(1)}
                                        <span className="text-muted-foreground font-normal">
                                            ({service.reviews})
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>

                {canScrollRight && (
                    <button
                        type="button"
                        onClick={() => scrollBy(320)}
                        aria-label="Scroll right"
                        className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-black hover:bg-black hover:text-white transition-colors"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                )}
            </div>
        </div>
    )
}
