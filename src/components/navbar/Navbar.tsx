"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/spritle.png"; // Importing the logo properly

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-white p-4 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src={logo} alt="Spritle Logo" width={100} height={28} priority />
          </Link>
        </div>

        {/* Desktop Menu (Visible only on lg and above) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/ai-solutions" className="hover:text-accent">AI Solutions</Link>
          <Link href="/services" className="hover:text-accent">Services</Link>
          <Link href="/industries" className="hover:text-accent">Industries</Link>
          <Link href="/works" className="hover:text-accent">Works</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/blogs" className="hover:text-accent">Blogs</Link>
          <Link href="/career" className="hover:text-accent">Career</Link>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="bg-accent text-white py-2 px-4 rounded-full hover:bg-opacity-80"
          >
            Contact us
          </Link>
        </div>

        {/* Hamburger Icon for Mobile & Tablet (md & below) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <HiMenu size={30} />
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu (Off-canvas) */}
      <div className={`fixed inset-0 z-40 flex transition-all duration-300 ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
        {/* Overlay (behind menu only) */}
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300" onClick={toggleMenu}></div>

        {/* Mobile & Tablet Menu */}
        <div className={`bg-white p-6 w-4/5 h-full flex flex-col space-y-6 z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          {/* Close Icon and Logo Row */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <Link href="/">
                <Image src={logo} alt="Spritle Logo" width={120} height={32} priority />
              </Link>
            </div>

            {/* Close Icon */}
            <button onClick={toggleMenu} className="text-black">
              <HiX size={30} />
            </button>
          </div>

          {/* Mobile & Tablet Links */}
          {[
            "AI Solutions",
            "Services",
            "Industries",
            "Works",
            "About",
            "Blogs",
            "Career",
          ].map((text, index) => (
            <Link key={index} href={`/${text.toLowerCase().replace(/\s+/g, "-")}`} className="text-black text-lg" onClick={toggleMenu}>
              {text}
            </Link>
          ))}

          {/* Mobile & Tablet Contact Button */}
          <Link
            href="/contact"
            className="text-white bg-accent py-2 rounded-full w-52 mt-4 text-center justify-start items-start"
            onClick={toggleMenu}
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
