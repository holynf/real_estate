import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { tehranMarker } from '../types/types';
import L from "leaflet"
import homeData from './data';

// swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


const Maps = (props: any) => {
    const { product } = props
    const markers: tehranMarker[] = [{
        geocode: product.mapPosition,
        popUp: "This is our Office"
    },
    ]

    const markerTopllIcon = new L.Icon({
        iconUrl: "/assets/image/locationBest.png",
        iconSize: [32, 32] //marker icon size
    })


    return (
        <>
            <MapContainer center={product.mapPosition} zoom={13} className='w-4/5 mx-auto rounded-xl border border-slate-200 shadow-lg max-h-[80%]' style={{ height: "50vh" }}>
                <TileLayer
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {markers.map((marker: any) => {
                    return <div>
                        <Marker position={marker.geocode} icon={markerTopllIcon}>
                            <Popup>
                                <div className='flex-col justify-center items-center'>

                                    <span>
                                        <Swiper navigation={true} modules={[Navigation]} className='h-[5rem] lg:h-[10rem] w-[10rem]'>
                                            {
                                                product?.image?.map((item: any) =>
                                                    <SwiperSlide key={product.id}>
                                                        <img className='object-cover w-full h-full lg:rounded-2xl shadow-xl' src={item} alt="home" />
                                                    </SwiperSlide>
                                                )
                                            }
                                        </Swiper>
                                    </span>
                                    <div className='mt-3 flex items-center gap-x-1 text-zinc-500'>
                                        <span>{product.location.country}</span>
                                        <span>،</span>
                                        <span>{product.location.city}</span>
                                        <span>،</span>
                                        <span>{product.location.area}</span>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    </div>
                })}
            </MapContainer>
        </>
    );
};

export default Maps;