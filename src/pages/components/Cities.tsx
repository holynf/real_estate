import React from 'react';

const Cities = () => {
    return (
        <section className='w-full font-IR bg-white-100 py-10'>
            <div className='max-w-screen-2xl my-0 mx-auto px-4'>
                <div className='text-center'>
                    <h1 className='text-2xl text-zinc-800 font-[yeaknBold]' >دوست دارید کدام شهر را کاوش کنید؟</h1>
                    <h4 className='text-zinc-600'>به راحتی مکان های ارزشمند و توصیه شده را در همسایگی تان پیدا کنید.</h4>
                </div>

                <div className='grid gap-3 grid-cols-1 lg:grid-cols-3 w-full mt-7'>
                    <div className='tehranGrid flex items-center justify-end flex-col lg:col-span-2 w-full h-36 relative rounded-md overflow-hidden shadow-md'>
                        <div className='w-full absolute h-full bg-zinc-800 bg-opacity-60'></div>
                        <h1 className='z-10 text-2xl text-white-100'>تهران</h1>
                        <h4 className='z-10 text-sm pt-1 text-white-100 pb-5'>3 املاک</h4>
                    </div>

                    <div className='MazandaranGrid flex items-center justify-end flex-col lg:col-span-1 w-full h-36 relative rounded-md overflow-hidden shadow-md'>
                        <div className='w-full absolute h-full bg-zinc-800 bg-opacity-60'></div>
                        <h1 className='z-10 text-2xl text-white-100'>اصفهان</h1>
                        <h4 className='z-10 text-sm pt-1 text-white-100 pb-5'>8 املاک</h4>
                    </div>

                    <div className='MashhadGrid flex items-center justify-end flex-col lg:col-span-1 w-full h-36 relative rounded-md overflow-hidden shadow-md'>
                        <div className='w-full absolute h-full bg-zinc-800 bg-opacity-60'></div>
                        <h1 className='z-10 text-2xl text-white-100'>مازندران</h1>
                        <h4 className='z-10 text-sm pt-1 text-white-100 pb-5'>5 املاک</h4>
                    </div>

                    <div className='EsfahanGrid flex items-center justify-end flex-col lg:col-span-2 w-full h-36 relative rounded-md overflow-hidden shadow-md'>
                        <div className='w-full absolute h-full bg-zinc-800 bg-opacity-60'></div>
                        <h1 className='z-10 text-2xl text-white-100'>مشهد</h1>
                        <h4 className='z-10 text-sm pt-1 text-white-100 pb-5'>6 املاک</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cities;