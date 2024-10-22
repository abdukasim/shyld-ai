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
  "seal-shield-showcase-shyld-ai-hlth-2024": {
    title: "Seal Shield to showcase Shyld AI at HLTH 2024",
    date: "October 22, 2024",
    image: "/images/news-1.jpeg",
    content:
      "Seal Shield, a leader in infection control technology, is set to showcase its groundbreaking Shyld AI system at the Healthcare Management and Medical Systems (HMMS) 2024 conference.\n\nThe Shyld AI system represents a significant leap forward in healthcare-associated infection prevention, utilizing advanced machine learning algorithms to monitor and optimize hygiene practices in real-time.\n\nAttendees of HMMS 2024 will have the opportunity to experience live demonstrations of the Shyld AI system and engage with Seal Shield experts to learn more about how this innovative technology is reshaping infection control protocols in healthcare settings.",
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
