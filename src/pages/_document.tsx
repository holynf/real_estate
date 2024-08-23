import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" dir='rtl'>
      <Head>
        <title>
          وی آی پی املاک: منزل رویاییتان را پیدا کنید 
        </title>
        <meta
          name="description"
          content="به وی آی پی املاک، جایی که رویاهای خرید و فروش املاک و زمین به واقعیت تبدیل می‌شوند، خوش آمدید. ما با افتخار به شما کمک می‌کنیم تا خانه‌ی رویایی خود را پیدا کنید یا ملک خود را با قدرت بفروشید."
          key="desc"
        />
        <meta
          name="keywords"
          content='فروش املاک، خرید ملک، خرید زمین، مشاوره املاک، املاک ویژه، ملک‌های اختصاصی، زمین‌های سرمایه‌گذاری، مشاوران املاک، بهترین ملک‌ها، خرید املاک رویایی، ملک‌های دست دوم، آگهی‌های املاک، املاک با قیمت مناسب، خرید مسکن، زمین‌های ساخت و ساز، ملک‌های تجاری، مشاوره خرید ملک، فروش زمین سرزمین، امنیت معاملات املاک'
          key="keyw"
        />
        <link rel="icon" href="/assets/image/1.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
