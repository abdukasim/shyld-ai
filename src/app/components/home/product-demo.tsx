/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import ProductDemoMobile from "./product-demo-mobile";

const features = [
  {
    name: "Radar",
    x: 20,
    y: 22,
    line: "/svg/radar-line.svg",
    name_x: -14,
    name_y: -4,
  },
  {
    name: "Microphone",
    x: 20,
    y: 35,
    line: "/svg/microphone-line.svg",
    name_x: -14,
    name_y: 4,
  },
  {
    name: "3D Lidar Scanner",
    x: 20.5,
    y: 42,
    line: "/svg/lidar-line.svg",
    name_x: -14,
    name_y: 20,
  },
  {
    name: "UV-C Beam Emitters",
    x: 21,
    y: 48,
    line: "/svg/beam-line.svg",
    name_x: -14,
    name_y: 38,
  },
  {
    name: "20x Camera",
    x: 50.5,
    y: 53,
    line: "/svg/camera-line.svg",
    name_x: -6,
    name_y: 32,
  },
  {
    name: "Onboard GPU",
    x: 50,
    y: 25,
    line: "/svg/gpu-line.svg",
    name_x: 31,
    name_y: -5,
  },
  {
    name: "Infrared Camera",
    x: 57.5,
    y: 37,
    line: "/svg/infrared-line.svg",
    name_x: 23.5,
    name_y: 4,
  },
  {
    name: "RGB Camera",
    x: 55,
    y: 37,
    line: "/svg/rgb-camera-line.svg",
    name_x: 26,
    name_y: 29,
  },
  {
    name: "Beam Steering System",
    x: 55,
    y: 50,
    line: "/svg/steering-line.svg",
    name_x: 26,
    name_y: 35,
  },
];

export default function ProductDemo() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <>
      <ProductDemoMobile />
      <div
        ref={ref}
        className="hidden md:block relative w-full h-screen my-[184px] text-white"
      >
        <h2 className="text-[32px] font-bold text-center mb-6">
          Smart Health Care by Design
        </h2>
        <p className="text-center text-xl font-light mb10">
          Continuous, ambient monitoring for real-time clinical care, more
          efficient workflow and cost savings.
        </p>
        <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
          <img
            src="/images/shyld-product-high.png"
            alt="SAYLO Device"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-auto"
          />
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              className="absolute w-full h-full"
              style={{ left: `${feature.x}%`, top: `${feature.y}%` }}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              <div className="relative h-full">
                <motion.div
                  className="absolute bg-[#121212] text-white w-[184px] text-center px-7 z-10 py-3 rounded-full text-xl font-light"
                  style={{
                    left: `${feature.name_x}%`,
                    top: `${feature.name_y}%`,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: { duration: 1.2, ease: "easeOut" },
                    },
                    hidden: {
                      opacity: 0,
                      x: feature.name_x < 0 ? "25vw" : "-25vw",
                    },
                  }}
                >
                  {feature.name}
                </motion.div>
                <motion.img
                  src={feature.line}
                  alt={`${feature.name} line`}
                  className="absolute left-0 w-auto h-auto"
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.5, delay: 1.2 },
                    },
                    hidden: { opacity: 0 },
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
