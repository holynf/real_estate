import React from 'react';

const Blog = (props: any) => {
    return (
        <div key={props ? props?.blog?.id : ""} className='bg-white-100 rounded-lg shadow-xl flex flex-col'>
            <img className='p-3 w-full rounded-3xl' src={props ? props?.blog?.photo : ""} alt="blog" />
            <div className='p-4 flex-grow'>
                <h3 className='text-red text-sm'>{props ? props?.blog?.type : ""}</h3>
                <h1 className='mt-2 text-lg'>{props ? props?.blog?.title : ""}</h1>
            </div>
            <hr className='text-zinc-300' />
            <div className='px-4 py-2 flex items-center justify-between'>
                <div className='flex items-center gap-2 py-1'>
                    <img className='h-12 w-12' src={props ? props?.blog?.author.photo : ""} alt="person" />
                    <h3 className='text-zinc-500'>{props ? props?.blog?.author.name : ""}</h3>
                </div>
                <span className='text-zinc-500'>{props ? props?.blog?.time : ""}</span>
            </div>
        </div>
    );
};

export default Blog;