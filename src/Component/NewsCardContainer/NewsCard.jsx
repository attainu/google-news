import React from "react";
// import { connect } from "react-redux";
// import { fetchRelatedStories } from "../../redux/action/topStoriesAction";

const NewsCard = ({ article }) => {
  const {
    title,
    author,
    description,
    publishedAt,
    url,
    urlToImage,
    source: { name },
  } = article;

  function timeStampToDate(timeStamp) {
    const dateObj = new Date(timeStamp);

    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const date = dateObj.getDate();

    return `${month}/${date}/${year}`;
  }

  return (
    <div className="NewsCard" style={{ marginBottom: "20px" }}>
      <a target="_blank" href={url}>
        <section className="NewsCardDetails">
          <img
            className="CardImage"
            src={urlToImage}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <p className="CardTitle"> {title} </p>s
          <p className="CardDescription"> {description} </p>
          <p className="CardAuthor"> {author} </p>
          <p className="CardName"> {name} </p>
          <p className="CardTime"> {timeStampToDate(publishedAt)} </p>
        </section>
      </a>
      <section className="ViewRelatedPosts">
        {/* <button onClick={fetchRelatedStories(title)}>View Related Posts</button> */}
      </section>
    </div>
  );
};

export default NewsCard;
