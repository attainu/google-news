import React from "react";
import SourceCard from "./SourceCard";

const SourceCardList = ({ stories }) => {
    return (
        <div className="cardList">
            {console.log(stories)}
            {/* {stories.map((article) => (
                <SourceCard key={Math.random(0, 1)} article={article} />
            ))} */}
        </div>
    );
};

export default SourceCardList;
