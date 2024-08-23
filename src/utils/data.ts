import { home } from "../types/types";

//Enums
enum HOME_STATUS {
    RENT = "برای اجاره",
    SALE = "برای فروش",
    MORTGAGE = "برای رهن"
}

enum COUNTRY {
    IRAN = "ایران"
}

enum CITY {
    TEHRAN = "تهران",
    ESFAHAN = "اصفهان",
    MASHHAD = "مشهد",
    SARY = "ساری",
    NOSHAHR = "نوشهر",
    DARZIKOLA = "درزیکلا"
}

enum TEHRAN_AREA {
    FADAK = "فدک",
    SATARKHAN = "ستارخان",
    NZAMABAD = "نظام آباد",
    TEHRANPARS = "تهرانپارس",
    ZAFERANIE = "زعفرانیه",
    ENGHLAB = "انقلاب",
    ARGANTIN = "آرژانتین",
    TAJRISH = "تجریش",
    AZADI = "آزادی",
    CHITGAR = "چیتگر",
    GHIACY = "غیاثی",
    SAADATABAD = "سعادت آباد",
    GOLESTAN = "گلستان",
    SAREIN = "سرین",
    NIAVARAN = "نیاوران",
    OLAMPIK = "المپیک",
    ELAHIE = "الهیه",
    DAROS = "دروس"
}
enum ESFAHAN_AREA {
    BABOLDASHT = "بابلدشت",
    BARAZANDE = "برازنده",
    MILAD = "میلاد",
    VALIASR = "ولیعصر",
    SHAHED = "شاهد",
    MOLAVI = "مولوی",
    RAHIMABAD = "رحیم آباد"
}
enum MASHHAD_AREA {
    KHAYAM = "خیام",
    BOLVARDELAVARN = "بلوار دلاوران",
    GHASEMABAD = "قاسم آباد",
    NAVABSAFAVI = "نواب صفوی"
}

