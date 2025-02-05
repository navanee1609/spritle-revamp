import { Star } from "lucide-react"
import { FaStarHalfAlt } from "react-icons/fa"
import Image, { StaticImageData } from "next/image"

interface TestimonialCardProps {
  name: string
  rating: number
  text: string
  imageSrc: string | StaticImageData
}

export function TestimonialCard({ name, rating, text, imageSrc }: TestimonialCardProps) {
  // Render filled stars, half stars, and empty stars
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const halfStar = rating - fullStars >= 0.5

    // Render 3 fully filled stars (fixed to 3)
    for (let i = 0; i < 3; i++) {
      stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)
    }

    // Render 1 half star if needed
    if (halfStar) {
      stars.push(<FaStarHalfAlt key={3} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)
    }

    // Render 1 empty star with border
    stars.push(<Star key={4} className="w-5 h-5 fill-transparent text-yellow-400" />)

    return stars
  }

  return (
    <div className="rounded-lg border border-white p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        {/* Left side: Image */}
        <Image src={imageSrc} alt={name} width={48} height={48} className="rounded-none" />

        {/* Right side: Stars */}
        <div className="flex gap-1">{renderStars()}</div>
      </div>

      {/* Name below the image and stars */}
      <h3 className="text-white text-lg font-medium mb-2">{name}</h3>

      {/* Testimonial text */}
      <p className="text-gray-400 line-clamp-4 flex-grow">{text}</p>
    </div>
  )
}
