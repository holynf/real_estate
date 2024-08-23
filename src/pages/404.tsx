import React from 'react'
import Link from 'next/link'


const NotFound = () => {
    return (
        <div>
            <div className='w-full mx-auto bg-white-200'>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <div className='text-center py-20 w-[70%]'>
                        <div className='text-2xl lg:text-4xl my-20'>
                            <h1 className='font-bold text-8xl'>404</h1>
                            <h4 className='font-[yekanBakh] leading-relaxed text-slate-800'>صفحه‌ای که به دنبال آن بودید پیدا نشد!</h4>
                        </div>
                        <Link href="/">
                            <button className="rounded-2xl greenbg px-3 py-2 mx-auto text-white flex border border-red my-5 gap-2 hover:bg-red hover:ease-in-out hover:transition-all hover:delay-150">
                                <span className='text-black'>بازگشت به صفحه اصلی</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                </svg>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound