'use client'

// import { useState } from 'react'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"


export default function Course() {
//   const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
        <main className="mt-24 lg:mx-16">
            <div className="px-4 sm:px-6 lg:px-8">
                {/* Your content */}

                <div className='mb-6'>
                    <h1 className='text-2xl lg:text-4xl font-extrabold text-[#e5e5e5]'>Course</h1>
                </div>

                <div className='mb-5'>
                    <div className='grid grid-cols-12'>
                        <div className='col-start-1 col-span-10 md:col-span-11'>
                            <div className='flex items-center'>
                                <h2 className='text-lg lg:text-2xl font-normal truncate text-[#e5e5e5]'>Digital Marketing untuk pemula</h2>
                            </div>
                        </div>
                        <div className='col-start-11 col-span-1 md:col-start-12 md:col-span-1 content-center float-end'>
                            <div className='flex items-center group cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="size-5 transition-transform duration-300 group-hover:-translate-x-2">
                                <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" />
                            </svg>
                            <p className='text-[#e5e5e5] ml-2'>Kembali</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 md:gap-10'>
                
                <div className='col-start-1 col-span-12 md:col-start-1 md:col-span-8'>
                    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black drop-shadow-[5px_5px_rgba(0,0,0,1)] h-96">
                    <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
                    </div>
                    <h3 className='text-xl font-normal mt-4 text-[#e5e5e5]'>About</h3>
                    <p className='text-sm font-thin text-[#e5e5e5]'>
                    Kebutuhan komoditas  budi daya mengalami peningkatan, termasuk ikan lele. 
                    Dengan pengalaman 10 tahun pada budidaya ini, 
                    kami akan ajarkan step by step untuk membudi daya ikan lele </p>
                </div>

                <div className='col-start-1 col-span-12 md:col-start-9 md:col-span-4 mt-6 md:mt-0'>
                    <h3 className='text-xl font-normal text-[#e5e5e5] mb-3'>Silabus</h3>
                    <Collapsible>
                        <CollapsibleTrigger className='ring-1 ring-[#343a40] w-full text-left p-2 px-4 rounded-xl mb-2 bg-accent hover:bg-accent'>
                            <div>
                                <p className='text-base'>Perkenalan</p>
                                <p className="text-sm text-muted-foreground">2 Videos</p>
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className='ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 bg-accent hover:bg-accent'>
                            Video 1
                        </CollapsibleContent>
                        <CollapsibleContent className='ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent'>
                            Video 2
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible>
                        <CollapsibleTrigger className='ring-1 ring-[#343a40] w-full text-left p-2 px-4 rounded-xl mb-2 hover:bg-accent'>
                            <div>
                                <p className='text-base'>Pendahuluan</p>
                                <p className="text-sm text-muted-foreground">3 Videos</p>
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className='ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent'>
                            Video 1
                        </CollapsibleContent>
                        <CollapsibleContent className='ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent'>
                            Video 2
                        </CollapsibleContent>
                        <CollapsibleContent className='ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent'>
                            Video 3
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible>
                        <CollapsibleTrigger className='ring-1 ring-[#343a40] w-full text-left p-2 px-4 rounded-xl mb-2 hover:bg-accent'>
                            <div>
                                <p className='text-base'>Praktek</p>
                                <p className="text-sm text-muted-foreground">5 Videos</p>
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className='ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent'>
                            Video 1
                        </CollapsibleContent>
                        <CollapsibleContent className='ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent'>
                            Video 2
                        </CollapsibleContent>
                        <CollapsibleContent className='ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent'>
                            Video 3
                        </CollapsibleContent>
                        <CollapsibleContent className='ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent'>
                            Video 4
                        </CollapsibleContent>
                        <CollapsibleContent className='ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent'>
                            Video 5
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible>
                        <CollapsibleTrigger className='ring-1 ring-[#343a40] w-full text-left p-2 px-4 rounded-xl mb-2 hover:bg-accent'>
                            <div>
                                <p className='text-base'>Pengemasan</p>
                                <p className="text-sm text-muted-foreground">1 Video</p>
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className='ring-1 ring-[#343a40] w-auto text-left p-2 px-4 rounded-xl mb-2 ml-3 pl-7 hover:bg-accent'>
                            Video 1
                        </CollapsibleContent>
                    </Collapsible>
                </div>

                </div>

            </div>
        </main>
    </>
  )
}
