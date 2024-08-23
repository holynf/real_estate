import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/theme'
import "node_modules/video-react/dist/video-react.css";
import Footer from './components/layout/Footer';
import Header from './components/layout/Header'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  )
}
