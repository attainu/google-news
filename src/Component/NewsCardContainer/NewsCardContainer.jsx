import React from "react";
import NewsCard from "./NewsCard";

const NewsCardContainer = ({ stories }) => {
  return (
    <div className="NewsCardContainer">
      {stories.map((article) => (
        <NewsCard key={Math.random(0, 1)} article={article} />
      ))}
    </div>
  );
};

export default NewsCardContainer;
