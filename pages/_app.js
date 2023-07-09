import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import '@/styles/globals.css';
export default function App({ Component, pageProps }) {
  return(
    <div className='xl:px-[120px] md:px-[20px] px-[4px]'>
     <Header/>
    <Component {...pageProps} />
    <Footer/>
    </div>
  )
}
