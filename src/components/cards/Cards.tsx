"use client";

import Image from "next/image";

// Import logos
import nestle from "../../assets/brand/nestle.png";
import hyundai from "../../assets/brand/hyundai.png";
import st from "../../assets/brand/st.png";
import panasonic from "../../assets/cards/panasonic.png";
import cii from "../../assets/cards/cii.png";
import stanford from "../../assets/brand/stanford.png";
import enterprise from "../../assets/cards/enterprise.png";
import startup from "../../assets/cards/startup.png";
import growth from "../../assets/cards/growth.png";
import pinnacle from "../../assets/cards/pinnacle.png";
import newlogo from "../../assets/cards/newlogo.png";
import tree from "../../assets/cards/tree.png";
import innerkraft from "../../assets/cards/innerkraft.png";
import go from "../../assets/cards/go.png";
import haleon from "../../assets/cards/haleon.png";

const Cards = () => {
  return (
    <div className="py-16 px-4 rounded-lg">
      {/* Container with responsive max-width */}
      <div className=" bg-[#101010] container mx-auto max-w-full lg:max-w-[90%] md:max-w-[85%] sm:max-w-[95%] rounded-md p-8">
        <div className="space-y-12">
          {/* First Card */}
          <div className="bg-[#101010] rounded-lg p-6 shadow-lg sticky top-24 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* First Column */}
              <div className="flex flex-col gap-6">
                <h2 className="text-white text-2xl font-bold">Enterprise-Level Tech, Made Simple:</h2>
                <p className="text-white text-md">
                  Efficiently managing a large team demands a solid technological foundation. Our services offer robust, secure, and user-friendly solutions tailored to your needs. Picture a team of over 150 members, seamlessly collaborating with the aid of precisely crafted tools. This is the vision of future work that we're adept at bringing to fruition for enterprises.
                </p>
                <p className="text-white text-md">
                  Large enterprise businesses that became our clients:
                </p>

                {/* Logos - 6 logos in one row */}
                <div className="flex gap-6 justify-start">
                  {[nestle, hyundai, st, panasonic, stanford, cii].map((logo, index) => (
                    <div key={index} className="bg-white p-2 rounded-lg flex justify-center items-center">
                      <Image src={logo} alt={`Logo ${index + 1}`} width={50} height={50} className="object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Column (Image) */}
              <div className="flex justify-center items-center">
                <div className="overflow-hidden">
                  <Image src={enterprise} alt="Example Image" width={400} height={250} className="object-cover  rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-[#101010] rounded-lg p-6 shadow-lg sticky top-48 z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* First Column */}
              <div className="flex flex-col gap-6">
                <h2 className="text-white text-2xl font-bold">Transitioning from <span style={{color:"#15AED5"}}>startup to scaleup?</span> </h2>
                <p className="text-white text-md">
                Embrace growth with our flexible tech solutions tailored for mid-level companies. Stay agile as your business evolves, empowered by our support every step of the way, so you can focus on what truly matters—achieving your goals
                </p>
                <p className="text-white text-md">
                  Up-and-coming companies we partnered with early on:
                </p>

                {/* Logos - 4 logos in one row */}
                <div className="flex gap-6 justify-start">
                  {[newlogo, pinnacle].map((logo, index) => (
                    <div key={index} className="bg-white p-2 rounded-lg flex justify-center items-center">
                      <Image src={logo} alt={`Logo ${index + 1}`} width={50} height={50} className="object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Column (Image) */}
              <div className="flex justify-center items-center">
                <div className="overflow-hidden">
                  <Image src={startup} alt="Example Image" width={400} height={250} className="object-cover  rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-[#101010] rounded-lg p-6 shadow-lg sticky top-72 z-30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* First Column */}
              <div className="flex flex-col gap-6">
                <h2 className="text-white text-2xl font-bold">Thinking about <span style={{color:"#15AED5"}}>launching a startup?</span></h2>
                <p className="text-white text-md">
                Are you a startup grappling with managing both your creative concepts and technical infrastructure? We understand the struggle. Our user-friendly solutions are designed to adapt as your startup expands. Focus on your passion while we handle the tech, accelerating your journey to realizing your dreams. 
                </p>
                <p className="text-white text-md">
Young companies we partnered with
                  
                </p>

                {/* Logos - 6 logos in one row */}
                <div className="flex gap-6 justify-start">
                  {[tree, go, innerkraft, haleon].map((logo, index) => (
                    <div key={index} className="bg-white p-2 rounded-lg flex justify-center items-center">
                      <Image src={logo} alt={`Logo ${index + 1}`} width={50} height={50} className="object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Column (Image) */}
              <div className="flex justify-center items-center">
                <div className="overflow-hidden">
                  <Image src={growth} alt="Example Image" width={400} height={250} className="object-cover  rounded-lg" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cards;
