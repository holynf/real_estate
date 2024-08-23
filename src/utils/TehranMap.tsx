import React from 'react'
import "leaflet/dist/leaflet.css"
import { useState, Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet"

// Data 
import { SearchAmlak } from './constants';
import { Listbox, Transition } from '@headlessui/react'

//Type
import { AmlakSearch, tehranMarker } from '../types/types';

const TehranMap = () => {
    const [RealState, setSelectedRealState] = useState<any>(null)
    const [Customer, setSelectedCustomer] = useState<any>(null)
    const [Available, setAvailable] = useState<any>(null)
    const [FreePlanet, setFreePlanet] = useState<any>(null)

    const markers: tehranMarker[] = [{
        geocode: [35.80, 51.404343],
        popUp: "This is our Office"
    },
    {
        geocode: [35.70, 51.454343],
        popUp: "This is our Office"
    },
    {
        geocode: [35.72, 51.364343],
        popUp: "This is our Office"
    },
    ]

    const markersTop: tehranMarker[] = [{
        geocode: [35.79298, 51.47],
        popUp: "This is our Office"
    },
    {
        geocode: [35.741312, 51.50131],
        popUp: "This is our Office"
    },
    {
        geocode: [35.69, 51.371231],
        popUp: "This is our Office"
    },
    {
        geocode: [35.7516712, 51.3],
        popUp: "This is our Office"
    },
    ]

    const markersFree: tehranMarker[] = [{
        geocode: [35.735298, 51.4],
        popUp: "This is our Office"
    },
    {
        geocode: [35.76414, 51.484343],
        popUp: "This is our Office"
    },
    {
        geocode: [35.7213, 51.324343],
        popUp: "This is our Office"
    },
    {
        geocode: [35.78, 51.344343],
        popUp: "This is our Office"
    },
    ]

    const markersPlant: tehranMarker[] = [{ 
        geocode: [35.7142131, 51.424343],
        popUp: "This is our Office"
    },
    {
        geocode: [35.7415612, 51.454343],
        popUp: "This is our Office"
    },
    {
        geocode: [35.761231, 51.394343],
        popUp: "This is our Office"
    },
    {
        geocode: [35.71231, 51.28],
        popUp: "This is our Office"
    },
    ]

    const markerTopllIcon = new L.Icon({
        iconUrl: "/assets/image/locationBest.png",
        iconSize: [32, 32] //marker icon size
    })

    const markerPlantlIcon = new L.Icon({
        iconUrl: "/assets/image/building1.png",
        iconSize: [22, 25] //marker icon size
    })

    const markerFreeToSell = new L.Icon({
        iconUrl: "/assets/image/locationAvailable.png",
        iconSize: [32, 32] //marker icon size
    })

    const markerFree = new L.Icon({
        iconUrl: "/assets/image/marker3.png",
        iconSize: [32, 32] //marker icon size
    })


  return (
    <div className='bg-white-200 py-1'>
        <div className='w-4/5 justify-center items-center mx-auto text-center flex flex-col gap-4 mt-10'>
                <h2 className='font-medium text-2xl font-[yeaknBold]'>املاک‌های برتر تهران</h2>
                <h5 className='font-normal font-[yekanBakh]'>در این قسمت با کلیک بر روی املاک‌های برتر توانایی مشاهده پروژه‌های در دسترس این املاک در اختیار شما قرار می‌گیرد.</h5>
            </div>
            <div className='flex flex-col md:flex-row w-full px-3 md:px-0 md:w-11/12 mx-auto items-center justify-around font-[yekanBakh] mt-5 mb-10' >
                <div className='w-full md:w-2/6 mt-10 p-3 border border-slate-300 shadow-lg rounded-xl mb-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-center gap-2 rounded-lg p-2'>
                        <div className='flex justify-start sm:justify-start items-center'>
                            <div>
                                <img className="w-10 mx-auto" src={"assets/image/locationBest.png"} alt="" />
                            </div>
                            <p>املاک‌های برتر</p>
                        </div>
                        <div className='flex justify-start sm:justify-start items-center'>
                            <div>
                                <img className="w-10 mx-auto" src={"assets/image/locationAvailable.png"} alt="" />
                            </div>
                            <p>پیش فروش‌ها</p>
                        </div>
                        <div className='flex justify-start sm:justify-start items-center'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                </svg>

                            </div>
                            <p>مجتمع‌های آماده</p>
                        </div>
                        <div className='flex justify-start sm:justify-start items-center'>
                            <div>
                                <img className="w-10  mx-auto" src={"assets/image/marker3.png"} alt="" />
                            </div>
                            <p>آماده برای ساخت</p>
                        </div>
                    </div>


                    <div className='z-20'>
                        <Listbox value={RealState} onChange={setSelectedRealState}>
                            <div className='relative w-full my-5'>
                                <Listbox.Button className='w-full border border-slate-300 rounded-lg h-12 flex items-center justify-between p-3'>
                                    <div>{RealState?.name ? RealState.name : "املاک‌های برتر"}</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </Listbox.Button>
                                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-300" leaveTo="opacity-0" >
                                    <Listbox.Options className={"bg-white-100 rounded-md border border-zinc-200 flex flex-col items-center gap-1 text-right overflow-hidden py-2 absolute w-full mt-1 z-20"}>
                                        {SearchAmlak.map((item: AmlakSearch) => (
                                            <Listbox.Option className="w-full px-3 py-1 hover:bg-white-200 transition-all cursor-pointer" key={item.id} value={item}>
                                                {item.name}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>

                        <Listbox value={Customer} onChange={setSelectedCustomer}>
                            <div className='relative w-full my-5'>
                                <Listbox.Button className='w-full border border-slate-300 rounded-lg h-12 flex items-center justify-between p-3'>
                                    <div>{Customer?.forSale ? Customer.forSale.address : "پیش فروش‌ها"}</div> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </Listbox.Button>
                                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-300" leaveTo="opacity-0" >
                                    <Listbox.Options className={"z-20 bg-white-100 rounded-md border border-zinc-200 flex flex-col items-center gap-1 text-right overflow-hidden py-2 absolute w-full mt-1"}>
                                        {SearchAmlak.map((item: AmlakSearch) => (
                                            <Listbox.Option className="w-full px-3 py-1 hover:bg-white-200 transition-all cursor-pointer" key={item.id} value={item}>
                                                {item.name} {" "}
                                                [{item.forSale.address}]
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>

                        <Listbox value={Available} onChange={setAvailable}>
                            <div className='relative w-full my-5'>
                                <Listbox.Button className='w-full border border-slate-300 rounded-lg h-12 flex items-center justify-between p-3'>
                                    <div>{Available?.available ? Available.available : "مجتمع‌های آماده"}</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </Listbox.Button>
                                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-300" leaveTo="opacity-0" >
                                    <Listbox.Options className={"z-20 bg-white-100 rounded-md border border-zinc-200 flex flex-col items-center gap-1 text-right overflow-hidden py-2 absolute w-full mt-1"}>
                                        {SearchAmlak.map((item: AmlakSearch) => (
                                            <Listbox.Option className="w-full px-3 py-1 hover:bg-white-200 transition-all cursor-pointer" key={item.id} value={item} >
                                                {item.available}+
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>

                        <Listbox value={FreePlanet} onChange={setFreePlanet}>
                            <div className='relative w-full my-5 '>
                                <Listbox.Button className='w-full border border-slate-300 rounded-lg h-12 flex items-center justify-between p-3'>
                                    <div>{FreePlanet?.bulidings ? FreePlanet.bulidings : "آماده برای ساخت"}</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>


                                </Listbox.Button>
                                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-300" leaveTo="opacity-0">
                                    <Listbox.Options className={" bg-white-100 rounded-md border border-zinc-200 flex flex-col items-center gap-1 text-right overflow-hidden py-2 absolute w-full mt-1 z-20"}>
                                        {SearchAmlak.map((item: AmlakSearch) => (
                                            <Listbox.Option className="w-full px-3 py-1 hover:bg-white-200 transition-all cursor-pointer" key={item.id} value={item} >
                                                {item.bulidings}+
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                </div>

                <div className='w-full md:w-4/6 mx-auto z-10'>
                    <MapContainer center={[35.74, 51.404343]} zoom={11} className='w-full md:w-4/5 mx-auto rounded-xl border border-slate-200 shadow-lg h-[60vh] sm:h-[55vh] md:h-[50vh] lg:h-[45vh]' >
                        <TileLayer
                            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                        {markers.map((marker: any) => {
                            return <div>
                                <Marker position={marker.geocode} icon={markerPlantlIcon}>
                                    <Popup>
                                        <div className='flex-col justify-center items-center'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 mx-auto">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                                </svg>
                                            </div>
                                            <p>مجتمع‌های آماده</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            </div>

                        })}

                        {markersTop.map((marker: any) => {
                            return <div>
                                <Marker position={marker.geocode} icon={markerTopllIcon}>
                                    <Popup>
                                        <div className='flex-col justify-center items-center'>
                                            <div>
                                                <img className="w-10 mx-auto" src={"assets/image/locationBest.png"} alt="" />
                                            </div>
                                            <p>املاک‌های برتر</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            </div>

                        })}

                        {markersPlant.map((marker: any) => {
                            return <div>
                                <Marker position={marker.geocode} icon={markerFree}>
                                    <Popup>
                                        <div className='flex-col justify-center items-center'>
                                            <div>
                                                <img className="w-10  mx-auto" src={"assets/image/marker3.png"} alt="" />
                                            </div>
                                            <p>آماده برای ساخت</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            </div>

                        })}

                        {markersFree.map((marker: any) => {
                            return <div>
                                <Marker position={marker.geocode} icon={markerFreeToSell}>
                                    <Popup>
                                        <div className='flex-col justify-center items-center'>
                                            <div>
                                                <img className="w-10 mx-auto" src={"assets/image/locationAvailable.png"} alt="" />
                                            </div>
                                            <p>پیش فروش‌ها</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            </div>

                        })}

                    </MapContainer>
                </div>

            </div>
    </div>
  )
}

export default TehranMap
