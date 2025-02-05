"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TestimonialCard } from "./TestimonialCard"
import testimonail1 from "../../assets/testimonial/testimonial1.png"
import { StaticImageData } from "next/image"

const testimonials = [
  {
    name: "Floyd Miles",
    rating: 4,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    imageSrc: testimonail1,
  },
  {
    name: "Ronald Richards",
    rating: 3.5,
    text: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    imageSrc: testimonail1,
  },
  {
    name: "Savannah Nguyen",
    rating: 3,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    imageSrc: testimonail1,
  },
  {
    name: "Savannah Nguyen",
    rating: 3,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    imageSrc: testimonail1,
  },
  // Additional testimonials can be added here
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Function to calculate the total number of slides needed based on the screen width
  const getSlidesPerPage = () => {
    if (window.innerWidth < 768) {
      return 1 // Mobile: 1 slide at a time
    } else if (window.innerWidth < 1024) {
      return 2 // Tablet: 2 slides at a time
    } else {
      return 3 // Desktop: 3 slides at a time
    }
  }

  const nextSlide = () => {
    const slidesPerPage = getSlidesPerPage()
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / slidesPerPage))
  }

  const prevSlide = () => {
    const slidesPerPage = getSlidesPerPage()
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / slidesPerPage)) % Math.ceil(testimonials.length / slidesPerPage))
  }

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-light mb-2">Our Customer Feedback</h2>
            <p className="text-gray-400">Don't take our word for it. Trust our customers</p>
          </div>
          {/* Flexbox for prev/next buttons, aligned to the right */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={prevSlide}
              className={`p-2 rounded-md flex items-center gap-2 transition-all ${currentSlide === 0 ? "border-white text-white border-2" : "border-gray-500 text-gray-500"}`}
            >
              <ChevronLeft className={`h-6 w-6 ${currentSlide === 0 ? "text-[#9BD609]" : "text-gray-500"}`} />
              Prev
            </button>
            <button
              onClick={nextSlide}
              className={`p-2 rounded-md flex items-center gap-2 transition-all ${currentSlide === Math.ceil(testimonials.length / getSlidesPerPage()) - 1 ? "border-white text-white border-2" : "border-gray-500 text-gray-500"}`}
            >
              Next
              <ChevronRight className={`h-6 w-6 ${currentSlide === Math.ceil(testimonials.length / getSlidesPerPage()) - 1 ? "text-[#9BD609]" : "text-gray-500"}`} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
          {testimonials.slice(currentSlide * getSlidesPerPage(), (currentSlide + 1) * getSlidesPerPage()).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(Math.ceil(testimonials.length / getSlidesPerPage()))].map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-[#9BD609]" : "bg-[#9BD60980]"}`}
              onClick={() => setCurrentSlide(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Mobile specific: prev/next buttons stacked below paragraph */}
        <div className="sm:hidden mt-4 flex justify-end gap-2">
          <button
            onClick={prevSlide}
            className={`p-2 rounded-md flex items-center gap-2 transition-all ${currentSlide === 0 ? "border-white text-white border-2" : "border-gray-500 text-gray-500"}`}
          >
            <ChevronLeft className={`h-6 w-6 ${currentSlide === 0 ? "text-[#9BD609]" : "text-gray-500"}`} />
            Previous
          </button>
          <button
            onClick={nextSlide}
            className={`p-2 rounded-md flex items-center gap-2 transition-all ${currentSlide === Math.ceil(testimonials.length / getSlidesPerPage()) - 1 ? "border-white text-white border-2" : "border-gray-500 text-gray-500"}`}
          >
            Next
            <ChevronRight className={`h-6 w-6 ${currentSlide === Math.ceil(testimonials.length / getSlidesPerPage()) - 1 ? "text-[#9BD609]" : "text-gray-500"}`} />
          </button>
        </div>
      </div>
    </section>
  )
}
