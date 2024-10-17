import Image from "next/image";
import React from "react";
import GradientButton from "../components/ui/form/gradient-button";

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-8 lg:px-[108px] max-w-[1440px] mx-auto mt-16 sm:mt-[120px] mb-16 sm:mb-[214px]">
        <div className="flex flex-col lg:flex-row gap-6 items-start mb-16 lg:mb-[150px]">
          <div className="flex flex-col gap-5 max-w-full lg:max-w-[704px]">
            <h1 className="text-2xl sm:text-[32px] font-bold">Zero</h1>

            <div className="space-y-4">
              <p className="text-xl font-light">
                We believe no human should get sicker while in a Healthcare
                facility and that even one Healthcare-associated Infection is
                too many. Zero is not just a concept, slogan or an abstract
                idea, we believe in this reality and that advanced intelligent
                technology for enhanced care and treatment will help us get
                there.
              </p>
              <p className="text-xl font-light">
                We believe all Healthcare professionals deserve smarter products
                and technology that support them, streamline instead of increase
                their workload, foster training and development and, above all,
                help them do their brave, selfless work easier, faster and more
                safely.
              </p>
              <p className="text-xl font-light">
                We believe all Healthcare facilities - of different types,
                sizes, budgets and locations around the world - should have the
                same access to advanced products and technologies that keep
                patients, employees and visitors safe.
              </p>
              <p className="text-xl font-light">
                We believe in clean, sustainable solutions that do not introduce
                more caustic chemicals, such as Mercury, to one of the most
                sensitive environments on our planet, that of patient care.
              </p>
              <p className="text-xl font-light">
                We hope you will join us. We are stronger together and it will
                take all of us to get to Zero.
              </p>
            </div>
          </div>
          <div className="relative w-full h-[300px] sm:h-[400px] lg:w-[496px] lg:h-[564px] rounded-[36px] overflow-hidden group mt-8 lg:mt-0">
            <Image
              src="/images/medic-pointing-at-tablet.jpeg"
              alt="Medic pointing at tablet"
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
        </div>

        <div className="space-y-12 sm:space-y-16 mb-16 sm:mb-[150px]">
          <h2 className="text-2xl sm:text-[32px] font-bold text-center">
            Company Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mohammed Noshad",
                title: "Co-founder and CEO",
                image: "/images/mohammed-noshad.png",
              },
              {
                name: "Morteza Noshad",
                title: "Co-founder and CTO",
                image: "/images/morteza-noshad.jpeg",
              },
              {
                name: "Will Gerard",
                title: "Chief Marketing Officer",
                image: "/images/will-gerard.jpeg",
              },
            ].map((leader, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-3xl bg-[#121212] py-12"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mb-14">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={160}
                    height={160}
                    className="object-cover object-center grayscale"
                  />
                </div>
                <div className="space-y-6 flex flex-col items-center">
                  <h3 className="text-xl font-semibold">{leader.name}</h3>
                  <p className="text-lg font-light">{leader.title}</p>
                  <GradientButton>
                    <span>View Bio</span>
                  </GradientButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12 sm:space-y-16">
          <h2 className="text-2xl sm:text-[32px] font-bold text-center">
            Company Scientific Advisory Board
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Elias Shaheen, PhD, MBA",
                title: "Lead Clinical Advisor",
                image: "/images/elias-shaheen.png",
              },
              {
                name: "John Swartzberg, MD, FACP",
                title: "Clinical Advisor",
                image: "/images/john-swartzberg.jpg",
              },
            ].map((leader, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-3xl bg-[#121212] py-12"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mb-14">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={160}
                    height={160}
                    className="object-cover object-center"
                  />
                </div>
                <div className="space-y-6 flex flex-col items-center">
                  <h3 className="text-xl font-semibold">{leader.name}</h3>
                  <p className="text-lg font-light">{leader.title}</p>
                  <GradientButton>
                    <span>View Bio</span>
                  </GradientButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
