"use client"
import Cards from "@/components/cards/Cards";
import BusinessCarousel from "@/components/carousel/BusinessCarousel";
import Clients from "@/components/clients/Clients";
import HeroSection from "@/components/hero/HeroSection";
import PartnersSection from "@/components/partner/PartnerSection";
import Serve from "@/components/serve/Serve";
import Services from "@/components/service/Services";
import TestimonialsSection from "@/components/testimonial/Testimonial";
import Blog from "@/components/blogs/Blogs"
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
      <Serve/>
      <PartnersSection/>
      <TestimonialsSection/>
      <Blog/>
    </div>
  );
}
