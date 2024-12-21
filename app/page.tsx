import { AppShell } from "@mantine/core";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import Media from "../components/Media";
import Shows from "../components/Shows";
import VideoHero from "../components/VideoHero";

export default function HomePage() {
  return ( 
  <div>
    <Header />
    {/* <VideoHero /> */}
    <Media />
    <ImageCarousel />
    <Shows />
    <Contact />
    <Footer />
  </div>
  )
}
