import React from "react";
import Card from "../components/news/card";
import Link from "next/link";

const newsItems = [
  {
    image: "/images/news-1.jpeg",
    date: "October 22, 2024",
    title: "Seal Shield to showcase Shyld AI at HLTH 2024",
    slug: "seal-shield-showcase-shyld-ai-hlth-2024",
  },
];

export default function News() {
  return (
    <div className="mt-24 px-[108px] max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-4xl font-bold">News</h1>
          <ul className="flex gap-10 items-center">
            <li className="paragraph">
              <Link href="/about">Our Company</Link>
            </li>
            <li className="paragraph">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-40">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              date={item.date}
              description={item.title}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
