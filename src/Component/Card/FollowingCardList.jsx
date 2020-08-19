import React from "react";
import FollowingCard from "./FollowingCard";
import './css/SourceCardList.css'

const FollowingCardList = ({ stories }) => {
    return (
        <div className="cardList">
            {console.log(stories)}
            {stories.map((article) => (
                <FollowingCard key={Math.random(0, 1)} article={article} />
            ))}
        </div>
    );
};

export default FollowingCardList;
