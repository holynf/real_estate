import React from 'react';

// components
import Search from '../../shared/Search';

const Landing = () => {
    return (
        <section className='landing'>
            <div className='bg-blue w-full bg-opacity-75 flex flex-col items-center'>
                <div className='flex items-center w-full flex-col gap-3 mt-0 lg:gap-7 justify-center text-center sm:my-20 py-10 lg:py-5 lg:my-32 px-4 font-IR'>
                    <div className='max-w-screen-xl my-0 mx-auto'>
                        <h1 className='text-white-100 font-bold text-4xl sm:text-6xl font-[yekanBakh]'>خانه ی رویایی خود را پیدا کنید.</h1>
                        <h4 className='text-center text-white-100 py-2'>ما بهترین تخفیفات را برای بهترین املاک به شما ارائه میدهیم .</h4>
                    </div>
                    <div className=' flex gap-4 max-w-screen-2xl my-0 mx-auto'>
                        <button className='bg-red text-white-100 px-8 py-3 rounded-md shadow-lg font-medium'>برای اجاره</button>
                        <button className='bg-white-100 px-8 py-3 rounded-md shadow-lg font-medium'>برای فروش</button>
                    </div>
                    <Search />
                </div>
            </div>
        </section>
    );
};

export default Landing;