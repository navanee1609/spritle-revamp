import Image from "next/image"
import zoho from "../../assets/partner/zoho.png"
import freshworks from "../../assets/partner/freshworks.png"
import manageEngine from "../../assets/partner/manageEngine.png"
import shopify from "../../assets/partner/shopify.png"
import zendesk from "../../assets/partner/zendesk.png"
import microsoft from "../../assets/partner/microsoft.png"

export default function PartnersSection() {
  return (
    <section className=" px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-light mb-6">Our Partners</h2>
        <p className="text-gray-400 text-lg max-w-3xl mb-16">
          Sprite Software&apos;s partners are the catalysts driving innovation, empowering businesses to unlock the full
          potential of AI and digital transformation through collaborative expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {/* First Row */}
          <div className="flex items-center justify-center">
            <Image
              src={freshworks}
              alt="Freshworks"
              width={200}
              height={50}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={manageEngine}
              alt="ManageEngine"
              width={200}
              height={50}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={shopify}
              alt="Shopify"
              width={200}
              height={50}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>

          {/* Second Row */}
          <div className="flex items-center justify-center">
            <Image
              src={zendesk}
              alt="Zendesk"
              width={200}
              height={50}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={zoho}
              alt="Zoho"
              width={200}
              height={50}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={microsoft}
              alt="Microsoft"
              width={200}
              height={50}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
