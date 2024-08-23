import React from 'react';

// Components
import Customer from './Customer';

// Data
import { customers } from '../../utils/constants';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Customers = () => {
    return (
        <section className='bg-white-100 mt-10'>
            <div className='w-full px-4 py-8 font-IR max-w-screen-2xl my-0 mx-auto'>
                <div className='w-full text-center flex flex-col gap-4 mb-5'>
                    <h2 className='font-medium text-2xl font-[yeaknBold]'>از نگاه مشتریان</h2>
                    <h5 className='font-normal'>مشتری قلب هر کسب و کاری است که باید در راس آن کسب و کار قرار بگیرد.</h5>
                </div>

                <Swiper slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, }} modules={[Pagination]} >
                    {
                        customers.map((item) =>
                            <SwiperSlide key={item.id}>
                                <Customer person={item} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section >
    );
};

export default Customers;