const homeData: home[] = [
    {
        id: 1,
        title: "ویلا لوکس ۹۴۱ متر",
        location: { country: COUNTRY.IRAN, city: CITY.NOSHAHR, area: CITY.DARZIKOLA },
        bathroom: 0,
        meter: 941,
        price: "فروش ویژه",
        rooms: 0,
        status: HOME_STATUS.SALE,
        time: "امروز",
        type: "ویلا",
        year: 1402,
        options: {
            airConditioning: { name: "استخر", status: true },
            refinery: { name: "تصفیه خانه", status: true },
            HomeHeating: { name: "شوفاژ خانه", status: true },
            barbecue: { name: "برق سه فاز", status: true },
            laundry: { name: "برق تک فاز", status: true },
            dryer: { name: "دیوار کشی", status: true },
            grass: { name: "چاه", status: true },
            gym: { name: "شهرک خصوصی", status: true },
            alcove: { name: "شاه نیشن", status: true },
            wifi: { name: "سرایداری", status: true },
            jacuzzi: { name: "کولر گازی", status: true },
            microwave: { name: "فضا سازی و درخت کاری", status: true },
            pool: { name: "پارکینگ", status: true },
            televisionCable: { name: "کنتور برق و آب و گاز", status: true }
        },
        image: ['/assets/image/Home/Dehkhoda/first.jpg', '/assets/image/Home/Dehkhoda/second.jpg', '/assets/image/Home/Dehkhoda/third.jpg', '/assets/image/Home/Dehkhoda/fourth.jpg', '/assets/image/Home/Dehkhoda/5.jpg'],
        saler: { id: 1, name: "محمد علی محمدی", phone: "09121235667", email: "itteamiran@gmail.com", photo: '/assets/image/Person/person.png' },
        description: `
        فروش فوق‌العاده ویلا:
        ۹۴۱ متر زمین 
        حدود ۶۶۱متر زیر بنا 
        استخر به همراه تصفیه خانه 
        شوفاژ خانه 
        ۲ کنتور برق .۲ کنتور آب و گاز 
        چاه ۳۰ متری به همراه مجوز 
        ۸ خواب ، ۱۰ کولر گازی 
        شاه نشین در حیاط 
        ۳ طبقه 
        ۱ واحد ۱۲۰ متری مجزا برای سرایداری 
        داخل شهرک خصوصی ۱۰هزار متری با ۴ ویلا
        موقعیت بسیار عالی 
        قیمت : تماس 
        `,
        mapPosition: [36.625442, 51.532112],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 3,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "با دیدن این زمین شالیزار و آشنایی با ویژگی‌های آن، به شدت متعجب شدم. امکانات آبیاری مناسب و دسترسی آسان به منابع آبی مؤثری در بهبود بهره‌وری و کیفیت محصولات خواهد داشت."
            },
            {
                id: 5,
                name: "ابوالفضل صفایی",
                rate: 2,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "با تجربه‌ی شخصی در کشاورزی، به شدت توصیه می‌کنم این زمین شالیزار را به عنوان سرمایه‌گذاری در نظر بگیرید. واقعاً امکانات و شرایط مثالی برای رشد محصولات و بهره‌برداری مؤثر وجود دارد."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 4,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "من همیشه به دنبال مکانی برای تجربه کشاورزی با سودآوری مناسب بوده‌ام. این زمین شالیزار با شرایط ایده‌آل و مناسبی که دارد، به نظر من یک فرصت بسیار ارزشمند برای سرمایه‌گذاری است."
            },
        ],
        typeSell: "ground"
    },
    {
        id: 2,
        title: "زمین شالیزاری 18000متر",
        location: { country: COUNTRY.IRAN, city: CITY.SARY, area: CITY.SARY },
        bathroom: 0,
        meter: 18000,
        price: "فروش ویژه",
        rooms: 0,
        status: HOME_STATUS.SALE,
        time: "یک هفته پیش",
        type: "زمین شالیزاری",
        year: 1402,
        options: {
            airConditioning: { name: "حلقه چاه", status: true },
            barbecue: { name: "برق سه فاز", status: true },
            laundry: { name: "برق تک فاز", status: true },
            dryer: { name: "دیوار کشی", status: true },
            grass: { name: "پی ریزی", status: true },
            gym: { name: "پروانه بهره برداری", status: true },
            wifi: { name: "جاده کشی", status: true },
            jacuzzi: { name: "جواز ساخت و ساز", status: true },
            microwave: { name: "توانایی پرورش درخت", status: true },
            pool: { name: "مسکونی", status: true },
            refrigrator: { name: "کشاورزی", status: true },
            televisionCable: { name: "صنعتی", status: false }
        },
        image: ['/assets/image/Home/first/1.jpg', '/assets/image/Home/first/2.jpg', '/assets/image/Home/first/3.jpg', '/assets/image/Home/first/4.jpg', '/assets/image/Home/first/5.jpg', '/assets/image/Home/first/6.jpg', '/assets/image/Home/first/7.jpg', '/assets/image/Home/first/8.jpg', '/assets/image/Home/first/9.jpg'],
        saler: { id: 1, name: "محمد علی محمدی", phone: "09121235667", email: "itteamiran@gmail.com", photo: '/assets/image/Person/person.png' },
        description: ` زمین شالیزاری 18000متر ،، رودخانه ، چاه نیمه عمیق و دور زمین دیوار کشی و فنس و دور رودخانه دارای پی ساختمان90الی 100 متری و دارای پروانه بهره برداری  و جاده کشی با نشست سپاه پاسداران تصویب و بودجه ی آن پرداخت گردیده 
   تبدیل به باغ ،و دارای زمینه ی  فعالیت پرورش درختان میوه ، درخت دانه های آجیلی ، محصولات ادویه ای و آجیلی و دارای سند دستدارمی و مورد تایید شورای محل و داری جواز ساخت و ساز مسکونی ‌،برق اختصاصیو مبلغ در نظر گفته شده برای فروش توافقی می‌باشد
        `,
        mapPosition: [36.526329, 53.118186],
        video: "https://cloud.avalamozesh.com/s/NHzFk9cnmXebNA7/download/video_2023-10-28_11-51-33.mp4",
        poster: "/assets/image/Home/first/1.jpg",
        comments: [
            {
                id: 4,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "با دیدن این زمین شالیزار و آشنایی با ویژگی‌های آن، به شدت متعجب شدم. امکانات آبیاری مناسب و دسترسی آسان به منابع آبی مؤثری در بهبود بهره‌وری و کیفیت محصولات خواهد داشت."
            },
            {
                id: 3,
                name: "ابوالفضل صفایی",
                rate: 2,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "با تجربه‌ی شخصی در کشاورزی، به شدت توصیه می‌کنم این زمین شالیزار را به عنوان سرمایه‌گذاری در نظر بگیرید. واقعاً امکانات و شرایط مثالی برای رشد محصولات و بهره‌برداری مؤثر وجود دارد."
            },
            {
                id: 4,
                name: "سهیل صفایی",
                rate: 4,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "من همیشه به دنبال مکانی برای تجربه کشاورزی با سودآوری مناسب بوده‌ام. این زمین شالیزار با شرایط ایده‌آل و مناسبی که دارد، به نظر من یک فرصت بسیار ارزشمند برای سرمایه‌گذاری است."
            },
        ],
        typeSell: "ground"
    },
    {
        id: 3,
        title: "آپارتمان مبله کلید نخورده تهران",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.ARGANTIN },
        bathroom: 2,
        meter: 120,
        price: 3_200_000_000,
        rooms: 4,
        status: HOME_STATUS.SALE,
        time: "1 سال قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1379,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ['/assets/image/Home/project1/1.jpg', '/assets/image/Home/project1/2.jpg', '/assets/image/Home/project1/3.jpg'],
        saler: { id: 1, name: "ابوالفضل صفایی", phone: "09918183139", email: "mh@gmail.com", photo: '/assets/image/Person/4.jpeg' },
        description: `
        املاک به معنای دارایی‌های غیرمتحرکی است که شامل زمین، خانه، آپارتمان، ویلا، مغازه، دفتر کار و سایر اموالی است که قابلیت استفاده و بهره‌برداری برای افراد را دارا هستند. املاک به عنوان یک منبع سرمایه‌گذاری محسوب می‌شوند و بسیاری از افراد در جامعه به دنبال خرید یا فروش املاک هستند.
        
        بازار املاک یک بازار پویا است که تحت تأثیر عوامل مختلف اقتصادی، سیاسی و فرهنگی قرار می‌گیرد. قطعات زمین و خانه‌ها در مناطق مختلف شهر چشمگیراً در قدرت خرید و فروش تأثیرگذار هستند. عوامل مختلف نظیر نزدیک بودن به خدمات عمومی (پارک‌ها، مدارس، بانک‌ها)، حضور فضای سبز، دسترسی به حمل و نقل عمومی و امکانات رفاهی می‌توانند قیمت املاک را تحت تأثیر قرار دهند.
        
        املاک به عنوان یک منبع سرمایه‌گذاری نیز مورد توجه قرار می‌گیرند. خرید و فروش املاک به عنوان یک راه برای سرمایه‌گذاری در آینده و کسب درآمد استفاده می‌شود. بسیاری از افراد به دنبال خرید یا ساخت خانه برای زندگی خود هستند، در حالی که بعضی دست به خرید و فروش املاک با هدف کسب سود مالی می‌زنند.`,
        mapPosition: [35.74, 51.404343],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 1,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 2,
                name: "ابوالفضل صفایی",
                rate: 3,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 1,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
        ],
        typeSell: "Building"
    },
    {
        id: 4,
        title: "آپارتمان تهران دروس",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.DAROS },
        bathroom: 1,
        meter: 150,
        price: 8_000_000_000,
        rooms: 6,
        status: HOME_STATUS.MORTGAGE,
        time: "1 سال قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1392,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ['/assets/image/Home/project2/1.jpg', '/assets/image/Home/project2/3.jpg', '/assets/image/Home/project2/6.jpg', '/assets/image/Home/project2/8.jpg', '/assets/image/Home/project2/7.jpg'],
        saler: { id: 1, name: "سهیل صفایی", phone: "09918183139", email: "mh@gmail.com", photo: '/assets/image/Person/2.jpeg' },
        description: `
        املاک به معنای دارایی‌های غیرمتحرکی است که شامل زمین، خانه، آپارتمان، ویلا، مغازه، دفتر کار و سایر اموالی است که قابلیت استفاده و بهره‌برداری برای افراد را دارا هستند. املاک به عنوان یک منبع سرمایه‌گذاری محسوب می‌شوند و بسیاری از افراد در جامعه به دنبال خرید یا فروش املاک هستند.
        
        بازار املاک یک بازار پویا است که تحت تأثیر عوامل مختلف اقتصادی، سیاسی و فرهنگی قرار می‌گیرد. قطعات زمین و خانه‌ها در مناطق مختلف شهر چشمگیراً در قدرت خرید و فروش تأثیرگذار هستند. عوامل مختلف نظیر نزدیک بودن به خدمات عمومی (پارک‌ها، مدارس، بانک‌ها)، حضور فضای سبز، دسترسی به حمل و نقل عمومی و امکانات رفاهی می‌توانند قیمت املاک را تحت تأثیر قرار دهند.
        
        املاک به عنوان یک منبع سرمایه‌گذاری نیز مورد توجه قرار می‌گیرند. خرید و فروش املاک به عنوان یک راه برای سرمایه‌گذاری در آینده و کسب درآمد استفاده می‌شود. بسیاری از افراد به دنبال خرید یا ساخت خانه برای زندگی خود هستند، در حالی که بعضی دست به خرید و فروش املاک با هدف کسب سود مالی می‌زنند.`
        , mapPosition: [35.74, 51.404343],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 1,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 2,
                name: "ابوالفضل صفایی",
                rate: 3,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 1,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
        ],
        typeSell: "Building"
    },
    {
        id: 5,
        title: "آپارتمان نوساز الهیه ",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.ELAHIE },
        bathroom: 1,
        meter: 100,
        price: 2_600_000_000,
        rooms: 2,
        status: HOME_STATUS.SALE,
        time: "برای 5 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1401,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ['/assets/image/Home/project3/1.jpg', '/assets/image/Home/project3/2.jpg', '/assets/image/Home/project3/3.jpg',],
        saler: { id: 1, name: "امین یزدانی", phone: "09918183139", email: "mh@gmail.com", photo: '/assets/image/Person/1.jpeg' },
        description: `
        املاک به معنای دارایی‌های غیرمتحرکی است که شامل زمین، خانه، آپارتمان، ویلا، مغازه، دفتر کار و سایر اموالی است که قابلیت استفاده و بهره‌برداری برای افراد را دارا هستند. املاک به عنوان یک منبع سرمایه‌گذاری محسوب می‌شوند و بسیاری از افراد در جامعه به دنبال خرید یا فروش املاک هستند.
        
        بازار املاک یک بازار پویا است که تحت تأثیر عوامل مختلف اقتصادی، سیاسی و فرهنگی قرار می‌گیرد. قطعات زمین و خانه‌ها در مناطق مختلف شهر چشمگیراً در قدرت خرید و فروش تأثیرگذار هستند. عوامل مختلف نظیر نزدیک بودن به خدمات عمومی (پارک‌ها، مدارس، بانک‌ها)، حضور فضای سبز، دسترسی به حمل و نقل عمومی و امکانات رفاهی می‌توانند قیمت املاک را تحت تأثیر قرار دهند.
        
        املاک به عنوان یک منبع سرمایه‌گذاری نیز مورد توجه قرار می‌گیرند. خرید و فروش املاک به عنوان یک راه برای سرمایه‌گذاری در آینده و کسب درآمد استفاده می‌شود. بسیاری از افراد به دنبال خرید یا ساخت خانه برای زندگی خود هستند، در حالی که بعضی دست به خرید و فروش املاک با هدف کسب سود مالی می‌زنند.`
        , mapPosition: [35.74, 51.404343],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 1,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 2,
                name: "ابوالفضل صفایی",
                rate: 3,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 1,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
        ],
        typeSell: "Building"
    },
    {
        id: 6,
        title: "آپارتمان دهکده المپیک",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.OLAMPIK },
        bathroom: 1,
        meter: 75,
        price: 5_400_000_000,
        rooms: 2,
        status: HOME_STATUS.RENT,
        time: "برای 2 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1386,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ['/assets/image/Home/project4/2.jpg', '/assets/image/Home/project4/1.jpg', '/assets/image/Home/project4/3.jpg', '/assets/image/Home/project4/4.jpg',],
        saler: { id: 1, name: "سامان محلاتی", phone: "09918183139", email: "mh@gmail.com", photo: '/assets/image/Person/5.jpg' },
        description: `
        املاک به معنای دارایی‌های غیرمتحرکی است که شامل زمین، خانه، آپارتمان، ویلا، مغازه، دفتر کار و سایر اموالی است که قابلیت استفاده و بهره‌برداری برای افراد را دارا هستند. املاک به عنوان یک منبع سرمایه‌گذاری محسوب می‌شوند و بسیاری از افراد در جامعه به دنبال خرید یا فروش املاک هستند.
        
        بازار املاک یک بازار پویا است که تحت تأثیر عوامل مختلف اقتصادی، سیاسی و فرهنگی قرار می‌گیرد. قطعات زمین و خانه‌ها در مناطق مختلف شهر چشمگیراً در قدرت خرید و فروش تأثیرگذار هستند. عوامل مختلف نظیر نزدیک بودن به خدمات عمومی (پارک‌ها، مدارس، بانک‌ها)، حضور فضای سبز، دسترسی به حمل و نقل عمومی و امکانات رفاهی می‌توانند قیمت املاک را تحت تأثیر قرار دهند.
        
        املاک به عنوان یک منبع سرمایه‌گذاری نیز مورد توجه قرار می‌گیرند. خرید و فروش املاک به عنوان یک راه برای سرمایه‌گذاری در آینده و کسب درآمد استفاده می‌شود. بسیاری از افراد به دنبال خرید یا ساخت خانه برای زندگی خود هستند، در حالی که بعضی دست به خرید و فروش املاک با هدف کسب سود مالی می‌زنند.`
        , mapPosition: [35.74, 51.404343],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 1,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 2,
                name: "ابوالفضل صفایی",
                rate: 3,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 1,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
        ],
        typeSell: "Building"
    },
    {
        id: 7,
        title: "آپارتمان نیاوران",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.NIAVARAN },
        bathroom: 1,
        meter: 90,
        price: 1_100_000_000,
        rooms: 2,
        status: HOME_STATUS.RENT,
        time: "برای 7 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1391,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ['/assets/image/Home/project5/2.jpg', '/assets/image/Home/project5/3.jpg', '/assets/image/Home/project5/4.jpg', '/assets/image/Home/project5/1.jpg',],
        saler: { id: 1, name: "امیر نیازمند", phone: "09918183139", email: "mh@gmail.com", photo: '/assets/image/Person/5.jpeg' },
        description: `
        املاک به معنای دارایی‌های غیرمتحرکی است که شامل زمین، خانه، آپارتمان، ویلا، مغازه، دفتر کار و سایر اموالی است که قابلیت استفاده و بهره‌برداری برای افراد را دارا هستند. املاک به عنوان یک منبع سرمایه‌گذاری محسوب می‌شوند و بسیاری از افراد در جامعه به دنبال خرید یا فروش املاک هستند.
        
        بازار املاک یک بازار پویا است که تحت تأثیر عوامل مختلف اقتصادی، سیاسی و فرهنگی قرار می‌گیرد. قطعات زمین و خانه‌ها در مناطق مختلف شهر چشمگیراً در قدرت خرید و فروش تأثیرگذار هستند. عوامل مختلف نظیر نزدیک بودن به خدمات عمومی (پارک‌ها، مدارس، بانک‌ها)، حضور فضای سبز، دسترسی به حمل و نقل عمومی و امکانات رفاهی می‌توانند قیمت املاک را تحت تأثیر قرار دهند.
        
        املاک به عنوان یک منبع سرمایه‌گذاری نیز مورد توجه قرار می‌گیرند. خرید و فروش املاک به عنوان یک راه برای سرمایه‌گذاری در آینده و کسب درآمد استفاده می‌شود. بسیاری از افراد به دنبال خرید یا ساخت خانه برای زندگی خود هستند، در حالی که بعضی دست به خرید و فروش املاک با هدف کسب سود مالی می‌زنند.`
        , mapPosition: [35.74, 51.404343],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 1,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 2,
                name: "ابوالفضل صفایی",
                rate: 3,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 1,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
        ],
        typeSell: "Building"
    },
    {
        id: 8,
        title: "۱۰۵ متر آپارتمان تهران",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.TEHRANPARS },
        bathroom: 1,
        meter: 40,
        price: 12_500_000_000,
        rooms: 1,
        status: HOME_STATUS.SALE,
        time: "برای 1 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1398,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ['/assets/image/Home/project6/1.jpg', '/assets/image/Home/project6/2.jpg', '/assets/image/Home/project6/3.jpg', '/assets/image/Home/project6/4.jpg',],
        saler: { id: 1, name: "مهدی رحمانی", phone: "09918183139", email: "mh@gmail.com", photo: '/assets/image/Person/1.jpeg' },
        description: `
        املاک به معنای دارایی‌های غیرمتحرکی است که شامل زمین، خانه، آپارتمان، ویلا، مغازه، دفتر کار و سایر اموالی است که قابلیت استفاده و بهره‌برداری برای افراد را دارا هستند. املاک به عنوان یک منبع سرمایه‌گذاری محسوب می‌شوند و بسیاری از افراد در جامعه به دنبال خرید یا فروش املاک هستند.
        
        بازار املاک یک بازار پویا است که تحت تأثیر عوامل مختلف اقتصادی، سیاسی و فرهنگی قرار می‌گیرد. قطعات زمین و خانه‌ها در مناطق مختلف شهر چشمگیراً در قدرت خرید و فروش تأثیرگذار هستند. عوامل مختلف نظیر نزدیک بودن به خدمات عمومی (پارک‌ها، مدارس، بانک‌ها)، حضور فضای سبز، دسترسی به حمل و نقل عمومی و امکانات رفاهی می‌توانند قیمت املاک را تحت تأثیر قرار دهند.
        
        املاک به عنوان یک منبع سرمایه‌گذاری نیز مورد توجه قرار می‌گیرند. خرید و فروش املاک به عنوان یک راه برای سرمایه‌گذاری در آینده و کسب درآمد استفاده می‌شود. بسیاری از افراد به دنبال خرید یا ساخت خانه برای زندگی خود هستند، در حالی که بعضی دست به خرید و فروش املاک با هدف کسب سود مالی می‌زنند.`
        , mapPosition: [35.74, 51.404343],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 1,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 2,
                name: "ابوالفضل صفایی",
                rate: 3,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 1,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
        ],
        typeSell: "Building"
    },
    {
        id: 9,
        title: "آپارتمان ۹۰ متری دو خوابه در سرعین",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.SAREIN },
        bathroom: 1,
        meter: 100,
        price: 7_000_000_000,
        rooms: 2,
        status: HOME_STATUS.SALE,
        time: "برای 1 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1399,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ['/assets/image/Home/project7/1.jpg', '/assets/image/Home/project7/2.jpg', '/assets/image/Home/project7/3.jpg',],
        saler: { id: 1, name: "حسین سالاری", phone: "09918183139", email: "mh@gmail.com", photo: '/assets/image/Person/4.jpeg' },
        description: `
        املاک به معنای دارایی‌های غیرمتحرکی است که شامل زمین، خانه، آپارتمان، ویلا، مغازه، دفتر کار و سایر اموالی است که قابلیت استفاده و بهره‌برداری برای افراد را دارا هستند. املاک به عنوان یک منبع سرمایه‌گذاری محسوب می‌شوند و بسیاری از افراد در جامعه به دنبال خرید یا فروش املاک هستند.
        
        بازار املاک یک بازار پویا است که تحت تأثیر عوامل مختلف اقتصادی، سیاسی و فرهنگی قرار می‌گیرد. قطعات زمین و خانه‌ها در مناطق مختلف شهر چشمگیراً در قدرت خرید و فروش تأثیرگذار هستند. عوامل مختلف نظیر نزدیک بودن به خدمات عمومی (پارک‌ها، مدارس، بانک‌ها)، حضور فضای سبز، دسترسی به حمل و نقل عمومی و امکانات رفاهی می‌توانند قیمت املاک را تحت تأثیر قرار دهند.
        
        املاک به عنوان یک منبع سرمایه‌گذاری نیز مورد توجه قرار می‌گیرند. خرید و فروش املاک به عنوان یک راه برای سرمایه‌گذاری در آینده و کسب درآمد استفاده می‌شود. بسیاری از افراد به دنبال خرید یا ساخت خانه برای زندگی خود هستند، در حالی که بعضی دست به خرید و فروش املاک با هدف کسب سود مالی می‌زنند.`
        , mapPosition: [35.74, 51.404343],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 1,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 2,
                name: "ابوالفضل صفایی",
                rate: 3,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 1,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
        ],
        typeSell: "Building"
    },
    {
        id: 10,
        title: "آپارتمان میدان انقلاب ",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.ENGHLAB },
        bathroom: 1,
        meter: 60,
        price: 9_900_000_000,
        rooms: 1,
        status: HOME_STATUS.MORTGAGE,
        time: "برای 3 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1394,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ['/assets/image/Home/project8/1.jpg', '/assets/image/Home/project8/2.jpg', '/assets/image/Home/project8/3.jpg',],
        saler: { id: 1, name: "رضا دولتی", phone: "09918183139", email: "mh@gmail.com", photo: '/assets/image/Person/5.jpeg' },
        description: `
        املاک به معنای دارایی‌های غیرمتحرکی است که شامل زمین، خانه، آپارتمان، ویلا، مغازه، دفتر کار و سایر اموالی است که قابلیت استفاده و بهره‌برداری برای افراد را دارا هستند. املاک به عنوان یک منبع سرمایه‌گذاری محسوب می‌شوند و بسیاری از افراد در جامعه به دنبال خرید یا فروش املاک هستند.
        
        بازار املاک یک بازار پویا است که تحت تأثیر عوامل مختلف اقتصادی، سیاسی و فرهنگی قرار می‌گیرد. قطعات زمین و خانه‌ها در مناطق مختلف شهر چشمگیراً در قدرت خرید و فروش تأثیرگذار هستند. عوامل مختلف نظیر نزدیک بودن به خدمات عمومی (پارک‌ها، مدارس، بانک‌ها)، حضور فضای سبز، دسترسی به حمل و نقل عمومی و امکانات رفاهی می‌توانند قیمت املاک را تحت تأثیر قرار دهند.
        
        املاک به عنوان یک منبع سرمایه‌گذاری نیز مورد توجه قرار می‌گیرند. خرید و فروش املاک به عنوان یک راه برای سرمایه‌گذاری در آینده و کسب درآمد استفاده می‌شود. بسیاری از افراد به دنبال خرید یا ساخت خانه برای زندگی خود هستند، در حالی که بعضی دست به خرید و فروش املاک با هدف کسب سود مالی می‌زنند.`
        , mapPosition: [35.74, 51.404343],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 1,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 2,
                name: "ابوالفضل صفایی",
                rate: 3,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 1,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
        ],
        typeSell: "Building"
    },
    {
        id: 11,
        title: "بلوار استقلال گلستان یک",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.GOLESTAN },
        bathroom: 4,
        meter: 300,
        price: 220_000_000_000,
        rooms: 4,
        status: HOME_STATUS.MORTGAGE,
        time: "برای 9 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1400,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ['/assets/image/Home/project9/1.jpg', '/assets/image/Home/project9/2.jpg', '/assets/image/Home/project9/3.jpg', '/assets/image/Home/project9/4.jpg',],
        saler: { id: 1, name: "محمد رضایی", phone: "09918183139", email: "mh@gmail.com", photo: '/assets/image/Person/5.jpg' },
        description: `
        املاک به معنای دارایی‌های غیرمتحرکی است که شامل زمین، خانه، آپارتمان، ویلا، مغازه، دفتر کار و سایر اموالی است که قابلیت استفاده و بهره‌برداری برای افراد را دارا هستند. املاک به عنوان یک منبع سرمایه‌گذاری محسوب می‌شوند و بسیاری از افراد در جامعه به دنبال خرید یا فروش املاک هستند.
        
        بازار املاک یک بازار پویا است که تحت تأثیر عوامل مختلف اقتصادی، سیاسی و فرهنگی قرار می‌گیرد. قطعات زمین و خانه‌ها در مناطق مختلف شهر چشمگیراً در قدرت خرید و فروش تأثیرگذار هستند. عوامل مختلف نظیر نزدیک بودن به خدمات عمومی (پارک‌ها، مدارس، بانک‌ها)، حضور فضای سبز، دسترسی به حمل و نقل عمومی و امکانات رفاهی می‌توانند قیمت املاک را تحت تأثیر قرار دهند.
        
        املاک به عنوان یک منبع سرمایه‌گذاری نیز مورد توجه قرار می‌گیرند. خرید و فروش املاک به عنوان یک راه برای سرمایه‌گذاری در آینده و کسب درآمد استفاده می‌شود. بسیاری از افراد به دنبال خرید یا ساخت خانه برای زندگی خود هستند، در حالی که بعضی دست به خرید و فروش املاک با هدف کسب سود مالی می‌زنند.`
        , mapPosition: [35.74, 51.404343],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 1,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 2,
                name: "ابوالفضل صفایی",
                rate: 3,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 1,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
        ],
        typeSell: "Building"
    },
    {
        id: 12,
        title: "پیش فروش چیتگر",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.CHITGAR },
        bathroom: 1,
        meter: 55,
        price: 3_300_000_000,
        rooms: 1,
        status: HOME_STATUS.SALE,
        time: "برای 6 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1402,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ['/assets/image/Home/project10/1.jpg', '/assets/image/Home/project10/2.jpg', '/assets/image/Home/project10/3.jpg', '/assets/image/Home/project10/4.jpg',],
        saler: { id: 1, name: "عرفان پوری", phone: "09918183139", email: "mh@gmail.com", photo: '/assets/image/Person/5.jpeg' },
        description: `
        املاک به معنای دارایی‌های غیرمتحرکی است که شامل زمین، خانه، آپارتمان، ویلا، مغازه، دفتر کار و سایر اموالی است که قابلیت استفاده و بهره‌برداری برای افراد را دارا هستند. املاک به عنوان یک منبع سرمایه‌گذاری محسوب می‌شوند و بسیاری از افراد در جامعه به دنبال خرید یا فروش املاک هستند.
        
        بازار املاک یک بازار پویا است که تحت تأثیر عوامل مختلف اقتصادی، سیاسی و فرهنگی قرار می‌گیرد. قطعات زمین و خانه‌ها در مناطق مختلف شهر چشمگیراً در قدرت خرید و فروش تأثیرگذار هستند. عوامل مختلف نظیر نزدیک بودن به خدمات عمومی (پارک‌ها، مدارس، بانک‌ها)، حضور فضای سبز، دسترسی به حمل و نقل عمومی و امکانات رفاهی می‌توانند قیمت املاک را تحت تأثیر قرار دهند.
        
        املاک به عنوان یک منبع سرمایه‌گذاری نیز مورد توجه قرار می‌گیرند. خرید و فروش املاک به عنوان یک راه برای سرمایه‌گذاری در آینده و کسب درآمد استفاده می‌شود. بسیاری از افراد به دنبال خرید یا ساخت خانه برای زندگی خود هستند، در حالی که بعضی دست به خرید و فروش املاک با هدف کسب سود مالی می‌زنند.`
        , mapPosition: [35.74, 51.404343],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 1,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 2,
                name: "ابوالفضل صفایی",
                rate: 3,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 1,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
        ],
        typeSell: "Building"
    },
    {
        id: 13,
        title: " اپارتمان 92متری واقع در محله غیاثی",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.GHIACY },
        bathroom: 3,
        meter: 170,
        price: 66_400_000_000,
        rooms: 3,
        status: HOME_STATUS.RENT,
        time: "برای 1 سال قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1390,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ['/assets/image/Home/project11/1.jpg', '/assets/image/Home/project11/2.jpg', '/assets/image/Home/project11/3.jpg', '/assets/image/Home/project11/4.jpg',],
        saler: { id: 1, name: "امین جعفری", phone: "09918183139", email: "mh@gmail.com", photo: '/assets/image/Person/1.jpeg' },
        description: `
        املاک به معنای دارایی‌های غیرمتحرکی است که شامل زمین، خانه، آپارتمان، ویلا، مغازه، دفتر کار و سایر اموالی است که قابلیت استفاده و بهره‌برداری برای افراد را دارا هستند. املاک به عنوان یک منبع سرمایه‌گذاری محسوب می‌شوند و بسیاری از افراد در جامعه به دنبال خرید یا فروش املاک هستند.
        
        بازار املاک یک بازار پویا است که تحت تأثیر عوامل مختلف اقتصادی، سیاسی و فرهنگی قرار می‌گیرد. قطعات زمین و خانه‌ها در مناطق مختلف شهر چشمگیراً در قدرت خرید و فروش تأثیرگذار هستند. عوامل مختلف نظیر نزدیک بودن به خدمات عمومی (پارک‌ها، مدارس، بانک‌ها)، حضور فضای سبز، دسترسی به حمل و نقل عمومی و امکانات رفاهی می‌توانند قیمت املاک را تحت تأثیر قرار دهند.
        
        املاک به عنوان یک منبع سرمایه‌گذاری نیز مورد توجه قرار می‌گیرند. خرید و فروش املاک به عنوان یک راه برای سرمایه‌گذاری در آینده و کسب درآمد استفاده می‌شود. بسیاری از افراد به دنبال خرید یا ساخت خانه برای زندگی خود هستند، در حالی که بعضی دست به خرید و فروش املاک با هدف کسب سود مالی می‌زنند.`
        , mapPosition: [35.74, 51.404343],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 1,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 2,
                name: "ابوالفضل صفایی",
                rate: 3,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 1,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
        ],
        typeSell: "Building"
    },
    {
        id: 14,
        title: "138 متر سه خواب دو پارکینگ سند دار شهرک آزادی",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.AZADI },
        bathroom: 1,
        meter: 50,
        price: 20_000_000_000,
        rooms: 1,
        status: HOME_STATUS.SALE,
        time: "برای 7 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1390,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ['/assets/image/Home/project12/1.jpg', '/assets/image/Home/project12/2.jpg', '/assets/image/Home/project12/3.jpg', '/assets/image/Home/project12/4.jpg', '/assets/image/Home/project12/5.jpg', '/assets/image/Home/project12/6.jpg',],
        saler: { id: 1, name: "آرین سالارکیا", phone: "09918183139", email: "mh@gmail.com", photo: '/assets/image/Person/2.jpeg' },
        description: `
        املاک به معنای دارایی‌های غیرمتحرکی است که شامل زمین، خانه، آپارتمان، ویلا، مغازه، دفتر کار و سایر اموالی است که قابلیت استفاده و بهره‌برداری برای افراد را دارا هستند. املاک به عنوان یک منبع سرمایه‌گذاری محسوب می‌شوند و بسیاری از افراد در جامعه به دنبال خرید یا فروش املاک هستند.
        
        بازار املاک یک بازار پویا است که تحت تأثیر عوامل مختلف اقتصادی، سیاسی و فرهنگی قرار می‌گیرد. قطعات زمین و خانه‌ها در مناطق مختلف شهر چشمگیراً در قدرت خرید و فروش تأثیرگذار هستند. عوامل مختلف نظیر نزدیک بودن به خدمات عمومی (پارک‌ها، مدارس، بانک‌ها)، حضور فضای سبز، دسترسی به حمل و نقل عمومی و امکانات رفاهی می‌توانند قیمت املاک را تحت تأثیر قرار دهند.
        
        املاک به عنوان یک منبع سرمایه‌گذاری نیز مورد توجه قرار می‌گیرند. خرید و فروش املاک به عنوان یک راه برای سرمایه‌گذاری در آینده و کسب درآمد استفاده می‌شود. بسیاری از افراد به دنبال خرید یا ساخت خانه برای زندگی خود هستند، در حالی که بعضی دست به خرید و فروش املاک با هدف کسب سود مالی می‌زنند.`,
        mapPosition: [35.74, 51.404343],
        video: "https://cloud.avalamozesh.com/s/jm5S8tzNkQMXfsc/download/pexels-kindel-media-7578550%20%28720p%29.mp4",
        poster: "/assets/image/Home/poster.jpg",
        comments: [
            {
                id: 1,
                name: "سامان محلاتی",
                rate: 5,
                time: "۱۴ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 2,
                name: "ابوالفضل صفایی",
                rate: 3,
                time: "۱۳ اسفند ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
            {
                id: 3,
                name: "سهیل صفایی",
                rate: 1,
                time: "۱۹ فروردین ۱۳۹۹",
                comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
            },
        ],
        typeSell: "Building"
    },
]

export default homeData