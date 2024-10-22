"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import GradientButton from "@/app/components/ui/form/gradient-button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  return (
    <nav className="bg-[#121212] text-white p-4 z-50">
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <div className="container mx-auto hidden lg:flex justify-between items-center">
      <Link href="/" className="text-xl font-bold relative w-[132px] h-5">
        <Image src="/svg/shyld-ai-logo.svg" alt="SHYLD" fill />
      </Link>
      <div className="space-x-12 font-light text-xl">
        <Link
          href="/solutions"
          className={`hover:text-gray-300 ${
            pathname === "/solutions" ? "active-link" : ""
          }`}
        >
          Solutions
        </Link>
        <Link
          href="/ai-dashboard"
          className={`hover:text-gray-300 ${
            pathname === "/ai-dashboard" ? "active-link" : ""
          }`}
        >
          AI Dashboard
        </Link>
        <Link
          href="/news"
          className={`hover:text-gray-300 ${
            pathname === "/news" ? "active-link" : ""
          }`}
        >
          News
        </Link>
        <div className="relative inline-block group">
          <span className="hover:text-gray-300 cursor-pointer">Company</span>
          <div className="absolute hidden group-hover:block bg-[#121212] pl-4 pr-8 py-4 rounded-md z-50">
            <Link href="/about" className="block hover:text-gray-300 py-1">
              About
            </Link>
            <Link href="/news" className="block hover:text-gray-300 py-1">
              News
            </Link>
            <Link href="/partners" className="block hover:text-gray-300 py-1">
              Partners
            </Link>
            <Link href="/careers" className="block hover:text-gray-300 py-1">
              Careers
            </Link>
          </div>
        </div>
      </div>
      <GradientButton href="/contact" isLink={true}>
        <span className="text-black">Contact Us</span>
      </GradientButton>
    </div>
  );
};

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="container mx-auto flex flex-wrap justify-between items-center lg:hidden">
      <Link href="/" className="text-xl font-bold relative w-[132px] h-5">
        <Image src="/svg/shyld-ai-logo.svg" alt="SHYLD" fill />
      </Link>
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {/* ... SVG code ... */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#121212] bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#121212] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-start font-light text-xl p-8 mt-12">
          <Link
            href="/solutions"
            className={`hover:text-gray-300 mb-4 ${
              pathname === "/solutions" ? "active-link" : ""
            }`}
          >
            Solutions
          </Link>
          <Link
            href="/ai-dashboard"
            className={`hover:text-gray-300 mb-4 ${
              pathname === "/ai-dashboard" ? "active-link" : ""
            }`}
          >
            AI Dashboard
          </Link>
          <Link
            href="/news"
            className={`hover:text-gray-300 mb-4 ${
              pathname === "/news" ? "active-link" : ""
            }`}
          >
            News
          </Link>
          <div className="mb-4">
            <span className="hover:text-gray-300 cursor-pointer">Company</span>
            <div className="ml-4 mt-2">
              <Link href="/about" className="block hover:text-gray-300 mb-2">
                About
              </Link>
              <Link href="/news" className="block hover:text-gray-300 mb-2">
                News
              </Link>
              <Link href="/partners" className="block hover:text-gray-300 mb-2">
                Partners
              </Link>
              <Link href="/careers" className="block hover:text-gray-300 mb-2">
                Careers
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <GradientButton href="/contact" isLink={true}>
              <span className="text-black">Contact Us</span>
            </GradientButton>
          </div>
        </div>
      </div>

      {/* <div
        className={`${isMenuOpen ? "block" : "hidden"} lg:hidden w-full mt-4`}
      >
        <div className="flex flex-col items-start font-light text-xl">
          <Link href="/product" className="hover:text-gray-300 mb-2">
            Product
          </Link>
          <Link href="/ai-platform" className="hover:text-gray-300 mb-2">
            AI Platform
          </Link>
          <Link href="/news" className="hover:text-gray-300 mb-2">
            News
          </Link>
          <Link href="/about" className="hover:text-gray-300 mb-2">
            About
          </Link>
        </div>
        <div className="mt-4">
          <GradientButton href="/contact" isLink={true}>
            <span className="text-black">Contact Us</span>
          </GradientButton>
        </div>
      </div> */}
    </div>
  );
};
export default Navbar;
