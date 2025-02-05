"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import image_1 from "../../assets/hero/image_1.png";
import image_2 from "../../assets/hero/image_2.png";
import image_3 from "../../assets/hero/image_3.png";
import image_4 from "../../assets/hero/image_4.png";
import image_5 from "../../assets/hero/image_5.png";
import image_6 from "../../assets/hero/image_6.png";

const images = [image_1, image_2, image_3, image_4, image_5, image_6];
const texts = [
  "Spritle's Gen AI solutions drive operational cost savings for our clients",
  "Empowering Innovation, Collaboration, And Growth Every Day",
  "With 15+ Years Of Experience, We Create Custom Apps That Transform Your Business",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState("80vw"); // Set a default width
  const autoSlideRef = useRef<() => void | null>(null);
  const transitionDuration = 0.3; // Duration in seconds

  useEffect(() => {
    autoSlideRef.current = next;
    const interval = setInterval(() => {
      if (autoSlideRef.current) {
        autoSlideRef.current();
      }
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Check for client-side environment before using window
    if (typeof window !== "undefined") {
      const updateImageWidth = () => {
        const width = window.innerWidth;
        if (width < 768) {
          setImageWidth("90vw"); // Mobile
        } else if (width < 1024) {
          setImageWidth("80vw"); // Tablet
        } else {
          setImageWidth("80vw"); // Desktop
        }
      };
      updateImageWidth(); // Set initial width
      window.addEventListener("resize", updateImageWidth); // Update width on window resize
      return () => window.removeEventListener("resize", updateImageWidth); // Cleanup on unmount
    }
  }, []);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  return (
    <div>
      {/* Text Carousel */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          className="text-4xl md:text-5xl lg:text-6xl text-white text-center max-w-6xl mx-auto mt-24 my-10"
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: transitionDuration }}
        >
          {texts[currentIndex]}
        </motion.h1>
      </AnimatePresence>

      {/* Image Carousel */}
      <div
        style={{
          width: "98vw",
          height: "80vh", // Adjusted height for mobile and tablet
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {images.map((img, index) => {
          let diff = index - currentIndex;
          if (diff < -Math.floor(images.length / 2)) diff += images.length;
          else if (diff > Math.floor(images.length / 2)) diff -= images.length;

          let target = {};
          if (diff === 0) {
            // Center Image (Main)
            target = {
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
              scale: 1,
              opacity: 1,
            };
          } else if (diff === -1) {
            // Left Image (Previous)
            target = {
              left: "calc(-105%)",
              top: "50%",
              x: "50%",
              y: "-50%",
              scale: 0.8,
              opacity: 0.8,
            };
          } else if (diff === 1) {
            // Right Image (Next)
            target = {
              left: "calc(125%)",
              top: "50%",
              x: "-50%",
              y: "-50%",
              scale: 0.8,
              opacity: 0.8,
            };
          } else if (diff < -1) {
            // Far Left (Out of View)
            target = {
              left: "calc(-150%)",
              top: "50%",
              x: "-50%",
              y: "-50%",
              scale: 0.7,
              opacity: 0,
            };
          } else if (diff > 1) {
            // Far Right (Out of View)
            target = {
              left: "calc(150%)",
              top: "50%",
              x: "-50%",
              y: "-50%",
              scale: 0.7,
              opacity: 0,
            };
          }

          return (
            <motion.img
              key={index}
              src={img.src}
              alt="Carousel"
              style={{
                position: "absolute",
                width: imageWidth, // Responsive width
                height: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
              animate={target}
              transition={{ ...spring, duration: transitionDuration }}
            />
          );
        })}
      </div>
    </div>
  );
}
