import ContactForm from "../components/contact/contact-form";
import Map from "../components/ui/map";

export default function Contact() {
  return (
    <div className="min-h-screen container mx-auto">
      <h1 className="text-[32px] text-center mb-[30px] font-bold mt-12">
        Let’s get started.
      </h1>
      <p className="text-center text-2xl font-light mb-14">
        Learn how Shyld AI can power Health Care in your facility
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <ContactForm />
        <Map />
      </div>
    </div>
  );
}
