import React from "react";
import BookmarkCard from "./BookmarkCard";

const BookmarkCardList = ({ stories }) => {
  return  stories == '' ?<h1 style={{marginLeft:"300px", marginTop:"250px", fontSize:"5rem",color:'#576574'}}>No data found</h1>:(
    <div className="cardList">
      {stories.map((article) => (
        <BookmarkCard key={Math.random(0, 1)} article={article} />
      ))}
    </div>
  );
};

export default BookmarkCardList;
