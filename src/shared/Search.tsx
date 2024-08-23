import React, { useState, Fragment } from 'react';

//Headless ui
import { Listbox, Transition } from '@headlessui/react'

// Mui
import { Slider } from "../utils/Mui/mui"

// Datas
import { searchType } from "../utils/constants"
import { searchCity } from "../utils/constants"
import { searchRoom } from "../utils/constants"

//types
import { search } from '../types/types';

const proSearch: string[] = ['استخر', 'چمن', 'کابل تلویزیون', 'باربیکیو', 'خشک کن', 'باشگاه', 'خشکشویی', 'مایکروویو', 'وای فای', 'تهویه هوا', 'سونا', 'یخچال']

export default function BasicSelect() {
    const [selectedType, setSelectedType] = useState<search>({ id: 1, name: "نوع املاک", unavailable: false })
    const [selectedCity, setSelectedCity] = useState<search>({ id: 1, name: "مناطق", unavailable: false })
    const [selectedRoom, setSelectedRoom] = useState<search>({ id: 1, name: "اتاق ها", unavailable: false })
    const [isOpenType, setIsOpenType] = useState<boolean>(false)
    const [isOpenCity, setIsOpenCity] = useState<boolean>(false)
    const [isOpenRoom, setIsOpenRoom] = useState<boolean>(false)
    const [sliderMeterValue, setSliderMeterValue] = React.useState<number[]>([0, 350]);
    const [sliderPriceValue, setSliderPriceValue] = React.useState<number[]>([0, 900000]);
    const [isSearchProOpen, setIsSearchProOpen] = useState<boolean>(false)

    const sliderMeterHandleChange = (event: Event, newValue: number | number[]) => {
        setSliderMeterValue(newValue as number[]);
    };
    const sliderPriceHandleChange = (event: Event, newValue: number | number[]) => {
        setSliderPriceValue(newValue as number[]);
    };

    return (
        <div className='w-4/5 flex flex-col gap-4 p-3 bg-white-200 rounded-md bg-opacity-30 mt-11 relative max-w-screen-2xl my-0 mx-auto'>
            <div className='bg-white-100 p-4 flex flex-col gap-4 rounded-md shadow-2xl lg:flex-row'>

                {/* Search input */}
                <input className='outline-none w-full p-3 border border-slate-300 rounded-lg ' type="search" placeholder='جستجو...' />

                {/* Filter box */}
                <Listbox value={selectedType} onChange={setSelectedType}>
                    <div className='relative w-full'>
                        <Listbox.Button onClick={() => setIsOpenType(!isOpenType)} className='w-full border border-slate-300 rounded-lg h-12 flex items-center justify-between p-3'>
                            <span>{selectedType.name}</span>
                            {
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={isOpenType ? "w-6 h-6 rotate-180 transition-all duration-300" : "w-6 h-6 transition-all duration-300"}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            }
                        </Listbox.Button>
                        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-300" leaveTo="opacity-0" >
                            <Listbox.Options className={"bg-white-100 rounded-md border border-zinc-200 flex flex-col items-center gap-1 text-right overflow-hidden py-2 absolute w-full mt-1 z-10"}>
                                {searchType.map((type: search) => (
                                    <Listbox.Option className="w-full px-3 py-1 hover:bg-white-200 transition-all cursor-pointer" key={type.id} value={type} disabled={type.unavailable}>
                                        {type.name}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>

                <Listbox value={selectedCity} onChange={setSelectedCity}>
                    <div className='relative w-full'>
                        <Listbox.Button onClick={() => setIsOpenCity(!isOpenCity)} className='w-full border border-slate-300 rounded-lg h-12 flex items-center justify-between p-3'>
                            <span>{selectedCity.name}</span>
                            {
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={isOpenCity ? "w-6 h-6 rotate-180 transition-all duration-300" : "w-6 h-6 transition-all duration-300"}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            }
                        </Listbox.Button>
                        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-300" leaveTo="opacity-0" >
                            <Listbox.Options className={"z-10 bg-white-100 rounded-md border border-zinc-200 flex flex-col items-center gap-1 text-right overflow-hidden py-2 absolute w-full mt-1"}>
                                {searchCity.map((city: search) => (
                                    <Listbox.Option className="w-full px-3 py-1 hover:bg-white-200 transition-all cursor-pointer" key={city.id} value={city} disabled={city.unavailable}>
                                        {city.name}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>

                <Listbox value={selectedRoom} onChange={setSelectedRoom}>
                    <div className='relative w-full'>
                        <Listbox.Button onClick={() => setIsOpenRoom(!isOpenRoom)} className='w-full border border-slate-300 rounded-lg h-12 flex items-center justify-between p-3'>
                            <span>{selectedRoom.name}</span>
                            {
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={isOpenRoom ? "w-6 h-6 rotate-180 transition-all duration-300" : "w-6 h-6 transition-all duration-300"}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            }
                        </Listbox.Button>
                        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-300" leaveTo="opacity-0" >
                            <Listbox.Options className={"z-10 bg-white-100 rounded-md border border-zinc-200 flex flex-col items-center gap-1 text-right overflow-hidden py-2 absolute w-full mt-1"}>
                                {searchRoom.map((room: search) => (
                                    <Listbox.Option className="w-full px-3 py-1 hover:bg-white-200 transition-all cursor-pointer" key={room.id} value={room} disabled={room.unavailable}>
                                        {room.name}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>

                {/* Search buttons*/}
                <div className='flex items-center justify-center gap-2'>
                    <button onClick={() => setIsSearchProOpen(!isSearchProOpen)} className=' px-6 py-2 rounded-md font-medium flex items-center gap-1'>
                        <span>پیشرفته</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                        </svg>
                    </button>
                    <button className='bg-red shadow-lg px-6 py-2 rounded-md text-white font-bold'>جستجو</button>
                </div>
            </div>

            {/* Search pro */}
                <div className={isSearchProOpen ? 'w-full bg-white-100 shadow-md rounded-md flex z-10 flex-col justify-between transition-transform duration-500' : 'h-0 translate-y-full overflow-hidden transition-opacity duration-200'}>
                    <h3 className='text-blue font-semibold w-full text-right p-4'>امکانات</h3>
                    <hr className='text-zinc-200' />
                    <ul className='px-4 grid grid-cols-2 gap-4 py-2 my-5 sm:grid-cols-3 lg:grid-cols-4'>
                        {
                            proSearch.map(item =>
                                <li className="flex items-center gap-1">
                                    <input type="checkbox" className='checked:accent-red' />
                                    <span className='text-sm font-medium text-zinc-700'>{item}</span>
                                </li>
                            )
                        }
                    </ul>

                    <hr className='text-zinc-200' />

                    <div className='flex flex-col items-center px-4 sm:flex-row sm:gap-7 mt-4'>
                        <div className='w-full'>
                            <h4>{`مساحت خانه (متر مربع) : ${sliderMeterValue[0]} - ${sliderMeterValue[1]}`}</h4>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={sliderMeterValue}
                                onChange={sliderMeterHandleChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={350}
                            />
                        </div>
                        <div className='w-full'>
                            <h4>{`از ${sliderPriceValue[0]} تا ${sliderPriceValue[1]} تومان`}</h4>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={sliderPriceValue}
                                onChange={sliderPriceHandleChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={800000}
                            />
                        </div>
                    </div>

                </div>
        </div>

    );
}