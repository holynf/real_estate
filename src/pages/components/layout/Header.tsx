import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mui
import { Box, Drawer } from '../../../utils/Mui/mui';

// Data
import { menuItems } from '../../../utils/constants';


import logo from '../../../../public/assets/image/1.png'

const Header = () => {

    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (
        anchor: any, open: boolean) => (
            event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ right: open });
        }

    return (
        <header className='bg-white dark:bg-white w-full'>
            <div className='flex items-center justify-around px-4  py-5 relative max-w-screen-2xl my-0 mx-auto '>
                <nav className='order-none lg:order-1 font-IR'>
                    <div>
                        {
                            <React.Fragment key={'right'}>
                                <div onClick={toggleDrawer('right', true)} className='bg-red p-2 rounded-md cursor-pointer lg:hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)} >
                                    <Box sx={{ width: 320 }} role="presentation" onClick={toggleDrawer("right", false)} onKeyDown={toggleDrawer("right", false)} >
                                        <div className='flex items-center justify-between p-6'>
                                            <img src="https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/logo-1.png.webp" alt="Logo" />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                        <hr className='text-zinc-200' />
                                        <ul className='text-zinc-600 font-medium font-IR'>
                                            {
                                                menuItems.map(item =>
                                                    <Link href={item.route} className='flex items-center gap-x-3'>
                                                        <li key={item.name} className='w-full p-6 flex items-center justify-between hover:text-red transition-all cursor-pointer lg:font-medium'>
                                                            <div className='flex items-center gap-3'>
                                                                <item.icon />
                                                                <span>{item.name}</span>
                                                            </div>

                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                                                </svg>
                                                            </div>
                                                        </li>
                                                    </Link>
                                                )
                                            }
                                        </ul>
                                    </Box>
                                </Drawer>
                            </React.Fragment>
                        }
                    </div>

                    <ul className='lg:flex lg:text-white-100 hidden'>
                        {
                            menuItems.map(item =>
                                <li key={item.name} className='p-4 flex items-center justify-between hover:text-red transition-all cursor-pointer lg:font-medium lg:text-xl lg:text-zinc-800'>
                                    <Link href={item.route}>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </nav>

                {/* Icon light */}
                <div className='rounded-lg overflow-hidden w-[10vh] h-[10vh] lg:w-[13vh] lg:h-[13vh] bg-white dark:bg-white'>
                    <Image src={logo} width={400} height={400}  alt="vip amlak Logo" className='w-full h-full object-cover object-center'/>
                </div>

                <div className='text-gray lg:order-1 order-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke='white-100' className="w-6 h-6 hover:text-red transition-all duration-150">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </header >
    );
};

export default Header;