import React, { useState } from 'react';
// Data
import { schematic } from '../../utils/constants';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';

//Mui

import { useMediaQuery, useTheme } from "../../utils/Mui/mui"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Shematic = () => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        margin: 'auto',
        bgcolor: '#fff',
        boxShadow: 24,
        p: 4,
    };


    const theme = useTheme();
    const smSize = useMediaQuery(theme.breakpoints.up('sm'));
    const mdSize = useMediaQuery(theme.breakpoints.up('md'));
    const lgSize = useMediaQuery(theme.breakpoints.up('lg'));

    const [open, setOpen] = React.useState<boolean>(false);
    const [photo, setPhoto] = useState<any>(null)

    const handleOpen = (item: any) => {
        setOpen(true)
        setPhoto(item)
    };
    
    const handleClose = () => setOpen(false);


    return (
        <section className='bg-white-100 mt-20 mb-5'>
            <div className='w-full px-4 py-8 font-IR max-w-screen-2xl my-0 mx-auto'>
                <div className='w-full text-center flex flex-col gap-4 mb-5'>
                    <h2 className='font-medium text-2xl font-[yeaknBold]'>پلان طبقات</h2>
                    <h5 className='font-normal'>در معماری و مهندسی ساختمان، پلان طبقه ترسیمی است به مقیاس که دیدی از بالا را نشان می‌دهد و روابط بین اتاق‌ها، فضاها و دیگر ویژگی‌های فیزیکی در یک سطح ارتفاعی ساختمان را بیان می‌دارد.</h5>
                </div>
                <Swiper
                    slidesPerView={lgSize ? 3 : mdSize ? 2 : smSize ? 2 : 1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        schematic.map((item, index) =>
                            <SwiperSlide key={item.id}>
                                <div className='flex flex-col items-center justify-center text-center gap-4 py-5 max-w-3xl my-0 mx-auto px-3'>
                                    <div className='h-full w-full'>
                                        <img className='rounded-lg border-zinc-400 p-1' src={item.photo} alt="shematic photo" onClick={() => handleOpen(item)} />
                                    </div>
                                    <div>
                                        <h1 className='text-lg text-red'>{item.name}</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='relative w-70 h-56 md:w-full md:h-full'>
                            <img className='rounded-lg border-zinc-400 p-1 w-full h-full' src={photo?.photo} alt="shematic photo" />
                            <h1 className='absolute right-0 top-0 cursor-pointer text-lg text-red ' onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </h1>
                        </Typography>
                        <Typography id="modal-modal-description" className='text-center grid grid-cols-1 md:grid-cols-3 gap-3 p-3' sx={{ mt: 2 }}>
                            <span className='rounded-lg text-sm md:text-base'>
                                <h1>پروژه:</h1>
                                <h1 className='text-red font-[yekanBakh]'>{photo?.name}</h1>
                            </span>
                            <span className='rounded-lg text-sm md:text-base'>
                                <h1>نام پروژه:</h1>
                                <h1 className='text-red font-[yekanBakh]'>{photo?.title}</h1>
                            </span>
                            <span className='rounded-lg text-sm md:text-base hidden md:inline'>
                                <h1>حمام‌ها:</h1>
                                <h1 className='text-red font-[yekanBakh]'>{photo?.bathroom}</h1>
                            </span>
                            <span className='rounded-lg text-sm md:text-base hidden md:inline'>
                                <h1>متراژ:</h1>
                                <h1 className='text-red font-[yekanBakh]'>{photo?.meter}</h1>
                            </span>
                            <span className='rounded-lg text-sm md:text-base hidden md:inline'>
                                <h1>اتاق خواب‌ها:</h1>
                                <h1 className='text-red font-[yekanBakh]'>{photo?.rooms}</h1>
                            </span>
                            <span className='rounded-lg text-sm md:text-base hidden md:inline'>
                                <h1>زمان اتمام پروژه:</h1>
                                <h1 className='text-red font-[yekanBakh]'>{photo?.time}</h1>
                            </span>
                            <span className='rounded-lg text-sm md:text-base'>
                                <h1>سال ساخت:</h1>
                                <h1 className='text-red font-[yekanBakh]'>{photo?.year}</h1>
                            </span>
                        </Typography>
                    </Box>
                </Modal>

            </div>
        </section >
    );
};

export default Shematic;