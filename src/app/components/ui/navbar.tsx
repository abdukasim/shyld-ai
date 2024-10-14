import Link from "next/link";
import Image from "next/image";
import logo from "@/public/svg/shyld-ai-logo.svg";
import GradientButton from "@/app/components/ui/gradient-button";

const Navbar = () => {
  return (
    <nav className="bg-[#121212] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold relative w-[132px] h-5">
          <Image src={logo} alt="SHYLD" fill />
        </Link>
        <div className="space-x-12 font-light text-xl">
          <Link href="/product" className="hover:text-gray-300">
            Product
          </Link>
          <Link href="/ai-platform" className="hover:text-gray-300">
            AI Platform
          </Link>
          <Link href="/news" className="hover:text-gray-300">
            News
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </div>
        <GradientButton href="/contact" isLink={true}>
          <span className="text-black">Contact Us</span>
        </GradientButton>
      </div>
    </nav>
  );
};

export default Navbar;
