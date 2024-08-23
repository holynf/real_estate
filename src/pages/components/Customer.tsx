import React from 'react';

const Customer = (props: any) => {
    return (
        <div className='flex flex-col items-center justify-center text-center gap-4 py-5 max-w-md my-0 mx-auto px-3'>
            <div className='h-32 w-32 relative'>
                <img className='rounded-full w-full h-full object-center border border-zinc-400 p-1' src={props ? props?.person?.photo : ""} alt="person" />
                <div className='absolute left-0 bottom-0 bg-red h-10 w-10 text-5xl flex items-center justify-center rounded-full text-white'>
                    <span className='pt-7'>“</span>
                </div>
            </div>
            <div>
                <h1 className='text-lg text-zinc-800'>{props ? props?.person?.name : ""}</h1>
                <h3 className='text-sm text-zinc-600'>{props ? props?.person?.job : ""}</h3>
            </div>
            <p className='text-zinc-800'>{props ? props?.person?.comment : ""}</p>
        </div>
    );
};

export default Customer;