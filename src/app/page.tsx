import Hero from "./components/home/hero";
import Features from "./components/home/features";
import Explainer from "./components/home/explainer";
import MoreFeatures from "./components/home/more-features";
import ProductDemo from "./components/home/product-demo";
export default function Home() {
  return (
    <div className="min-h-screen ">
      <Hero />
      <Features />
      <Explainer />
      <MoreFeatures />
      <ProductDemo />
    </div>
  );
}
