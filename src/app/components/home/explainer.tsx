import Carousel from "../ui/carousel";

export default function Explainer() {
  return (
    <section className="px-[108px] pt-[180px] max-w-[1440px] mx-auto">
      <h2 className="title mb-4 text-center">How Does Shyld AI work ?</h2>
      <p className="paragraph mb-6 text-center">
        Advanced artificial intelligence for precision UV-C Room Sanitization
      </p>

      <Carousel />
    </section>
  );
}
