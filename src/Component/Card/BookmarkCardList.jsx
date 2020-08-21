import React from "react";
import BookmarkCard from "./BookmarkCard";

const BookmarkCardList = ({ handleDelete, stories }) => {
  return stories == "" ? (
    <h1
      style={{
        marginLeft: "300px",
        marginTop: "250px",
        fontSize: "5rem",
        color: "#576574",
      }}
    >
      No data found
    </h1>
  ) : (
    <div className="cardList">
      {stories.map((article) => (
        <BookmarkCard
          key={article.id}
          article={article}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default BookmarkCardList;
