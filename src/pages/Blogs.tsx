import React from 'react';

// Components
import Blog from './Blog';

// Data
import { blogs } from '../utils/constants';

const Blogs = () => {

    return (
        <section className='bg-white-200'>
            <div className='w-full px-4 py-8 font-IR max-w-screen-2xl my-0 mx-auto flex flex-col'>
                <div className='w-full text-center flex flex-col gap-4 mb-5'>
                    <h2 className='font-medium text-2xl font-[yeaknBold]'>مقالات و نکات</h2>
                    <h5 className='font-normal'>همیشه به روزرسانی های جدید منطقه ای ، اطلاعات مربوط به مقالات ، نکات و ترفندهای ما را دریافت کنید.</h5>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-8'>
                    {
                        blogs.map(item => <Blog blog={item} />)
                    }
                </div>

                <div>
                    <button className='flex items-center mt-9 border border-red text-red hover:bg-red hover:text-white gap-2 transition-all duration-300 float-left py-2 px-4 rounded-3xl shadow-xl'>
                        <span>همه مقالات</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Blogs;