"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export default function Hero() {
    return (
        <div className="mt-28">
            <main>
                <div className="relative isolate">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                <div
                    aria-hidden="true"
                    className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                >
                    <div
                        style={{
                            clipPath:
                            'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                        }}
                        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        />
                </div>
                <div className="overflow-hidden">
                    <div className="mx-auto max-w-7xl pt-8 sm:pt-60 lg:pt-10 px-6 sm:px-16 lg:px-8">
                        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 grid lg:flex lg:max-w-none lg:items-start">
                            <div className="relative w-full lg:max-w-md lg:shrink-0 xl:max-w-xl lg:ml-10 order-last lg:order-first pt-2 lg:pt-7">
                                <h1 className="font-semibold tracking-tight text-outline text-4xl sm:text-5xl">
                                    Find courses for your best future
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-outline lg:max-w-none">
                                    Your Future Awaits: Take Control of Your Destiny. Embrace Change, Seize New Opportunities, and Turn Your Dreams into Reality with Us. Don’t Let This Moment Pass!
                                </p>
                                <div className="mt-6 flex items-center gap-x-6">
                                    <Button className="ring-1 ring-black rounded-full">Browse Courses</Button>
                                </div>
                                <Separator className="my-5 bg-primary" />
                                <div className="mt-4 lg:mt-7 block lg:flex">
                                    <div className="flex-none">
                                        <p className="text-lg leading-8 text-primary sm:max-w-md lg:max-w-none">
                                            Popular Courses
                                        </p>
                                    </div>
                                    <div className="grow mt-4 lg:mt-0">
                                        <div className="flex flex-wrap">
                                            <div className="ml-3 mb-3 inline-flex">
                                                <Button variant="alternative_1" className="ring-1 ring-black rounded-full">Sales</Button>
                                            </div>
                                            <div className="ml-3 mb-3 inline-flex">
                                                <Button variant="alternative_2" className="ring-1 ring-black rounded-full">Marketing</Button>
                                            </div>
                                            <div className="ml-3 mb-3 inline-flex">
                                                <Button variant="alternative_3" className="ring-1 ring-black rounded-full">Eksportir</Button>
                                            </div>
                                            <div className="ml-3 mb-3 inline-flex">
                                                <Button variant="alternative_4" className="ring-1 ring-black rounded-full">UMKM Go Digital</Button>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-8 sm:-mt-44 sm:justify-start lg:mt-0 lg:pl-0 lg:mr-10 order-first lg:order-last">
                                <div className="relative">
                                    {/* <Skeleton className="aspect-[3/2] w-full rounded-3xl mb-5" /> */}
                                    <img
                                        loading="lazy"
                                        alt=""
                                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                        className="aspect-[3/2] w-full rounded-3xl bg-gray-900/5 object-cover shadow-lg ring-1 ring-primary mb-5"
                                    />
                                    <div className="hidden lg:flex">
                                        {/* <Skeleton className="aspect-auto h-72 w-[48.5%] rounded-3xl mr-2" /> */}
                                        <img
                                            loading="lazy"
                                            alt=""
                                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                            className="aspect-auto h-72 w-[48.5%] rounded-3xl bg-gray-900/5 object-cover shadow-lg ring-1 ring-primary mr-2"
                                        />
                                        <Skeleton className="aspect-auto h-72 w-[48.5%] rounded-3xl ml-2" />
                                        {/* <img
                                            loading="lazy"
                                            alt=""
                                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                            className="aspect-auto h-72 w-[48.5%] rounded-3xl bg-gray-900/5 object-cover shadow-lg ring-1 ring-black ml-2"
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </main>
        </div>
    );
}