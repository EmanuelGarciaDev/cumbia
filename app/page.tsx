import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import Media from "../components/Media";
import Shows from "../components/Shows";
import VideoHero from "../components/VideoHero";
import WhatsAppApi from "../components/WhatsAppApi";

export default function HomePage() {
  return ( 
  <div className="">
    <Header />
    <VideoHero />
    <div id="Contacto"><Contact /></div>
    {/* <div id="Media"><Media /></div> */}
    <div id="Shows"><Shows /></div>
    <WhatsAppApi />
    <Footer />
  </div>
  )
}
