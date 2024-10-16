import Image from "next/image";

export default function ProductDemo() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Image
        src="/images/product-demo4x-min.png"
        alt="Product Demo"
        width={1440}
        height={1066}
      />
    </div>
  );
}
