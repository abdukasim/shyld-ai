"use client";
import Image from "next/image";
import { useState, useEffect, useRef, TouchEvent } from "react";

const carouselItems = [
  {
    src: "/images/How_it_works_1_upscaled.png",
    alt: "Identifies contaminated surfaces in a room",
  },
  {
    src: "/images/How_it_works_2_upscaled.png",
    alt: "Automatically sanitizes targeted surfaces using a precision UV-C beam",
  },
  {
    src: "/images/How_it_works_3_upscaled.png",
    alt: "Supports future compliance by creating a heat map of room surfaces and real-time data on UV dosage, room occupation and cleaning performance",
  },
  {
    src: "/images/How_it_works_4_upscaled.png",
    alt: "Supports future compliance by creating a heat map of room surfaces and real-time data on UV dosage, room occupation and cleaning performance",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => setTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  const changeSlide = (index: number) => {
    setTransitioning(true);
    setActiveIndex(() => {
      if (index < 0) return carouselItems.length - 1;
      if (index >= carouselItems.length) return 0;
      return index;
    });
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      // Minimum swipe distance
      if (diff > 0) {
        // Swipe left, go to next slide
        changeSlide(activeIndex + 1);
      } else {
        // Swipe right, go to previous slide
        changeSlide(activeIndex - 1);
      }
    }

    touchStartX.current = null;
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative w-full">
        <div
          className="overflow-hidden rounded-3xl shadow-lg w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute w-full h-full bg-black bg-opacity-50 z-10"></div>
          <div className="relative w-full h-[510px] sm:h-[400px] md:h-[450px] lg:h-[510px]">
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
            <div className="absolute bottom-0 left-0 right-0 text-white p-4 sm:p-6 md:p-8 z-20">
              <p className="text-center paragraph text-sm sm:text-base md:text-lg">
                {carouselItems[activeIndex].alt}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full`}
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
