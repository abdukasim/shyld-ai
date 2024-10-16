"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const carouselItems = [
  {
    src: "/images/female-doctor.jpeg",
    alt: "Female doctor",
    caption: "Identifies contaminated surfaces in a room",
  },
  {
    src: "/images/finger-pressing-heart.jpeg",
    alt: "Finger pressing virtual heart see graph",
    caption:
      "Automatically sanitizes targeted surfaces using a precision UV-C beam",
  },
  {
    src: "/images/close-up-analysis.jpeg",
    alt: "Close up analysis by scientist on a tablet",
    caption:
      "Supports future compliance by creating a heat map of room surfaces and real-time data on UV dosage, room occupation and cleaning performance",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => setTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  const changeSlide = (index: number) => {
    setTransitioning(true);
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden rounded-3xl shadow-lg w-full">
        <div className="absolute w-full h-[510px] bg-black bg-opacity-50 z-10"></div>
        <div className="relative w-full h-[510px]">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-300 ${
                index === activeIndex
                  ? transitioning
                    ? "opacity-0"
                    : "opacity-100"
                  : "opacity-0"
              }`}
            >
              <Image src={item.src} alt={item.alt} fill objectFit="cover" />
            </div>
          ))}
          <div className="absolute bottom-0 left-0 right-0 text-white p-8 z-20">
            <p className="text-center paragraph">
              {carouselItems[activeIndex].caption}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-6">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full`}
            style={{
              background:
                index === activeIndex
                  ? "linear-gradient(135deg, #00FCFF 0%, #24689B 100%)"
                  : "linear-gradient(135deg, rgba(0, 252, 255, 0.2) 0%, rgba(36, 104, 155, 0.2) 100%)",
            }}
            onClick={() => changeSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
