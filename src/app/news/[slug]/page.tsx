import React from "react";
import NewsItemPage from "../../components/news/NewsItemPage";

interface NewsData {
  [key: string]: {
    title: string;
    date: string;
    image: string;
    content: string;
  };
}

const newsData: NewsData = {
  "shyld-ai-agents-at-hlth-2024": {
    title: "Shyld AI Agents at HLTH 2024",
    date: "October 11, 2024",
    image: "/images/news-1.jpeg",
    content:
      "We are excited to be sharing our Physicial AI Agents at HLTH USA in Las Vegas October 20-23.\n\n Join us at Booth 3840 to see how Shyld AI drives real-time, autonomous Infection Prevention applications for enhanced clinical and operational efficiencies.\n\n Learn more about Shyld AI and how we are empowering Smart Healthcare at shyld.ai",
  },
};

export default function NewsItem({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const news = newsData[slug];

  if (!news) {
    return <div>News item not found</div>;
  }

  return <NewsItemPage {...news} />;
}
