"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Slider() {
  const solutions = [
    {
      title: "Surface Sanitization",
      description:
        "Our AI agents can detect and sanitize surfaces in real-time, ensuring a clean and safe environment for patients and staff.",
      image: "/images/surface-sanitization.png",
    },
    {
      title: "Air Sanitization",
      description:
        "Our AI agents can detect and sanitize surfaces in real-time, ensuring a clean and safe environment for patients and staff.",
      image: "/images/surface-sanitization.png",
    },
    {
      title: "Personnel Training & Compliance",
      description:
        "Our AI agents can detect and sanitize surfaces in real-time, ensuring a clean and safe environment for patients and staff.",
      image: "/images/surface-sanitization.png",
    },
    {
      title: "Asset Tracking",
      description:
        "Our AI agents can detect and sanitize surfaces in real-time, ensuring a clean and safe environment for patients and staff.",
      image: "/images/surface-sanitization.png",
    },
    {
      title: "Patient Monitoring",
      description:
        "Our AI agents can detect and sanitize surfaces in real-time, ensuring a clean and safe environment for patients and staff.",
      image: "/images/surface-sanitization.png",
    },
  ];
  const [currentSolution, setCurrentSolution] = useState(0);

  return (
    <div className="w-full space-y-8 md:space-y-16 mb-8 md:mb-[205px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 overflow-x-auto md:overflow-x-visible">
        {solutions.map((solution, index) => (
          <button
            key={index}
            className={`p-3 rounded-full text-lg md:text-2xl whitespace-nowrap ${
              index === currentSolution
                ? "bg-gradient-to-r from-[#00FCFF] to-[#24689B] text-black"
                : "bg-transparent text-white"
            }`}
            onClick={() => setCurrentSolution(index)}
          >
            {solution.title}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-[1016px] mx-auto h-[300px] md:h-[566px] overflow-hidden">
        <Image
          src={solutions[currentSolution].image}
          alt={solutions[currentSolution].title}
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}
