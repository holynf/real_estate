type home = {
    id: number,
    type: string,
    status: string,
    image: string[],
    price: string | number,
    title: string,
    location: object,
    rooms: number,
    bathroom: number,
    meter: number,
    time: string,
    saler: user
    description?: string,
    year: number,
    options: searchOptions,
    mapPosition : number[],
    video : string,
    poster : string,
    comments : object[],
    typeSell : string
}

type searchOptions = {
    pool?: object,
    refinery? : object,
    grass?: object,
    televisionCable?: object,
    barbecue?: object,
    dryer?: object,
    gym?: object,
    HomeHeating?: object,
    alcove?: object,
    laundry?: object,
    microwave?: object,
    wifi?: object,
    airConditioning?: object,
    jacuzzi?: object,
    refrigrator?: object
}

type user = {
    id: number,
    name: string,
    phone: string,
    job?: string
    photo?: string,
    email?: string,
    comment?: string
}

type search = {
    id: number,
    name: string,
    unavailable: boolean
}

type blog = {
    id: number,
    photo: string,
    type: string,
    title: string,
    author: user,
    time: string
}

type schematics = {
    id: number,
    photo: any,
    name: string,
    title: string,
    bathroom: number,
    meter: number,
    price: number,
    rooms: number,
    time: string,
    type: string,
    year: number,
}

type AmlakSearch = {
    id: number,
    name: string,
    forSale: any,
    available: number,
    bulidings: number
}

type tehranMarker = {
    geocode: [number, number],
    popUp: String
}




export type { search, user, home, blog, schematics, AmlakSearch, tehranMarker }