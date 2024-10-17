import Carousel from "../ui/carousel";

export default function Explainer() {
  return (
    <section className="px-4 sm:px-6 lg:px-[108px] pt-16 sm:pt-24 lg:pt-[180px] max-w-[1440px] mx-auto">
      <h2 className="title mb-4 text-center text-2xl sm:text-3xl lg:text-4xl">
        How Does Shyld AI work?
      </h2>
      <p className="paragraph mb-6 text-center text-sm sm:text-base lg:text-lg">
        Advanced artificial intelligence for precision UV-C Room Sanitization
      </p>

      <Carousel />
    </section>
  );
}
