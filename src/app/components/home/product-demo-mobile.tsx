import Image from "next/image";

const features = [
  "Radar",
  "Microphone",
  "3D Lidar Scanner",
  "UV-C Beam Emitters",
  "Onboard GPU",
  "RGB Camera",
  "Beam Steering System",
  "20x Camera",
];

export default function ProductDemoMobile() {
  return (
    <div className="md:hidden px-4 py-8 mt-5 bg-black text-white">
      <h2 className="text-2xl font-bold text-center mb-4">
        Advanced Performance, Sustainability and Safety
      </h2>
      <p className="text-center text-sm mb-6">
        Equipped with advanced AI technology and mercury-free UV LED&apos;s
      </p>
      <div className="flex justify-center mb-6">
        <Image
          src="/images/shyld-product-high.png"
          alt="SHYLO Device"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature) => (
          <div
            key={feature}
            className="bg-[#121212] rounded-full py-2 px-4 text-center text-sm"
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}
