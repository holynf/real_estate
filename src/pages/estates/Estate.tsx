import Link from 'next/link';
import React from 'react';

const Estate = (props: any) => {
    return (
        <div className='bg-white-100 border border-zinc-300 shadow-sm transition-shadow hover:shadow-xl rounded-md'>
            <div className='p-3'>
                <div className='relative overflow-hidden rounded-md'>
                    <div className=''>
                        <img className='object-cover object-center h-48 w-full' src={props ? props?.data?.image[0] : ""} alt="home" />
                    </div>
                    <div className='absolute bg-slate-800 w-full h-full top-0 bg-opacity-50'></div>
                    <h3 className='absolute bottom-2 right-2 text-white-100 font-bold text-lg'>{typeof (props ? props?.data?.price : "") === "string" ? <p className='text-lg px-2 py-1 rounded-lg bg-red'>{props ? props?.data?.price : ""}</p> : props ? props?.data?.price.toLocaleString() + " " + "تومان" : ""}  </h3>
                    <h4 className='absolute top-2 right-2 bg-slate-600 text-white-100 p-1 rounded-md shadow-sm font-medium'>{props ? props?.data?.status : ""}</h4>
                </div>
            </div>

            <div className='py-1 flex flex-col gap-2'>
                <h4 className='text-red text-sm px-3'>{props ? props?.data?.type : ""}</h4>
                <Link href={`/estates/${props ? props?.data?.id : ""}`}>
                    <h2 className='text-lg px-3 hover:text-red transition-all'>{props ? props?.data?.title : ""}</h2>
                </Link>
                <div className='flex items-center gap-1 text-zinc-500 px-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div className='mt-1 text-sm flex items-center gap-x-1'>
                        <span>{props ? props?.data?.location?.country : ""}</span>
                        <span>،</span>
                        <span>{props ? props?.data?.location?.city : ""}</span>
                        <span>،</span>
                        <span>{props ? props?.data?.location?.area : ""}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 text-zinc-500 text-sm mt-1 px-1 mb-2'>
                    {props ? props?.data?.typeSell == "ground" ? <div >
                        <div className='flex items-center gap-4 text-zinc-500 text-sm mt-1 px-3 mb-2'>
                            <div>
                                <span>چاه: </span>
                                دارد
                            </div>
                            <div>
                                <span>برق: </span>
                                دارد
                            </div>
                            <div>
                                <span>مترمربع: </span>
                                {props.data.meter}
                            </div>
                        </div>
                    </div> :
                        <div className='flex items-center gap-4 text-zinc-500 text-sm mt-1 px-3 mb-2'>
                            <div>
                                <span>تخت‌خواب ها: </span>
                                {props ? props?.data?.rooms : ""}
                            </div>
                            <div>
                                <span>حمام ها: </span>
                                {props ? props?.data?.bathroom : ""}
                            </div>
                            <div>
                                <span>مترمربع: </span>
                                {props ? props?.data?.meter : ""}
                            </div>
                        </div> : <p>
                        اطلاعات مورد نظر دریافت نشد! لطفا دقایقی دیگر دوباره تلاش کنید.
                    </p>}
                </div>

                <hr className='text-zinc-300' />

                <div className='flex items-center justify-between px-3 py-1'>
                    <div className='flex items-center gap-2'>
                        <img className='rounded-full object-cover object-center h-11 w-11' src={props ? props?.data?.saler?.photo : ""} alt="person" />
                        <h4 className='text-zinc-600 text-sm'>{props ? props?.data?.saler?.name : ""}</h4>
                    </div>
                    <h3 className='text-xs text-zinc-600'>{props ? props?.data?.time : ""}</h3>
                </div>
            </div>
        </div>
    );
};

export default Estate;