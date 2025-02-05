"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Swiper as SwiperClass } from "swiper";

// Import Images
import nestle from "@/assets/business/nestle.png";
import airport from "@/assets/business/airport.png";
import sports from "@/assets/business/sports.png";
import logistics from "@/assets/business/logistics.png";
import medical from "@/assets/business/medical.png";
import education from "@/assets/business/education.png";

const carouselData = [
  { id: 1, image: nestle, text: "How we helped Nestle create personalized nutrition through genetic insights" },
  { id: 2, image: airport, text: "Smart Airport Management: Track, Maintain, and Optimize with Precision" },
  { id: 3, image: sports, text: "A platform for managing and coordinating every sports meet across USA" },
  { id: 4, image: logistics, text: "A major logistics company in the US achieved a 40% reduction in response time." },
  { id: 5, image: medical, text: "Instant Access to Top Cancer Specialists Across the World – Safe & Effortless" },
  { id: 6, image: education, text: "Unlocking Education with Smooth, Engaging Digital Learning" },
];

const BusinessCarousel = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="relative w-full mx-auto my-12 max-w-[95%]">
      {/* Heading & Description */}
      <div className="text-start mb-6">
        <h2 className="text-3xl font-bold text-white">Transforming Business</h2>
        <p className="text-[#B0B0B0] mt-2">
          Transform your business with generative AI → We help businesses start their digital journey
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 }, // Show 2 full slides + 3rd slightly visible
        }}
        className="w-full"
      >
        {carouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              {/* Image (Imported) */}
              <div className="transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.text}
                  width={400}
                  height={250}
                  layout="responsive"
                  className="rounded-xl object-cover"
                />
              </div>

              {/* Gradient Overlay - Only from bottom to text (on hover) */}
              <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Text (Always Visible) */}
              <div className="absolute bottom-4 w-full px-4">
                <p className="text-white font-semibold">{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons - Placed Below the Carousel in Bottom Right */}
      <div className="absolute bottom-[-50px] right-0 flex space-x-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-3 rounded-full flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-[#121212] text-white hover:bg-[#15AED5]"
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-3 rounded-full flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-[#15AED5] text-white hover:bg-[#121212]"
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default BusinessCarousel;
