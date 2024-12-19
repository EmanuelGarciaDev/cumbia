import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import Media from "../components/Media";
import VideoHero from "../components/VideoHero";

export default function HomePage() {
  return ( 
  <div>
    <Header />
    <VideoHero />
    <Media />
    <ImageCarousel />
  </div>
  )
}
