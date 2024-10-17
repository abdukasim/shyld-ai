import Image from "next/image";
import React from "react";
import GradientButton from "../ui/form/gradient-button";

export default function MoreFeatures() {
  return (
    <section className="px-4 sm:px-8 md:px-[108px] pt-16 md:pt-[180px] max-w-full md:max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between h-max">
        <div className="relative w-full md:w-auto mb-8 md:mb-0">
          <div className="relative overflow-hidden rounded-2xl shadow-lg group -scale-x-100">
            <Image
              src="/images/little-child-in-hospital-room.jpeg"
              alt="A little child in a hospital room"
              className="h-[400px] md:h-[600px] object-cover object-left transition-transform duration-300 group-hover:scale-110"
              width={500}
              height={600}
            />
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 h-max">
          <h2 className="title mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl md:w-[495px]">
            Fully Autonomous UV-C Sanitization For All
          </h2>
          <p className="font-medium text-xl md:text-[28px] mb-4 md:mb-6">
            Inactivates Pathogens in Seconds not Minutes
          </p>
          <p className="text-white paragraph mb-6">
            Independently Proven to inactivate micro organisms in 20 seconds
            from 6.5 feet (2m)
          </p>

          <div className="mt-6 flex">
            <GradientButton>Learn More</GradientButton>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-[51px] mt-16 md:mt-[180px]">
        <div className="flex flex-col gap-8 md:gap-[58px] max-w-full md:max-w-[500px]">
          {[
            {
              title: "AI-enabled targeted sanitization",
              description:
                "Intelligent sensors identify need surfaces the direct UV LED's to sanitize those -and avoid others.",
            },
            {
              title: "Turns over rooms in 5 minutes or less",
              description:
                "In-the-flow sanitization throughout the day-such as between surgeries or bathroom users ...",
            },
            {
              title: "Labor-efficient UV sanitization",
              description:
                "Remote operation eliminates manual transport, positioning and movement-saving time and money",
            },
            {
              title: "Safe for surfaces and equipment",
              description:
                "Precision UV LED Beam hits only where targeted, avoiding UV-C exposure on sensitive surfaces and materials.",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-3 md:gap-5">
              <h2 className="font-medium text-2xl md:text-[28px] md:w-[495px]">
                {item.title}
              </h2>
              <p className="text-white text-lg md:text-xl font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 space-y-4 md:space-y-5">
          <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 md:gap-5">
            <ImageWithOverlay
              src="/images/empty-hospital-ward.jpeg"
              alt="An empty hospital ward"
              className="md:basis-[54%]"
            />
            <ImageWithOverlay
              src="/images/male-patient-talking-with-nurse.jpeg"
              alt="A male patient talking with a nurse"
              className="md:basis-[46%]"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 md:gap-5">
            <ImageWithOverlay
              src="/images/human-with-robot-hand.jpeg"
              alt="A human with a robot hand"
              className="md:basis-[46%]"
            />
            <ImageWithOverlay
              src="/images/doctor-pressing-virtual-app.jpeg"
              alt="A doctor pressing a virtual app"
              className="md:basis-[54%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageWithOverlay({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <div
      className={`relative w-full h-[250px] md:h-[304px] overflow-hidden rounded-2xl shadow-lg group -scale-x-100 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
        fill
      />
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
    </div>
  );
}
