import { blog, search, user, schematics ,AmlakSearch } from "../types/types"
import { HomeRoundedIcon, HomeWorkRoundedIcon, PeopleOutlineRoundedIcon, CallRoundedIcon, CottageIcon, CurrencyExchangeIcon, GroupsIcon } from "./Mui/mui"

// Search Items
export const searchType: search[] = [
    { id: 1, name: 'خانه شهری', unavailable: false },
    { id: 2, name: 'آپارتمان', unavailable: false },
    { id: 3, name: 'ویلای مدرن', unavailable: false },
    { id: 4, name: 'مجموعه آپارتمانی', unavailable: true },
    { id: 5, name: 'خانه خانوادگی', unavailable: false },
]
export const searchCity: search[] = [
    { id: 1, name: 'اصفهان', unavailable: false },
    { id: 2, name: 'تهران', unavailable: false },
    { id: 3, name: 'مازندران', unavailable: false },
    { id: 4, name: 'مشهد', unavailable: true },
]
export const searchRoom: search[] = [

    { id: 1, name: '+1', unavailable: false },
    { id: 2, name: '+2', unavailable: false },
    { id: 3, name: '+3', unavailable: false },
    { id: 4, name: '+4', unavailable: true },
    { id: 5, name: '+5', unavailable: false },
]

// Main menu items
export const menuItems = [
    { route: "/" , name: "صفحه اصلی", icon: HomeRoundedIcon },
    { route: "/estates" , name: "املاک", icon: HomeWorkRoundedIcon },
    { route: "/users" , name: "کاربران", icon: PeopleOutlineRoundedIcon },
    { route: "/contact" , name: "تماس با ما", icon: CallRoundedIcon },
]

// Advertusement items

export const advertise = [
    {
        id: 1,
        icon: CottageIcon,
        title: "طیف گسترده ای از املاک",
        content: "گستردگی طیف به تنوع و تغییرپذیری اطلاعات، متنوع بودن ابزارها و فناوری‌ها و قابلیت در دسترس بودن مجموعه گسترده‌ای از اطلاعات در مورد املاک موجود است."
    },
    {
        id: 2,
        icon: CurrencyExchangeIcon,
        title: "تأمین مالی آسان",
        content: "تامین مالی آسان دارای مزیت در سرعت در دسترس بودن منابع مالی است. با استفاده از تامین مالی آسان، شرکت‌ها قادر خواهند بود به سرعت به منابع دسترسی پیدا کنند و نیزاهای خود را برطرف سازند."
    },
    {
        id: 3,
        icon: GroupsIcon,
        title: "مورد اعتماد هزاران نفر",
        content: "در صورت تحقق مورد اطمینان بودن در چارچوب اطلاعات، به منظور حفظ حریم خصوصی و جلوگیری از دسترسی غیرقانونی به اطلاعات شخصی و محرمانه، امنیت اطلاعات بسیار حائز اهمیت است."
    },
]

// Customers 
export const customers : user[] = [
    { id: 3, photo: '/assets/image/Person/5.jpeg', name: "ابوالفضل صفایی", phone: "09023493683" , job: "برنامه نویس", comment: "مشاور وی آیپی املاک تجربه‌ای عالی در خرید خانه کسب کردم. مشاورین این سازمان بسیار حرفه‌ای و دقیق هستن ." },
    { id: 1, photo: '/assets/image/Person/4.jpeg', name: "علی محمدی", phone: "09023493683" , job: "طراح", comment: "من به تازگی یک خانه از این مشاور املاک خریداری کردم و بسیار راضی هستم. خدمات حرفه‌ای و مشاور همراه این سازمان در تصمیم گیری بهتر به من بسیار کمک کرد." },
    { id: 2, photo: '/assets/image/Person/2.jpeg', name: "یونس نیازی" , phone: "09023493683" , job: "مدیر فروش", comment: "با این مشاور املاک تجربه بسیار خوبی داشتم. این سازمان با دقت به نیاز‌های من توجه کرد و با توجه به نیازهای من خانه‌ای مناسب را پیدا کرد." },
    { id: 4, photo: '/assets/image/Person/1.jpeg', name: "رضا حسینی", phone: "09023493683" , job: "طراح رابط کاربری", comment: "وی آیپی املاک توانست خانه‌ای را برای من پیدا کند که به طور کامل با نیاز‌های من همخوانی دارد. مشاورین بسیار حرفه‌ای و صبور هستن." },
]

