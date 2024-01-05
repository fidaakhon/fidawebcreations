import Image from 'next/image'
import Homee from '@/components/Home/Home';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Qualification from '@/components/Qualification/Qualification';
import Portfolio from '@/components/Portfolio/Portfolio';
import Card from '@/components/Card/Card';
import Testimonial from '@/components/Testimonial/Testimonial';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className=" min-h-screen">
      <div className='pt-16' id="Home">
        <Homee />
      </div>
      <div className='pt-36' id="About">
        <About />
      </div>
      <div className='pt-36' id="Skills">
        <Skills />
      </div>
      <div className='mb-36 pt-16 pb-24' id="Qualification">
        <Qualification />
      </div>
      <div className='mb-36 pt-20' id="Portfolio">
        <Portfolio />
      </div>
      <div className='mb-36'>
        <Card />
      </div>
      <div className='mb-36' id="Testimonial">
        <Testimonial />
      </div>
      <div className=' pt-20' id="Contact">
        <Contact />
      </div>
      <div className=''>
        <Footer />
      </div>
    </main>
  )
}
