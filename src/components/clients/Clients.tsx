"use client";

import Image from "next/image";

// Import client logos (adjust the path as per your project)
import nestle from "../../assets/brand/nestle.png";
import stanford from "../../assets/brand/stanford.png";
import hyundai from "../../assets/brand/hyundai.png";
import panasonic from "../../assets/brand/panasonic.png";
import lanson from "../../assets/brand/lansen.png";
import st from "../../assets/brand/st.png";
import motorola from "../../assets/brand/motorola.png";
import un from "../../assets/brand/un.png";
import royal_enfield from "../../assets/brand/royal_enfield.png";
import changi from "../../assets/brand/changi.png";
import livingmatrix from "../../assets/brand/livingmatrix.png";
import reach from "../../assets/brand/reach.png";
import innerkraft from "../../assets/brand/Innerkraft.png";
import moddo from "../../assets/brand/moddo.png";
import share from "../../assets/brand/share.png";
import nanny from "../../assets/brand/nanny.png";

const clientLogos = [
  nestle, stanford, hyundai, panasonic,
  lanson, st, motorola, un,
  royal_enfield, changi, livingmatrix, reach,
  innerkraft, moddo, share, nanny
];

const Clients = () => {
  return (
    <div className="bg-gradient-to-b from-[#202020]/40 via-[#000000]/28 to-[#171717]/40 py-16">
      <div className="relative w-full mx-auto my-12 max-w-[95%]">
        {/* Heading & Description - Aligned to Start */}
        <div className="text-start text-white mb-12 px-4">
          <h2 className="text-3xl font-bold">Our Clients</h2>
          <p className="text-white mt-2 text-lg">
            Transform your business with generative AI
          </p>
        </div>

        {/* Logo Grid - Using Mapping */}
        <div className="container mx-auto px-4" style={{ maxWidth: "95%" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  width={100}  
                  height={35}  
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
