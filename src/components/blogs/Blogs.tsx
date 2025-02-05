"use client"

import Image from "next/image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import blog1 from "../../assets/blog/blog1.png"

const blogs = [
  {
    title: "Introducing the Workflow Boosters App",
    description: "Advanced code solutions added directly inside of Webflow at the click of a button.",
    image: blog1,
    link: "/blog/workflow-boosters",
  },
  {
    title: "Top 20 UI Inspiration Sites (2023)",
    description:
      "We've collected the top 20 UI inspiration sites, all with links in one handy spot! Find your inspiration for your next project.",
    image: blog1,
    link: "/blog/ui-inspiration-2023",
  },
  {
    title: "How to add a countdown timer to Framer",
    description: "Learn how to add a beautiful countdown to your Framer project. Add it to your project in seconds",
    image: blog1,
    link: "/blog/framer-countdown-timer",
  },
  {
    title: "New Design Trends in 2024",
    description: "A look at the latest UI/UX design trends for the upcoming year.",
    image: blog1,
    link: "/blog/design-trends-2024",
  },
  {
    title: "Mastering Web Animations",
    description: "Learn how to create stunning web animations with GSAP and Framer Motion.",
    image: blog1,
    link: "/blog/web-animations",
  },
]

// Responsive settings for react-multi-carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 480 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
}

export default function BlogCarousel() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
  {/* Container for Title & Button (Horizontally aligned on mobile) */}
  <div className="flex items-center justify-between sm:gap-4 w-full">
    <h2 className="text-white text-3xl md:text-4xl font-light">Blogs</h2>
    <button className="text-white bg-[#15AED5] rounded-full px-6 py-2 hover:bg-blue-600/10">
      Browse all
    </button>
  </div>
</div>


        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2200}
          showDots={false}
          arrows={false}
        >
          {blogs.map((blog, index) => (
            <div key={index} className="p-4">
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className=" rounded-xl"
                  />
                </div>
                <div className="py-6">
                  <h3 className="text-lg font-semibold mb-2 text-white">{blog.title}</h3>
                  <p className="text-white text-sm">{blog.description}</p>
                </div>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
