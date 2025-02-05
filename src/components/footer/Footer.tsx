"use client";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/spritle.png";

const quickLinks = [
  { name: "Web Application Development", href: "/web-application-development" },
  { name: "Mobile Application Development", href: "/mobile-application-development" },
  { name: "AI Development Services", href: "/ai-development-services" },
  { name: "Software Testing Services", href: "/software-testing-services" },
  { name: "Saasly.in", href: "https://saasly.in", external: true },
  { name: "healthengr.io", href: "https://healthengr.io", external: true },
  { name: "SeeWise.ai", href: "https://seewise.ai", external: true }
];

const additionalLinks = [
  { name: "Enterprise Service Management", href: "/enterprise-service-management" },
  { name: "Integrated Building Management", href: "/integrated-building-management" },
  { name: "Smart Facility Management", href: "/smart-facility-management" },
  { name: "ITSM Services", href: "/itsm-services" },
  { name: "Mobile Device Management", href: "/mobile-device-management" }
];

const locations = [
  { location: "Ohio, USA", phone: "+1 614 664 7677" },
  { location: "Tower A Vertex, Singapore 408868", phone: "+65 6652 5475" },
  { location: "Chennai, India", phone: "+91 44 4784 3003" }
];

const socialIcons = [
  { icon: FaLinkedin, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaYoutube, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaFacebook, href: "#" }
];

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Column 1: Logo, Description, Social Icons */}
        <div className="lg:col-span-2">
          <Link href="/">
            <Image src={logo} alt="Spritle Logo" width={100} height={28} priority />
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            An interdisciplinary team of coders, analysts, and user experience specialists dedicated to building 
            enterprise applications and premium digital products that bring your ideas to life, delight your users, 
            and help you achieve your goals.
          </p>
          <div className="flex space-x-3 mt-4">
            {socialIcons.map(({ icon: Icon, href }, index) => (
              <a key={index} href={href} className="bg-white p-2 rounded-sm">
                <Icon className="text-[#0B163F]" size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map(({ name, href, external }, index) => (
              <li key={index}>
                {external ? (
                  <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
                ) : (
                  <Link href={href}>{name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Additional Links */}
        <div>
          <ul className="mt-10 space-y-2">
            {additionalLinks.map(({ name, href }, index) => (
              <li key={index}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Locations */}
        <div>
          <h3 className="text-lg font-semibold">Locations</h3>
          <div className="mt-4 space-y-4"> {/* Added spacing between locations */}
            {/* Email */}
            <div className="flex items-center space-x-2">
              <HiOutlineMail size={24} />
              <span>info@spritle.com</span>
            </div>
            {/* Locations */}
            {locations.map(({ location, phone }, index) => (
              <div key={index} className="flex flex-col space-y-2">
                {/* Location */}
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt size={18} />
                  <span>{location}</span>
                </div>
                {/* Phone (Clickable) */}
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt size={18} />
                  <a href={`tel:${phone.replace(/\s+/g, "")}`}>
                    {phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Horizontal Line with #F8F9FA0D Color */}
      <div className="border-t border-[#F8F9FA0D] my-6"></div>

      {/* Copyright and Links */}
      <div className="text-center text-sm text-[#F8F9FA] py-4">
        <div className="flex justify-center items-center space-x-2 flex-wrap">
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
          <span>&</span>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span>© 2024 Spritle Software. All Rights Reserved.</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
