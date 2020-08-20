import React from "react";
import FollowingCard from "./FollowingCard";
import './css/SourceCardList.css'

const FollowingCardList = ({ stories }) => {
    return stories == '' ?<h1 style={{marginLeft:"300px", marginTop:"250px", fontSize:"5rem",color:'#576574'}}>No data found</h1>:(
        <div className="cardList">
            {console.log(stories)}
            {stories.map((article) => (
                <FollowingCard key={Math.random(0, 1)} article={article} />
            ))}
        </div>
    );
};

export default FollowingCardList;
