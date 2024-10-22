import React from "react";
import Image from "next/image";
import GradientButton from "../ui/form/gradient-button";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 py-8 md:px-0 md:py-0">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          // src={homeHero}
          src="/images/Hero_shot.png"
          alt="Hero"
          fill
          objectFit="cover"
          className="blur-[4px] scale-100"
        />
      </div>
      <div className="absolute inset-0 bg-[#0c0c20] opacity-[0.67] z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center">
        <Image
          // src={productImage}
          src="/images/shyld-product-high.png"
          alt="logo"
          width={385}
          height={403}
          className="w-full max-w-[300px] md:max-w-[385px] h-auto"
        />
        <div className="space-y-6 mt-6">
          <h1 className="text-2xl md:text-[32px] font-bold text-center">
            Powering Healthcare Intelligently
          </h1>
          <p className="text-lg md:text-2xl w-full md:w-[500px] text-center">
            Shyld AI integrates real-time data for real-time treatment and care.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto h-max">
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
