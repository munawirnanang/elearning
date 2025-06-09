'use client'

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableDemo } from "@/components/shared/dashboard-table-transaction_u2"

export default function Dashboard() {
    
//   const [date, setDate] = React.useState<Date | undefined>(new Date())
  
  return (
    <>
    <main className="mt-24 lg:mx-16">
        <div className="px-4 sm:px-10 lg:px-8">
            {/* Your content */}

            <div className='mb-6'>
            <h1 className='text-2xl lg:text-4xl font-extrabold'>Dashboard</h1>
            </div>

            <div className="ring-1 ring-primary drop-shadow-[5px_5px_rgba(0,0,0,1)] sm:rounded-2xl bg-[#C09EFA] mb-10">
            <div className="px-4 py-5">
                <p className='text-black font-bold'>Earn more <span className='text-yellow-300'>rewards</span>! <span className='text-blue-600'>Share</span> this code and earn points directly in your wallet.</p>
                
                <div className='sm:flex sm:justify-between'>
                    <form className="mt-5 sm:flex sm:items-center">
                        <div className="">
                            <label htmlFor="linkAffiliate" className="sr-only">
                                Link Affiliate
                            </label>
                            <Input
                                id="linkAffiliate"
                                name="linkAffiliate"
                                type="text"
                                placeholder="https://logo.com/m/willy+amaluddin/123855"
                                value="https://logo.com/m/willy+amaluddin/123855"
                                readOnly
                                className="block w-full md:w-80 rounded-md ring-1 ring-primary border-0 p-1.5 text-gray-900 shadow-sm bg-[#C4C4C4] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="mt-3 w-full inline-flex items-center justify-center rounded-md ring-1 ring-primary bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-0 sm:w-auto"
                        >
                            Copy
                        </Button>
                    </form>
                    <form className="mt-5 hidden sm:flex sm:items-center">
                        <div className="">
                            <label htmlFor="reward" className="sr-only">
                                Reward
                            </label>
                            <Input
                                id="reward"
                                name="reward"
                                type="text"
                                placeholder="Rp. 110.000"
                                value="Rp. 110.000"
                                readOnly
                                className="block ring-1 w-24 ring-primary border-0 p-1.5 text-gray-900 shadow-sm bg-[#42FF8E] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="mt-3 inline-flex w-full items-center justify-center ring-1 ring-primary bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-0 sm:w-auto"
                        >
                            Detail
                        </Button>
                    </form>
                </div>
            </div>
            </div>

            <div className='grid grid-cols-12 md:gap-10'>
            
                <div className='col-start-1 col-span-12 md:col-start-1 md:col-span-6 mb-10 md:mb-0'>
                    <h2 className='text-lg lg:text-2xl font-normal mb-2'>Learning Progress</h2>
                    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-primary drop-shadow-[5px_5px_rgba(0,0,0,1)] h-80">
                        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
                    </div>
                </div>

                <div className='col-start-1 col-span-12 md:col-start-7 md:col-span-6 mt-6 md:mt-0 mb-10 md:mb-0'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-lg lg:text-2xl font-normal'>Your On Going Courses</h2>
                        <p className='self-center'><Button variant="link" className='text-blue-600 text-md lg:text-lg'>see more </Button></p>   
                    </div>
                    <div className="overflow-hidden rounded-2xl bg-[#FFDDDD] ring-1 ring-primary drop-shadow-[5px_5px_rgba(0,0,0,1)] h-28 mt-2 mb-4">
                        <div className="px-3 py-3 sm:px-4 sm:py-3">
                            {/* Content goes here */}
                            <div className='grid grid-cols-5 sm:grid-cols-7 md:grid-cols-5 lg:grid-cols-7 gap-4'>
                                <div className='col-span-4 sm:col-span-6 md:col-span-4 lg:col-span-6 mr-3 md:mr-4'>
                                    <p className='text-sm lg:text-xs font-medium text-muted-foreground mb-2 truncate'>1 Jan - 31 March 2025 (your next schedule on <span className='text-red-600'>6 feb 2025</span>)</p>
                                    <h2 className='text-base font-normal truncate'>Digital Marketing untuk pemula</h2>
                                    <div aria-hidden="true" className="mt-1">
                                        <div className="overflow-hidden rounded-full bg-white">
                                            <div style={{ width: '37.5%' }} className="h-1 rounded-full bg-indigo-600" />
                                        </div>
                                        <div className="mt-2 grid-cols-2 text-xs font-medium text-muted-foreground grid">
                                            <div className="text-left truncate">37.5% Complited</div>
                                            <div className="text-right truncate">3/7 Lesson Finished</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-fit justify-self-end self-center'>
                                    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-primary h-fit group">
                                        <div className="p-4">
                                            {/* Content goes here */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="black" className="h-full size-6 sm:size-9 md:size-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl bg-[#FFDDDD] ring-1 ring-primary drop-shadow-[5px_5px_rgba(0,0,0,1)] h-auto mt-2 mb-4">
                        <div className="px-3 py-3 sm:px-4 sm:py-3">
                            {/* Content goes here */}
                            <div className='grid grid-cols-5 sm:grid-cols-7 md:grid-cols-5 lg:grid-cols-7 gap-4'>
                                <div className='col-span-4 sm:col-span-6 md:col-span-4 lg:col-span-6 mr-3 md:mr-4'>
                                    <p className='text-sm lg:text-xs font-medium text-muted-foreground mb-2 truncate'>1 Jan - 31 March 2025 (your next schedule on <span className='text-red-600'>6 feb 2025</span>)</p>
                                    <h2 className='text-base font-normal truncate'>Google For Business</h2>
                                    <div aria-hidden="true" className="mt-1">
                                        <div className="overflow-hidden rounded-full bg-white">
                                            <div style={{ width: '75%' }} className="h-1 rounded-full bg-indigo-600" />
                                        </div>
                                        <div className="mt-2 grid-cols-2 text-xs font-medium text-muted-foreground grid">
                                            <div className="text-left truncate">75% Complited</div>
                                            <div className="text-right truncate">8/10 Lesson Finished</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-fit justify-self-end self-center'>
                                    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-primary h-fit group">
                                        <div className="p-4">
                                            {/* Content goes here */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="black" className="h-full size-6 sm:size-9 md:size-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-5 sm:col-span-7 md:col-span-5 lg:col-span-7 border-t-2 border-black w-full text-center'>
                                    <div className='grid grid-cols-12 gap-4'>
                                        <div className='col-span-4'>
                                            {/* <p className='font-normal text-xs text-blue-500 hover:underline pt-2'>download certificate</p> */}
                                            <Button variant="link" className='text-blue-500 whitespace-normal break-words text-center text-xs'>download certificate</Button>
                                        </div>
                                        <div className='col-span-4'>
                                            {/* <p className='font-normal text-xs text-blue-500 hover:underline pt-2'>download e-book</p> */}
                                            <Button variant="link" className='text-blue-500 whitespace-normal break-words text-center text-xs'>download e-book</Button>
                                        </div>
                                        <div className='col-span-4'>
                                            {/* <p className='font-normal text-xs text-blue-500 hover:underline pt-2'>join this community</p> */}
                                            <Button variant="link" className='text-blue-500 whitespace-normal break-words text-center text-xs'>join this community</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
   
            <div className='col-span-12 md:col-start-1 md:col-span-6 mb-4 md:mb-0'>
                <div className='flex justify-between items-center mb-2'>
                    <h2 className='text-lg lg:text-2xl font-normal'>Transaction</h2>
                    <p className='self-center'><Button variant="link" className='text-blue-600 text-md lg:text-lg'>see more </Button></p>   
                </div>
                {/* <div className="overflow-x-auto overflow-y-auto rounded-2xl bg-white ring-1 ring-primary drop-shadow-[5px_5px_rgba(0,0,0,1)] h-80"> */}
                <div className="rounded-2xl ring-1 ring-primary bg-white drop-shadow-[5px_5px_rgba(0,0,0,1)]">
                <div className="p-4">
                    <div className="px-2">
                    <div className="flow-root">
                        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full align-middle px-3 md:px-10">
                                <DataTableDemo />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>

            <div className='col-span-12 md:col-start-7 md:col-span-6'>
                <div className='flex justify-between items-center mb-2'>
                    <h2 className='text-lg lg:text-2xl font-normal'>Schedule</h2>
                    <p className='self-center'><Button variant="link" className='text-blue-600 text-md lg:text-lg'>see more </Button></p>   
                </div>
                {/* <div className="overflow-x-auto overflow-y-auto rounded-2xl bg-white ring-1 ring-primary drop-shadow-[5px_5px_rgba(0,0,0,1)] h-80"> */}
                <div className="rounded-2xl ring-1 ring-primary bg-white drop-shadow-[5px_5px_rgba(0,0,0,1)]">
                    <div className="p-4">
                        <div className="px-2">
                        </div>
                    </div>
                </div>

            </div>

            </div>

        </div>
    </main>
    </>
  )
}
