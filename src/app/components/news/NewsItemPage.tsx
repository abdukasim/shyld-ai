import React from "react";
import Image from "next/image";
import GradientButton from "../ui/form/gradient-button";

interface NewsItemPageProps {
  title: string;
  date: string;
  image: string;
  content: string;
}

const NewsItemPage: React.FC<NewsItemPageProps> = ({
  title,
  date,
  image,
  content,
}) => {
  return (
    <div className="min-h-screen relative px-4 sm:px-8 lg:px-[108px] max-w-[1440px] mx-auto mt-16 sm:mt-[120px] mb-16 sm:mb-[214px]">
      <div className="flex flex-col gap-12">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        <p className="text-xl font-light">{date}</p>
        <div className="w-full h-[400px] relative rounded-3xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="space-y-4 text-lg font-light">
          {content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12">
          <GradientButton href="/news">
            <span>Back to News</span>
          </GradientButton>
        </div>
      </div>
      <div className="absolute top-[208px] left-[74px] w-[234px] h-[234px] bg-gradient-to-r from-[#00FCFF] to-[#24689B] rounded-full blur-[500px] -z-10"></div>
      <div className="absolute top-[207px] right-0 w-[234px] h-[234px] bg-gradient-to-r from-[#00FCFF] to-[#24689B] rounded-full blur-[500px] -z-10"></div>
    </div>
  );
};

export default NewsItemPage;
