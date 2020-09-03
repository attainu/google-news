import React from "react";
import PostCard from "./PostCard";

const PostCardList = ({ stories }) => {
  return (
    <div className="cardList">
      {stories.map((article) => (
        <PostCard key={Math.random(0, 1)} article={article} />
      ))}
    </div>
  );
};

export default PostCardList;
