import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"

export default function Services() {
  const services = [
    { title: "Gen AI Solution", href: "#" },
    { title: "Cloud Solution", href: "#" },
    { title: "Vision AI Solution", href: "#" },
    { title: "Testing Services", href: "#" },
    { title: "Custom Software Development", href: "#" },
    { title: "Data Engineering", href: "#" },
    { title: "IT Consulting", href: "#" },
    { title: "Integration Services", href: "#" },
  ]

  return (
    <section className="px-6 py-12 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-white mb-4">Our Services</h2>
        <p className="text-zinc-400 text-lg mb-12 max-w-2xl">
          Spritle Software transforms businesses by delivering cutting-edge AI solutions, seamless digital experiences,
          and data-driven insights that fuel growth and operational excellence.
        </p>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group border-b-[2px] border-[#E2E2E280] pt-6 pb-2 flex items-center justify-between text-white hover:text-zinc-400 transition-colors"
            >
              <span className="text-xl font-light">{service.title}</span>
              <FaArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
