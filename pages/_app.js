import '@/styles/globals.css';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';

export default function App({ Component, pageProps }) {
  return <div className='bg-backdrop'>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
}
