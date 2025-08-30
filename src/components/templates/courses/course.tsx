'use client'

// import { useState } from 'react'

// import {
//     Collapsible,
//     CollapsibleContent,
//     CollapsibleTrigger,
//   } from "@/components/ui/collapsible"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"


export default function Course() {
//   const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
        <main className="mt-30 sm:mt-36 mb-16 lg:mx-16">
            <div className="block sm:hidden">
                <div className="fixed sm:hidden overflow-hidden bg-yellow-100 ring-1 ring-black drop-shadow-[5px_5px_rgba(0,0,0,1)] h-60 w-full">
                    <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
                </div>
                <div className="px-4 sm:px-6 pt-60">
                {/* Your content */}

                    <div className='grid grid-cols-12 md:gap-10'>
                    
                    <div className='col-start-1 col-span-12 md:col-start-1 md:col-span-8'>
                        <div className="w-fit rounded-2xl bg-outline ring-1 ring-primary ml-0 mt-5 mb-2 px-2 py-1 text-center text-sm font-medium text-primary">
                            UMKM Level Up
                        </div>
                        <h3 className='text-xl font-bold mt-4 text-[#e5e5e5]'>Digital Marketing untuk pemula</h3>
                        <h3 className='text-lg font-normal mt-4 text-[#e5e5e5]'>About</h3>
                        <p className='text-sm font-thin text-[#e5e5e5]'>
                        Kebutuhan komoditas  budi daya mengalami peningkatan, termasuk ikan lele. 
                        Dengan pengalaman 10 tahun pada budidaya ini, 
                        kami akan ajarkan step by step untuk membudi daya ikan lele </p>
                        <h3 className='text-lg font-normal mt-4 text-[#e5e5e5]'>Required</h3>
                        <div className="pt-4 pb-8">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                                <img
                                    alt="Reform"
                                    src="https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="Tuple"
                                    src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="SavvyCal"
                                    src="https://plus.unsplash.com/premium_photo-1720857673569-3b2d8c886096?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="Statamic"
                                    src="https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:block col-start-1 col-span-12 md:col-start-9 md:col-span-4 mt-6 md:mt-0'>
                        <h3 className='text-xl font-normal text-[#e5e5e5] mb-3'>Silabus</h3>
                        <Accordion type="single" collapsible className="w-full">
                            {/* Item 1 */}
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="group ring-1 ring-[#343a40] w-full text-left p-2 px-4 rounded-xl mb-2 bg-accent hover:bg-accent flex items-center justify-between no-underline hover:no-underline">
                                    <div>
                                        <p className="text-base">Perkenalan</p>
                                        <p className="text-xs text-muted-foreground">2 Videos</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 bg-accent hover:bg-accent">
                                    Video 1
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 2
                                </AccordionContent>
                            </AccordionItem>
                            {/* Item 2 */}
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="group ring-1 ring-[#343a40] w-full text-left p-2 px-4 rounded-xl mb-2 hover:bg-accent flex items-center justify-between no-underline hover:no-underline">
                                    <div>
                                        <p className="text-base">Pendahuluan</p>
                                        <p className="text-xs text-muted-foreground">3 Videos</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 1
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 2
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 3
                                </AccordionContent>
                            </AccordionItem>
                            {/* Item 3 */}
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="group ring-1 ring-[#343a40] w-full text-left p-2 px-4 rounded-xl mb-2 hover:bg-accent flex items-center justify-between no-underline hover:no-underline">
                                    <div>
                                        <p className="text-base">Topik Utama</p>
                                        <p className="text-xs text-muted-foreground">5 Videos</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 1
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 2
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 3
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 4
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 5
                                </AccordionContent>
                            </AccordionItem>
                            {/* Item 4 */}
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="group ring-1 ring-[#343a40] w-full text-left p-2 px-4 rounded-xl mb-2 hover:bg-accent flex items-center justify-between no-underline hover:no-underline">
                                    <div>
                                        <p className="text-base">Penutup</p>
                                        <p className="text-xs text-muted-foreground">1 Video</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 1
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background shadow-sm">
                        <div className="block md:hidden">
                            <div className="flex items-center justify-between p-4">
                                <button className="w-full text-white p-1 mr-2 rounded-full border-1 border-dashed border-white font-medium hover:bg-primary/80">
                                    Previous Video
                                </button>
                                <button className="w-full bg-white text-black p-1 ml-2 rounded-full font-medium hover:bg-primary/80">
                                    Next Video
                                </button>
                            </div>
                            {/* <Separator /> */}
                        </div>
                    </div>

                    </div>

                </div>
            </div>
            <div className="hidden sm:block">
                <div className="px-4 sm:px-6 lg:px-8">
                {/* Your content */}

                    <div className='mb-6'>
                        <div className='grid grid-cols-12'>
                            <div className='col-start-1 col-span-10 md:col-span-11'>
                                <div className='flex items-center'>
                                    <h1 className='text-2xl lg:text-4xl font-extrabold text-[#e5e5e5]'>Course</h1>
                                </div>
                            </div>
                            <div className='col-start-11 col-span-1 md:col-start-12 md:col-span-1 content-center float-end'>
                                <div className='flex items-center group cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="size-4 transition-transform duration-300 group-hover:-translate-x-2">
                                        <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" />
                                    </svg>
                                    <p className='text-[#e5e5e5] ml-2'>Kembali</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='mb-5'>
                        <div className='grid grid-cols-12'>
                            <div className='col-start-1 col-span-10 md:col-span-11'>
                                <div className='flex items-center'>
                                    <h2 className='text-lg lg:text-2xl font-normal truncate text-[#e5e5e5]'>Digital Marketing untuk pemula</h2>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='grid grid-cols-12 md:gap-10'>
                    
                    <div className='col-start-1 col-span-12 md:col-start-1 md:col-span-8'>
                        <div className="hidden sm:block overflow-hidden rounded-2xl bg-yellow-100 ring-1 ring-black drop-shadow-[5px_5px_rgba(0,0,0,1)] h-96">
                            <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
                        </div>
                        <div className="w-fit rounded-2xl bg-outline ring-1 ring-primary ml-0 mt-5 mb-2 px-2 py-1 text-center text-sm font-medium text-primary">
                            UMKM Level Up
                        </div>
                        <h3 className='text-xl font-bold mt-4 text-[#e5e5e5]'>Budidaya lele omset 10 juta</h3>
                        <h3 className='text-lg font-normal mt-4 text-[#e5e5e5]'>About</h3>
                        <p className='text-sm font-thin text-[#e5e5e5]'>
                            Kebutuhan komoditas  budi daya mengalami peningkatan, termasuk ikan lele. 
                            Dengan pengalaman 10 tahun pada budidaya ini, 
                            kami akan ajarkan step by step untuk membudi daya ikan lele 
                        </p>
                        <h3 className='text-lg font-normal mt-4 text-[#e5e5e5]'>Required</h3>
                        <div className="pt-4 pb-8">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                                <img
                                    alt="Reform"
                                    src="https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="Tuple"
                                    src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="SavvyCal"
                                    src="https://plus.unsplash.com/premium_photo-1720857673569-3b2d8c886096?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="Statamic"
                                    src="https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:block col-start-1 col-span-12 md:col-start-9 md:col-span-4 mt-6 md:mt-0'>
                        <h3 className='text-xl font-normal text-[#e5e5e5] mb-3'>Silabus</h3>
                        <Accordion type="single" collapsible className="w-full">
                            {/* Item 1 */}
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="group ring-1 ring-[#343a40] w-full text-left p-2 px-4 rounded-xl mb-2 bg-accent hover:bg-accent flex items-center justify-between no-underline hover:no-underline">
                                    <div>
                                        <p className="text-base">Perkenalan</p>
                                        <p className="text-xs text-muted-foreground">2 Videos</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 bg-accent hover:bg-accent">
                                    Video 1
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 2
                                </AccordionContent>
                            </AccordionItem>
                            {/* Item 2 */}
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="group ring-1 ring-[#343a40] w-full text-left p-2 px-4 rounded-xl mb-2 hover:bg-accent flex items-center justify-between no-underline hover:no-underline">
                                    <div>
                                        <p className="text-base">Pendahuluan</p>
                                        <p className="text-xs text-muted-foreground">3 Videos</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 1
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 2
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 3
                                </AccordionContent>
                            </AccordionItem>
                            {/* Item 3 */}
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="group ring-1 ring-[#343a40] w-full text-left p-2 px-4 rounded-xl mb-2 hover:bg-accent flex items-center justify-between no-underline hover:no-underline">
                                    <div>
                                        <p className="text-base">Topik Utama</p>
                                        <p className="text-xs text-muted-foreground">5 Videos</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 1
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 2
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 3
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 4
                                </AccordionContent>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 5
                                </AccordionContent>
                            </AccordionItem>
                            {/* Item 4 */}
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="group ring-1 ring-[#343a40] w-full text-left p-2 px-4 rounded-xl mb-2 hover:bg-accent flex items-center justify-between no-underline hover:no-underline">
                                    <div>
                                        <p className="text-base">Penutup</p>
                                        <p className="text-xs text-muted-foreground">1 Video</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent">
                                    Video 1
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background shadow-sm">
                        <div className="block md:hidden">
                            <div className="flex items-center justify-between p-4">
                                <button className="w-full text-white p-1 mr-2 rounded-full border-1 border-dashed border-white font-medium hover:bg-primary/80">
                                    Previous Video
                                </button>
                                <button className="w-full bg-white text-black p-1 ml-2 rounded-full font-medium hover:bg-primary/80">
                                    Next Video
                                </button>
                            </div>
                            {/* <Separator /> */}
                        </div>
                    </div>

                    </div>

                </div>
            </div>
        </main>
    </>
  )
}
