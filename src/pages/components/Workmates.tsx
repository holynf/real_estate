import React from 'react';

// Data
import { workmates } from '../../utils/constants';

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';

//Mui
import { useMediaQuery , useTheme } from "../../utils/Mui/mui"

const Workmates = () => {
    const theme = useTheme();
    const smSize = useMediaQuery(theme.breakpoints.up('sm'));
    const mdSize = useMediaQuery(theme.breakpoints.up('md'));
    const lgSize = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <section className='w-full font-IR bg-white-100 py-10'>
            <div className='max-w-screen-2xl my-0 mx-auto px-4'>
                <div className='text-center mb-6'>
                    <h1 className='text-2xl text-zinc-800 font-[yeaknBold]'>همکاران ما</h1>
                    <h4 className='text-zinc-600'>ما فقط با بهترین شرکت ها در سراسر جهان همکاری می کنیم.</h4>
                </div>

                <Swiper id='swiperBrand' navigation={true} slidesPerView={lgSize ? 5 : mdSize ? 4 : smSize ? 3 : 2} modules={[Navigation]} className="mySwiper">
                    {
                        workmates.map(item =>
                            <SwiperSlide key={item}>
                                <img className='h-16 mr-10 sm:mr-0' src={item} alt="logo" />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Workmates;