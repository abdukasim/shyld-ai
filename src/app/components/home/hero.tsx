import React from "react";
import Image from "next/image";
import homeHero from "../../../public/images/home-hero.jpeg";
import productImage from "../../../public/images/shyld-product-high.png";
import GradientButton from "../ui/gradient-button";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[90vh]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={homeHero}
          alt="Hero"
          fill
          objectFit="cover"
          className="blur-[4px] scale-100"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-[0.67] z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center">
        <Image
          src={productImage}
          alt="logo"
          width={385}
          height={403}
          //   className="backdrop-filter backdrop-blur-xl"
        />
        <div className="space-y-6">
          <h1 className="text-[32px] font-bold text-center">
            Powering Health care Intelligently
          </h1>
          <p className="text-2xl w-[500px] text-center">
            Shyld AI integrates real-time data for real-time treatment and care.
          </p>
          <div className="flex items-center justify-center gap-4">
            <GradientButton textColor="white" outlined>
              Learn More
            </GradientButton>
            <GradientButton>Request a Demo</GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
}