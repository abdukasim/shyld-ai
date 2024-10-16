import Hero from "./components/home/hero";
import Features from "./components/home/features";
import Explainer from "./components/home/explainer";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Hero />
      <Features />
      <Explainer />
    </div>
  );
}
