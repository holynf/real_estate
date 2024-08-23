import React from 'react';

// Data
import { advertise } from '../../utils/constants';


const Advertisement = () => {
    return (
        <section className='bg-white-200 mt-10 py-5 font-IR'>
            <div className='w-full text-center flex flex-col gap-4 mb-5'>
                <h2 className="font-medium text-2xl font-['yeaknBold']">چرا ما را انتخاب کنید؟</h2>
                <h5 className='font-normal'>ما در هر مرحله ،خدمات کاملی ارائه می دهیم</h5>
            </div>
            <div className='max-w-screen-2xl my-0 mx-auto px-4 flex flex-col justify-center gap-4 md:flex-row'>
                {
                    advertise.map(item =>
                        <div key={item.id} className='bg-white-100 flex items-center justify-center flex-col py-6 gap-3 rounded-lg shadow-lg'>
                            <div className='bg-rose-200 p-6 rounded-full shadow-sm'>
                                <item.icon color='primary' />
                            </div>
                            <h2 className='text-xl text-center'>{item.title}</h2>
                            <h5 className='text-base text-center text-zinc-500 px-2'>{item.content}</h5>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Advertisement;