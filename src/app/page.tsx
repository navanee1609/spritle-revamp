import Cards from "@/components/cards/Cards";
import BusinessCarousel from "@/components/carousel/BusinessCarousel";
import Clients from "@/components/clients/Clients";
import HeroSection from "@/components/hero/HeroSection";
import Services from "@/components/service/Services";
import { TextRevealDemo } from "@/components/text/TextReveal";

export default function Home() {
  return (
   <div>
      <HeroSection />
      <TextRevealDemo/>
      <BusinessCarousel />
      <Clients />
      <Cards/>
      <Services/>
    </div>
  );
}
