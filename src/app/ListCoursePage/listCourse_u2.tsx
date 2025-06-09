import { Button } from "@/components/ui/button"

export default function Listcourse() {

  return (
    <>
    <main className="mt-24 lg:mx-16">
        <div className="px-4 sm:px-6 lg:px-8">
            {/* Your content */}

            <div className='mb-6'>
                <h1 className='text-2xl lg:text-4xl font-extrabold text-primary'>My Courses</h1>
            </div>

            <div className='grid grid-cols-12 lg:mx-24'>
                <div className='col-start-1 col-span-12'>
                    
                    <div className="overflow-hidden rounded-2xl bg-[#FFDDDD] ring-1 ring-primary drop-shadow-[5px_5px_rgba(0,0,0,1)] h-auto mt-2 mb-8">
                        <div className="px-3 py-3 sm:px-4 sm:py-3">
                            {/* Content goes here */}
                            <div className='grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-12 gap-4'>
                                <div className='col-span-4 sm:col-span-6 md:col-span-9 lg:col-span-11 mr-3 md:mr-4'>
                                    <p className='text-xs md:text-sm font-medium text-muted-foreground mb-2 truncate'>1 Jan - 31 March 2025 (your next schedule on <span className='text-red-600'>6 feb 2025</span>)</p>
                                    <div className="flex justify-between">
                                        <h2 className='text-base md:text-xl font-semibold truncate'>Google For Business</h2>
                                        <div className="flex gap-2">
                                            <h2 className='text-base md:text-lg font-semibold truncate text-red-500 line-through'>Rp. 799.000</h2>
                                            <h2 className='text-base md:text-xl font-semibold truncate'>Rp. 499.000</h2>
                                        </div>
                                    </div>
                                    <div aria-hidden="true" className="mt-1">
                                        <div className="overflow-hidden rounded-full bg-white">
                                            <div style={{ width: '75%' }} className="h-1 rounded-full bg-indigo-600" />
                                        </div>
                                        <div className="mt-2 grid-cols-2 text-xs md:text-sm font-medium text-muted-foreground grid">
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
                                <div className='col-span-5 sm:col-span-7 md:col-span-10 lg:col-span-12 border-t-2 border-black w-full text-center'>
                                    <div className='grid grid-cols-10 gap-4'>
                                        <div className='col-span-2'>
                                            {/* <p className='font-normal text-xs text-blue-500 hover:underline pt-2'>download certificate</p> */}
                                            <Button variant="link" className='text-blue-500 whitespace-normal break-words text-center text-xs md:text-sm'>edit this course</Button>
                                        </div>
                                        <div className='col-span-2'>
                                            {/* <p className='font-normal text-xs text-blue-500 hover:underline pt-2'>download e-book</p> */}
                                            <Button variant="link" className='text-blue-500 whitespace-normal break-words text-center text-xs md:text-sm'>closed this course</Button>
                                        </div>
                                        <div className='col-span-2'>
                                            {/* <p className='font-normal text-xs text-blue-500 hover:underline pt-2'>join this community</p> */}
                                            <Button variant="link" className='text-blue-500 whitespace-normal break-words text-center text-xs md:text-sm'>your list students</Button>
                                        </div>
                                        <div className='col-span-2'>
                                            {/* <p className='font-normal text-xs text-blue-500 hover:underline pt-2'>join this community</p> */}
                                            <Button variant="link" className='text-blue-500 whitespace-normal break-words text-center text-xs md:text-sm'>download e-book</Button>
                                        </div>
                                        <div className='col-span-2'>
                                            {/* <p className='font-normal text-xs text-blue-500 hover:underline pt-2'>join this community</p> */}
                                            <Button variant="link" className='text-blue-500 whitespace-normal break-words text-center text-xs md:text-sm'>see listing</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="overflow-hidden rounded-2xl bg-[#FFDDDD] ring-1 ring-primary drop-shadow-[5px_5px_rgba(0,0,0,1)] h-auto mt-2 mb-8">
                        <div className="px-3 py-3 sm:px-4 sm:py-3">
                            {/* Content goes here */}
                            <div className='grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-12 gap-4'>
                                <div className='col-span-4 sm:col-span-6 md:col-span-9 lg:col-span-11 mr-3 md:mr-4'>
                                    <p className='text-xs md:text-sm font-medium text-muted-foreground mb-2 truncate'>Lifetime</p>
                                    <div className="flex justify-between">
                                        <h2 className='text-base md:text-xl font-semibold truncate'>Google For Business</h2>
                                        <div className="flex gap-2">
                                            <h2 className='text-base md:text-lg font-semibold truncate text-red-500 line-through'>Rp. 799.000</h2>
                                            <h2 className='text-base md:text-xl font-semibold truncate'>Rp. 499.000</h2>
                                        </div>
                                    </div>
                                    <div aria-hidden="true" className="mt-1">
                                        <div className="overflow-hidden rounded-full bg-white">
                                            <div style={{ width: '75%' }} className="h-1 rounded-full bg-indigo-600" />
                                        </div>
                                        <div className="mt-2 grid-cols-2 text-xs md:text-sm font-medium text-muted-foreground grid">
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
                                <div className='col-span-5 sm:col-span-7 md:col-span-10 lg:col-span-12 border-t-2 border-black w-full text-center'>
                                    <div className='grid grid-cols-10 gap-4'>
                                        <div className='col-span-2'>
                                            {/* <p className='font-normal text-xs text-blue-500 hover:underline pt-2'>download certificate</p> */}
                                            <Button variant="link" className='text-blue-500 whitespace-normal break-words text-center text-xs md:text-sm'>edit this course</Button>
                                        </div>
                                        <div className='col-span-2'>
                                            {/* <p className='font-normal text-xs text-blue-500 hover:underline pt-2'>download e-book</p> */}
                                            <Button variant="link" className='text-blue-500 whitespace-normal break-words text-center text-xs md:text-sm'>Open this course</Button>
                                        </div>
                                        <div className='col-span-2'>
                                            {/* <p className='font-normal text-xs text-blue-500 hover:underline pt-2'>join this community</p> */}
                                            <Button variant="link" className='text-blue-500 whitespace-normal break-words text-center text-xs md:text-sm'>download e-book</Button>
                                        </div>
                                        <div className='col-span-2'>
                                            {/* <p className='font-normal text-xs text-blue-500 hover:underline pt-2'>join this community</p> */}
                                            <Button variant="link" className='text-blue-500 whitespace-normal break-words text-center text-xs md:text-sm'>see listing</Button>
                                        </div>
                                    </div>
                                </div>
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
