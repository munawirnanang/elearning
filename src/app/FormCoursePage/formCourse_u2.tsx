export default function Formcourse() {
  return (
    <>
    <main className="mt-24 lg:mx-16 py-16">
        <div className="px-4 sm:px-6 lg:px-8">
            {/* Your content */}

            <div className='mb-5'>
            <div className='grid grid-cols-12'>
                <div className='col-start-1 col-span-10 md:col-span-11'>
                    <div className='flex items-baseline'>
                        <h1 className='text-4xl font-extrabold text-gray-800'>Course</h1>
                        <h3 className='text-xl font-normal text-gray-800 ml-1'>/ Edit</h3>
                    </div>
                </div>
                <div className='col-start-11 col-span-1 md:col-start-12 md:col-span-1 content-center float-end'>
                    <div className='flex items-center group cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="size-5 transition-transform duration-300 group-hover:-translate-x-2">
                        <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" />
                    </svg>
                    <p className='text-black ml-2'>Kembali</p>
                    </div>
                </div>
            </div>
            </div>

            <div className='grid grid-cols-12'>
            <div className='col-start-1 col-span-12'>
                <div className="overflow-hidden rounded-lg bg-[#FFDDDD] ring-1 ring-black drop-shadow-[5px_5px_rgba(0,0,0,1)] h-full">
                    <div className="px-4 py-5 sm:p-6">
                        {/* Content goes here */}
                        
                        <form>
                            <div className="space-y-12">
                                <div className="border-b border-gray-900/10">

                                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 grid-cols-12">
                                        <div className="col-span-12">
                                            <label htmlFor="judul" className="block text-sm/6 font-medium text-gray-900">
                                                Judul
                                            </label>
                                            <div className="mt-2">
                                                <div className="flex items-center rounded-lg bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        id="judul"
                                                        name="judul"
                                                        type="text"
                                                        placeholder="janesmith"
                                                        className="block min-w-0 grow rounded-lg py-1.5 pl-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 ring-1 ring-black"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="deskripsi" className="block text-sm/6 font-medium text-gray-900">
                                                Deskripsi
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                id="deskripsi"
                                                name="deskripsi"
                                                rows={3}
                                                className="block w-full rounded-lg ring-1 ring-black bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                defaultValue={''}
                                                />
                                            </div>
                                            <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about course.</p>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="judul" className="block text-sm/6 font-medium text-gray-900">
                                                Jenis Course
                                            </label>
                                            <div className="mt-2">
                                                <div className="flex items-center rounded-lg bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <select name="" id="" className="block min-w-0 grow rounded-lg py-1.5 pl-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 ring-1 ring-black">
                                                        <option value="">Pilih Jenis</option>
                                                        <option value="UMKM Level Up">UMKM Level Up</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="cover photo" className="block text-sm/6 font-medium text-gray-900">
                                                Cover Judul
                                            </label>
                                            <div className="mt-2 flex items-center gap-x-3">
                                                {/* <UserCircleIcon aria-hidden="true" className="size-12 text-black" /> */}
                                                <button
                                                type="button"
                                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50"
                                                >
                                                Change
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="silabus" className="block text-sm/6 font-medium text-gray-900">
                                                Silabus
                                            </label>
                                            <div className="mt-2 grid rounded-lg border border-dashed border-gray-900/25 px-6 py-4">
                                                <div>
                                                    <div className="col-span-12 mb-4">
                                                        <label htmlFor="materi" className="block text-sm/6 font-medium text-gray-900">
                                                            Materi 1
                                                        </label>
                                                        <div className="mt-2">
                                                            <div className="flex items-center rounded-lg bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                                <input
                                                                    id="materi"
                                                                    name="materi"
                                                                    type="text"
                                                                    placeholder="janesmith"
                                                                    className="block min-w-0 grow rounded-lg py-1.5 pl-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 ring-1 ring-black"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-full mb-4">
                                                        <label htmlFor="deskripsi" className="block text-sm/6 font-medium text-gray-900">
                                                            Deskripsi
                                                        </label>
                                                        <div className="mt-2">
                                                            <textarea
                                                            id="deskripsi"
                                                            name="deskripsi"
                                                            rows={3}
                                                            className="block w-full rounded-lg ring-1 ring-black bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            defaultValue={''}
                                                            />
                                                        </div>
                                                        <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about course.</p>
                                                    </div>
                                                    <div className="col-span-full">
                                                        <label htmlFor="cover photo" className="block text-sm/6 font-medium text-gray-900">
                                                            Media Pembelajaran
                                                        </label>
                                                        <div className="mt-2 flex items-center gap-x-3">
                                                            {/* <UserCircleIcon aria-hidden="true" className="size-12 text-black" /> */}
                                                            <button
                                                            type="button"
                                                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50"
                                                            >
                                                            pilih
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b border-gray-900/10">

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="tanggal_mulai" className="block text-sm/6 font-medium text-gray-900">
                                                Tanggal Mulai
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                id="tanggal_mulai"
                                                name="tanggal_mulai"
                                                type="date"
                                                autoComplete="given-name"
                                                className="block w-full rounded-lg ring-1 ring-black bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="tanggal_berakhir" className="block text-sm/6 font-medium text-gray-900">
                                                Tanggal Berakhir
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                id="tanggal_berakhir"
                                                name="tanggal_berakhir"
                                                type="date"
                                                autoComplete="family-name"
                                                className="block w-full rounded-lg ring-1 ring-black bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="harga" className="block text-sm/6 font-medium text-gray-900">
                                                Harga
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                id="harga"
                                                name="harga"
                                                type="number"
                                                autoComplete="Angka"
                                                className="block w-full rounded-lg ring-1 ring-black bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3 mb-5">
                                            <div className="col-span-full">
                                                <label htmlFor="cover photo" className="block text-sm/6 font-medium text-gray-900">
                                                    e-book / community / tools
                                                </label>
                                                <div className="mt-2 flex items-center gap-x-3">
                                                    {/* <UserCircleIcon aria-hidden="true" className="size-12 text-black" /> */}
                                                    <button
                                                    type="button"
                                                    className="rounded-lg bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50"
                                                    >
                                                    pilih
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base/7 font-semibold text-gray-900">Notifications</h2>
                                <p className="mt-1 text-sm/6 text-gray-600">
                                    We will always let you know about important changes, but you pick what else you want to hear about.
                                </p>

                                <div className="mt-10 space-y-10">
                                    <fieldset>
                                    <legend className="text-sm/6 font-semibold text-gray-900">By email</legend>
                                    <div className="mt-6 space-y-6">
                                        <div className="flex gap-3">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                            <input
                                                defaultChecked
                                                id="comments"
                                                name="comments"
                                                type="checkbox"
                                                aria-describedby="comments-description"
                                                className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                            />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                            >
                                                <path
                                                d="M3 8L6 11L11 3.5"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-0 group-has-[:checked]:opacity-100"
                                                />
                                                <path
                                                d="M3 7H11"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                />
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                            Comments
                                            </label>
                                            <p id="comments-description" className="text-gray-500">
                                            Get notified when someones posts a comment on a posting.
                                            </p>
                                        </div>
                                        </div>
                                        <div className="flex gap-3">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                            <input
                                                id="candidates"
                                                name="candidates"
                                                type="checkbox"
                                                aria-describedby="candidates-description"
                                                className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                            />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                            >
                                                <path
                                                d="M3 8L6 11L11 3.5"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-0 group-has-[:checked]:opacity-100"
                                                />
                                                <path
                                                d="M3 7H11"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                />
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label htmlFor="candidates" className="font-medium text-gray-900">
                                            Candidates
                                            </label>
                                            <p id="candidates-description" className="text-gray-500">
                                            Get notified when a candidate applies for a job.
                                            </p>
                                        </div>
                                        </div>
                                        <div className="flex gap-3">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                            <input
                                                id="offers"
                                                name="offers"
                                                type="checkbox"
                                                aria-describedby="offers-description"
                                                className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                            />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                            >
                                                <path
                                                d="M3 8L6 11L11 3.5"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-0 group-has-[:checked]:opacity-100"
                                                />
                                                <path
                                                d="M3 7H11"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                />
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label htmlFor="offers" className="font-medium text-gray-900">
                                            Offers
                                            </label>
                                            <p id="offers-description" className="text-gray-500">
                                            Get notified when a candidate accepts or rejects an offer.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </fieldset>

                                    <fieldset>
                                    <legend className="text-sm/6 font-semibold text-gray-900">Push notifications</legend>
                                    <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                                    <div className="mt-6 space-y-6">
                                        <div className="flex items-center gap-x-3">
                                        <input
                                            defaultChecked
                                            id="push-everything"
                                            name="push-notifications"
                                            type="radio"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                        />
                                        <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">
                                            Everything
                                        </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                        <input
                                            id="push-email"
                                            name="push-notifications"
                                            type="radio"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                        />
                                        <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">
                                            Same as email
                                        </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                        <input
                                            id="push-nothing"
                                            name="push-notifications"
                                            type="radio"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                        />
                                        <label htmlFor="push-nothing" className="block text-sm/6 font-medium text-gray-900">
                                            No push notifications
                                        </label>
                                        </div>
                                    </div>
                                    </fieldset>
                                </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="text-sm/6 font-semibold text-gray-900">
                                Cancel
                                </button>
                                <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Save
                                </button>
                            </div>
                            </form>

                    </div>
                </div>
            </div>
            </div>

        </div>
    </main>
    </>
  )
}
