import Image from "next/image";
import React from "react";
import Link from "next/link";

interface CardProps {
  image: string;
  date: string;
  description: string;
  slug: string;
}

export default function Card({ image, date, description, slug }: CardProps) {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-3xl bg-[#121212]">
      <Image
        src={image}
        alt="news"
        width={344}
        height={304}
        className="rounded-2xl"
      />

      <h2 className="text-3xl font-medium">{date}</h2>
      <p className="text-xl font-light">{description}</p>

      <Link href={`/news/${slug}`}>
        <button className="bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-[#00FCFF] to-[#24689B] hover:font-bold transition-opacity duration-300 w-max flex items-center gap-2">
          <span>Read More</span>
          <span>{">"}</span>
        </button>
      </Link>
    </div>
  );
}
