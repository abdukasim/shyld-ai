import Image from "next/image";
import GradientButton from "../ui/gradient-button";

const Features = () => {
  return (
    <section className="h-max px-[108px] space-y-[180px] max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between  pt-[180px] h-max">
        <div className="relative">
          <Image
            src="/images/hospital-room-interior.jpeg"
            alt="Modern hospital room with smart features"
            className="rounded-2xl shadow-lg h-[600px] object-cover object-left"
            width={500}
            height={600}
          />
          <div
            className="absolute top-[280px] left-9 w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-125 -rotate-[25deg]"
            style={{
              boxShadow: "0px 0px 24px 0px #00FCFF",
            }}
          >
            <div className="w-[32px] h-[32px] relative">
              <Image
                src="/images/product-image.png"
                alt="Modern hospital room with smart features"
                fill
              />
            </div>
          </div>
          <div
            className="absolute top-[280px] left-[290px] w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-125 -rotate-[25deg]"
            style={{
              boxShadow: "0px 0px 24px 0px #00FCFF",
            }}
          >
            <div className="w-[32px] h-[32px] relative">
              <Image
                src="/images/product-image.png"
                alt="Modern hospital room with smart features"
                fill
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="title mb-6">
            Building smart Healthcare <br /> Facilities of tomorrow
          </h2>
          <p className="text-white paragraph mb-6">
            ShyftAI Agents turn real-time data into real-time <br /> patient
            care and environmental treatment.
          </p>
          <ul className="space-y-6 text-white text-[22px] font-light opacity-70">
            {[
              "Surface Sanitization",
              "Air Sanitization",
              "Personnel Training & Compliance",
              "Assets Tracking",
              "Patient Monitoring",
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-white opacity-70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="4" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-[180px] h-max relative">
        <div className="">
          <h2 className="title mb-6">
            Fully Autonomous UV-C <br /> Sanitization Powered by AI
          </h2>
          <p className="text-white paragraph mb-6">
            Inactivates Pathogens in 20 seconds from 6.5 feet with no manual
            operation required
          </p>
          <div className="flex gap-4 items-center">
            <GradientButton textColor="white" outlined>
              <span>Learn More</span>
            </GradientButton>
            <GradientButton>
              <span>Request a Demo</span>
            </GradientButton>
          </div>
        </div>

        {/* Add the zigzag SVG here */}
        <svg
          className="absolute top-[30%] left-1/2 transform -translate-x-1/2 z-10"
          width="317"
          height="152"
          viewBox="0 0 317 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="317"
            y1="0.5"
            x2="162.185"
            y2="0.5"
            stroke="white"
            stroke-dasharray="8 8"
          />
          <line
            x1="162.184"
            y1="150.912"
            x2="0.183594"
            y2="150.912"
            stroke="white"
            stroke-dasharray="8 8"
          />
          <line
            x1="161.684"
            y1="150.412"
            x2="161.684"
            y2="0.000122048"
            stroke="white"
            stroke-dasharray="8 8"
          />
        </svg>

        <div className="relative">
          <Image
            src="/images/little-child-in-hospital-room.jpeg"
            alt="A little child in a hospital room"
            className="rounded-2xl shadow-lg h-[600px] object-cover object-left -scale-x-100"
            width={500}
            height={600}
          />
          <div
            className="absolute top-6 left-6 w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-125 -rotate-[25deg] z-20"
            style={{
              boxShadow: "0px 0px 24px 0px #00FCFF",
            }}
          >
            <div className="w-[32px] h-[32px] relative">
              <Image
                src="/images/product-image.png"
                alt="Modern hospital room with smart features"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
