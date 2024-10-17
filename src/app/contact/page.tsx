import Image from "next/image";
import ContactForm from "../components/contact/contact-form";
import dynamic from "next/dynamic";

// Dynamically import the Map component with SSR disabled
const Map = dynamic(() => import("../components/ui/map"), { ssr: false });

export default function Contact() {
  return (
    <div className="min-h-screen ">
      <h1 className="text-[32px] text-center mb-[30px] font-bold mt-12">
        Let’s get started.
      </h1>
      <p className="text-center text-2xl font-light mb-14">
        Learn how Shyld AI can power Health Care in your facility
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-[124px] mb-[166px] px-[108px] max-w-[1440px]">
        <div className="w-1/2">
          <ContactForm />
        </div>
        <div className="w-1/2 h-[667px] rounded-3xl overflow-hidden">
          <Map />
        </div>
      </div>

      <div className="bg-white w-screen h-[280px] flex items-center justify-center mb-16">
        <div className="flex items-center justify-between w-full px-[108px] max-w-[1440px]">
          <div className="flex items-center gap-3">
            <span className="rounded-full w-12 h-12 bg-gradient-to-br from-[#00FCFF] to-[#24689B] flex items-center justify-center">
              <Image
                src="/svg/location-black.svg"
                alt="phone"
                width={24}
                height={24}
              />
            </span>
            <span className="text-black font-light text-xl">
              20631 Ventura Blvd, #302, Woodland Hills, 91364
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full w-12 h-12 bg-gradient-to-br from-[#00FCFF] to-[#24689B] flex items-center justify-center">
              <Image
                src="/svg/phone-black.svg"
                alt="phone"
                width={24}
                height={24}
              />
            </span>
            <span className="text-black font-light text-xl">
              +44-844-464-6333
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full w-12 h-12 bg-gradient-to-br from-[#00FCFF] to-[#24689B] flex items-center justify-center">
              <Image
                src="/svg/sms-notification.svg"
                alt="phone"
                width={24}
                height={24}
              />
            </span>
            <span className="text-black font-light text-xl">info@shyld.ai</span>
          </div>
        </div>
      </div>
    </div>
  );
}
