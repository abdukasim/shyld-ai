import React from "react";
import GradientButton from "@/app/components/ui/form/gradient-button";
import Image from "next/image";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "LinkedIn",
      icon: "/svg/linkedin-black.svg",
      href: "#",
    },
    {
      name: "Email",
      icon: "/svg/mail-black.svg",
      href: "#",
    },
    {
      name: "Phone",
      icon: "/svg/phone-black.svg",
      href: "#",
    },
    {
      name: "WhatsApp",
      icon: "/svg/whatsapp-black.svg",
      href: "#",
    },
  ];
  return (
    <footer className="bg-[#121212] text-white">
      <div className="container flex justify-between items-start py-24 mx-auto">
        {/* Logo and description */}
        <div className="w-max space-y-12">
          <div className="w-full max-w-md">
            <Image
              src="/svg/shyld-ai-logo.svg"
              alt="SHYLD"
              width={132}
              height={20}
            />
            <p className="mt-6 text-xl font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>

          {/* Social Media */}
          <div className="w-full ">
            <h3 className="text-3xl font-medium mb-6">Social Media</h3>
            <div className="flex space-x-4">
              {socialMediaLinks.map((icon, index) => (
                <GradientButton key={index} circular isLink href={icon.href}>
                  <Image
                    src={icon.icon}
                    alt={icon.name}
                    width={20}
                    height={20}
                  />
                </GradientButton>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-3xl font-medium mb-8">Links</h3>
          <ul className="space-y-6">
            {["Product", "AI Platform", "News", "About"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-xl font-light hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/4">
          <h3 className="text-[32px] font-bold mb-8">
            Subscribe to our newsletter
          </h3>
          <form className="w-full">
            <div className="relative w-full h-[60px]">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow w-full bg-black rounded-full px-3 py-4 focus:outline-none"
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 h-max w-max rounded-full text-white text-base"
                style={{
                  background:
                    "linear-gradient(135deg, #00FCFF 0%, #24689B 100%)",
                }}
              >
                Getting started
              </button>
            </div>
          </form>
          <p className="mt-2 text-base text-white">
            I agree to receive Shyld AI newsletters
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-base py-3 text-white bg-black">
        Copyright © {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
