import React from "react";
import Slider from "@/app/components/solutions/slider";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligent Healthcare Solutions | Shyld AI",
  description:
    "Discover Shyld AI's intelligent monitoring solutions for enhanced patient care, operational efficiency, and improved financial outcomes in healthcare settings.",
  keywords: [
    "healthcare AI",
    "patient monitoring",
    "intelligent healthcare",
    "Shyld AI",
    "clinical outcomes",
  ],
  openGraph: {
    title: "Intelligent Healthcare Solutions | Shyld AI",
    description:
      "Enhance patient care with Shyld AI's continuous, ambient monitoring solutions for healthcare settings.",
    images: [
      {
        url: "/images/shyld-ai-solutions-og.jpg",
        width: 1200,
        height: 630,
        alt: "Shyld AI Healthcare Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelligent Healthcare Solutions | Shyld AI",
    description:
      "Enhance patient care with Shyld AI's continuous, ambient monitoring solutions for healthcare settings.",
    images: ["/images/shyld-ai-solutions-twitter.jpg"],
  },
};

export default function Solutions() {
  return (
    <div className="relative min-h-screen px-4 sm:px-8 md:px-16 lg:px-[108px] max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center justify-center text-center max-w-[600px] w-full mx-auto mt-10 sm:mt-20 gap-4 sm:gap-8 mb-16 sm:mb-32">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-[32px]">
          Intelligent Monitoring for Enhanced Care
        </h1>
        <p className="font-light text-sm sm:text-base md:text-2xl">
          Shyld AI Agents deliver continuous, ambient monitor to enhanced
          clinical, operational and financial outcomes in Healtthcare settings.
        </p>
      </div>

      <Slider />

      <div className="absolute top-[241px] left-[74px] w-[234px] h-[234px] bg-gradient-to-r from-[#00FCFF] to-[#24689B] rounded-full blur-[500px] -z-10"></div>
      <div className="absolute top-[241px] right-0 w-[234px] h-[234px] bg-gradient-to-r from-[#00FCFF] to-[#24689B] rounded-full blur-[500px] -z-10"></div>
    </div>
  );
}
