"use client"

import { FaArrowRight } from "react-icons/fa"

export default function Serve() {
  const industries = [
    {
      title: "Healthcare",
      description: "Empowering healthcare through AI-driven digital transformation",
      href: "#", // Add the link here
    },
    {
      title: "Life Sciences",
      description: "Accelerating discovery and growth in life sciences through digital transformation",
      href: "#", // Add the link here
    },
    {
      title: "Aviation",
      description: "Transforming aviation with smarter, data-driven solutions",
      href: "#", // Add the link here
    },
    {
      title: "Manufacturing",
      description: "Optimizing manufacturing processes through digital excellence",
      href: "#", // Add the link here
    },
    {
      title: "Education",
      description: "Shaping the future of education through digital innovation and personalized learning",
      href: "#", // Add the link here
    },
    {
      title: "Ecommerce",
      description: "Revolutionizing eCommerce with data-driven insights and personalized customer journeys",
      href: "#", // Add the link here
    },
    {
      title: "Transportation & Logistics",
      description: "Transforming transportation and logistics with intelligent automation and data-driven precision",
      href: "#", // Add the link here
    },
    {
      title: "Energy & Utilities",
      description: "Empowering energy and utilities with smart digital solutions for a sustainable future",
      href: "#", // Add the link here
    },
    {
      title: "Cpaas",
      description: "Empowering businesses with flexible, data-driven CPaaS solutions for seamless customer engagement",
      href: "#", // Add the link here
    },
  ]

  return (
    <section className="px-6 py-16 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-white mb-4">Industries We Serve</h2>
        <p className="text-zinc-400 text-lg mb-12 max-w-3xl">
          Spritle empowers industries like healthcare, life sciences, aviation, manufacturing, eCommerce,
          transportation, energy, utilities, and CPaaS with innovative digital transformation solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative p-6 rounded-lg border border-white transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-light text-white">{industry.title}</h3>
                <a
                  href={industry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-1.5 border border-zinc-700 group-hover:border-zinc-600 transition-colors bg-transparent group-hover:bg-[#15AED5]"
                >
                  <FaArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-white transform " />
                </a>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