// Blogs
export const blogs : blog[] = [
    {id: 1 , type: "اپارتمان" , photo: "https://cloud.avalamozesh.com/s/CByW6RFCj8WcssB/preview" , title: 'راهنمای خرید و فروش املاک : نکاتی که باید در نظر داشت' , author: {id: 1 , name: "ابوالفضل صفایی" , photo: "https://cloud.avalamozesh.com/s/ryRZepZgaQY84Ji/preview" , phone: "09023493683"} , time: "۹ اردیبهشت ۱۳۹۸"} ,
    {id: 2 , type: "اپارتمان" , photo: "https://cloud.avalamozesh.com/s/57wxYMd64pepMcd/preview" , title: 'املاک تجاری: راهنمای کامل برای سرمایه گذاران' , author: {id: 1 , name: "ابوالفضل صفایی" , photo: "https://cloud.avalamozesh.com/s/ryRZepZgaQY84Ji/preview" , phone: "09023493683"} , time: "۹ اسفند ۱۳۹۸"} ,
    {id: 3 , type: "اپارتمان" , photo: "https://cloud.avalamozesh.com/s/KHy26pFDF5ca7Mj/preview" , title: "املاک و قوانین آن : آشنایی با حقوق و قوانین در خصوص خرید و فروش املاک" , author: {id: 1 , name: "ابوالفضل صفایی" , photo: "https://cloud.avalamozesh.com/s/ryRZepZgaQY84Ji/preview" , phone: "09023493683"} , time: "۹ آذر ۱۳۹۸"} ,
    {id: 4 , type: "اپارتمان" , photo: "https://cloud.avalamozesh.com/s/7qDCG9kQoZH5mpi/preview" , title: 'املاک و مستغلات: راهنمایی برای اجاره و مدیریت' , author: {id: 1 , name: "ابوالفضل صفایی" , photo: "https://cloud.avalamozesh.com/s/ryRZepZgaQY84Ji/preview" , phone: "09023493683"} , time: "۹ اسفند ۱۳۹۸"} ,
    {id: 5 , type: "اپارتمان" , photo: "https://cloud.avalamozesh.com/s/zjB49L8KWkkqMwx/preview" , title: 'نکاتی برای خرید و فروش املاک در بازار فعلی' , author: {id: 1 , name: "ابوالفضل صفایی" , photo: "https://cloud.avalamozesh.com/s/ryRZepZgaQY84Ji/preview" , phone: "09023493683"} , time: "۹ تیر ۱۳۹۸"} ,
    {id: 6 , type: "اپارتمان" , photo: "https://cloud.avalamozesh.com/s/Z6TnT2c7AZjrw5B/preview" , title: 'روش‌های سودآور برای سرمایه گذاری در بازار املاک' , author: {id: 1 , name: "ابوالفضل صفایی" , photo: "https://cloud.avalamozesh.com/s/ryRZepZgaQY84Ji/preview" , phone: "09023493683"} , time: "۹ اسفند ۱۳۹۸"} ,
]

//Shematics
export const schematic : schematics[] = [
    { id: 1,
        photo: 'https://cloud.avalamozesh.com/s/6r47LCHS4enz8zP/preview',
        name: "پروژه اول",
        title: "آپارتمان مبله کلید نخورده تهران",
        bathroom: 2,
        meter: 220,
        price: 3_200_000_000,
        rooms: 4,
        time: "1 سال قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1379,
    },
    { id: 2,
        photo: 'https://cloud.avalamozesh.com/s/EPS3dPFrX9f9kHZ/preview',
        name: "پروژه دوم",
        title: "آپارتمان تهران دروس",
        bathroom: 1,
        meter: 120,
        price: 7_000_000_000,
        rooms: 2,
        time: "برای 5 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1386,
    },
    { id: 3,
        photo: 'https://cloud.avalamozesh.com/s/c62DnSfNzXQKNj5/preview',
        name: "پروژه سوم",
        title: "آپارتمان نوساز الهیه ",
        bathroom: 2,
        meter: 160,
        price: 8_900_000_000,
        rooms: 6,
        time: "برای 2 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1372,
    },
    { id: 4,
        photo: 'https://cloud.avalamozesh.com/s/PP5Jz8PAys84Gbb/preview',
        name: "پروژه چهارم",
        title: "آپارتمان دهکده المپیک",
        bathroom: 1,
        meter: 190,
        price: 13_500_000_000,
        rooms: 3,
        time: "برای 7 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1390,
    },
    { id: 5,
        photo: 'https://cloud.avalamozesh.com/s/EGDm6zSTQQS9FeH/preview',
        name: "پروژه پنجم",
        title: " آپارتمان تهران انقلاب",
        bathroom: 2,
        meter: 80,
        price: 12_500_000_000,
        rooms: 2,
        time: "برای 1 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1389,
    },
]

// Workmates
export const workmates: string[] = [
    "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/brand05.png.webp" ,
    "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/brand03.png.webp" ,
    "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/brand05.png.webp" ,
    "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/brand04.png.webp" ,
    "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/brand06.png.webp" ,
]

// Search Amlak 

export const SearchAmlak : AmlakSearch[] = [
    { id: 1, name: "املاک سون", forSale: {id:1 , name : "ابوالفضل صفایی" , address : "تهران ونک"}, available:5 , bulidings : 6},
    { id: 2, name: "املاک آپادانا", forSale: {id:1 , name : "شیما حسینی", address : "تهران مرزداران"} , available:7 , bulidings : 10},
    { id: 3, name: "املاک اکازیون", forSale: {id:1 , name : "محمد مسعودی" , address : "تهران پونک"}, available:4 , bulidings : 7},
    { id: 4, name: "املاک نیکان", forSale: {id:1 , name : "زهرا کریمی" , address : "تهران تهرانپارس"}, available:2 , bulidings : 4},
    { id: 5, name: "املاک کلبه", forSale: {id:1 , name : "سهیل قدوسی",address : "تهران انقلاب اسلامی"}, available:8 , bulidings : 8},
]