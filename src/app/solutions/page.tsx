import React from "react";
import Slider from "@/app/components/solutions/slider";

export default function Solutions() {
  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-[108px] max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center justify-center text-center max-w-[600px] w-full mx-auto mt-10 sm:mt-20 gap-4 sm:gap-8 mb-16 sm:mb-32">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-[32px]">
          Building Smart Healthcare Facilities of Tomorrow
        </h1>
        <p className="font-light text-sm sm:text-base md:text-2xl">
          Shyld AI Agents turn real-time data into real-time patient care and
          environmental treatment
        </p>
      </div>

      <Slider />
    </div>
  );
}
