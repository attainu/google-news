import React from "react";
import BookmarkCard from "./BookmarkCard";

const BookmarkCardList = ({ stories }) => {
  return (
    <div className="cardList">
      {stories.map((article) => (
        <BookmarkCard key={Math.random(0, 1)} article={article} />
      ))}
    </div>
  );
};

export default BookmarkCardList;
