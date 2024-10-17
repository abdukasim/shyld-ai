import Image from "next/image";
import React from "react";
import GradientButton from "../ui/form/gradient-button";

export default function MoreFeatures() {
  return (
    <section className="px-[108px] pt-[180px] max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between h-max">
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-lg group -scale-x-100">
            <Image
              src="/images/little-child-in-hospital-room.jpeg"
              alt="A little child in a hospital room"
              className="h-[600px] object-cover object-left transition-transform duration-300 group-hover:scale-110"
              width={500}
              height={600}
            />
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 h-max">
          <h2 className="title mb-6 w-[495px]">
            Fully Autonomous UV-C Sanitization For All
          </h2>
          <p className="font-medium text-[28px] mb-6">
            Inactivates Pathogens in Seconds not Minutes
          </p>
          <p className="text-white paragraph mb-">
            Independently Proven to inactivate micro organisms in 20 seconds
            from 6.5 feet (2m)
          </p>

          <div className="mt-6 flex">
            <GradientButton>Learn More</GradientButton>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-[51px] mt-[180px]">
        <div className="flex flex-col gap-[58px] max-w-[500px]">
          <div className="flex flex-col gap-5">
            <h2 className="font-medium text-[28px]  w-[495px]">
              AI-enabled targeted sanitization{" "}
            </h2>
            <p className="text-white text-xl font-light">
              Intelligent sensors identify need surfaces the direct UV LED’s to
              sanitize those -and avoid others.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-medium text-[28px]  w-[495px]">
              Turns over rooms in 5 minutes or less{" "}
            </h2>
            <p className="text-white text-xl font-light">
              In-the-flow sanitization throughout the day-such as between
              surgeries or bathroom users ...
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-medium text-[28px]  w-[495px]">
              Labor-efficient UV sanitization
            </h2>
            <p className="text-white text-xl font-light">
              Remote operation eliminates manual transport, positioning and
              movement-saving time and money
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-medium text-[28px]  w-[495px]">
              Safe for surfaces and equipment
            </h2>
            <p className="text-white text-xl font-light">
              Precision UV LED Beam hits only where targeted, avoiding UV-C
              exposure on sensitive surfaces and materials.
            </p>
          </div>
        </div>

        <div className="w-full space-y-5">
          <div className="flex item-center w-full justify-between gap-5">
            <div className="basis-[54%] relative w-full h-[304px] overflow-hidden rounded-2xl shadow-lg group -scale-x-100">
              <Image
                src="/images/empty-hospital-ward.jpeg"
                alt="An empty hospital ward"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                fill
              />
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>
            <div className="basis-[46%] relative w-full h-[304px] overflow-hidden rounded-2xl shadow-lg group -scale-x-100">
              <Image
                src="/images/male-patient-talking-with-nurse.jpeg"
                alt="A male patient talking with a nurse"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                fill
              />
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>
          </div>
          <div className="flex item-center w-full justify-between gap-5">
            <div className="basis-[46%] relative w-full h-[304px] overflow-hidden rounded-2xl shadow-lg group -scale-x-100">
              <Image
                src="/images/human-with-robot-hand.jpeg"
                alt="A human with a robot hand"
                className="object-cover object-left transition-transform duration-300 group-hover:scale-110"
                fill
              />
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>
            <div className="basis-[54%] relative w-full h-[304px] overflow-hidden rounded-2xl shadow-lg group -scale-x-100">
              <Image
                src="/images/doctor-pressing-virtual-app.jpeg"
                alt="A doctor pressing a virtual app"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                fill
              />
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
