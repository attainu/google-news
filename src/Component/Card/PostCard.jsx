import React from "react";
import './css/PostCard.css'

const PostCard = ({ article }) => {
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
    <section className="postCard">
      <a target="_blank" rel="noopener noreferrer" href={url} alt={name+' Url'}>
        <section className="mainDetails">
          <img
            className="cardImage"
            src={urlToImage}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <section className='details'>
          <p className="cardTitle"> {title} </p>
          <p className="cardDescription"> {description} </p>
          <section className='authorDetails'>
          <p className="cardAuthor"><strong>Author :</strong> {author?author : 'No data found'} </p>
          <p className="cardName"><strong>Source :</strong> {name} </p>
          <p className="cardTime"> {timeStampToDate(publishedAt)} </p>
          </section>
          </section>
          </section>
      </a>
      <section className="ViewRelatedPosts">
        {/* todo related search */}
        View Related Search
      </section>
    </section>
  );
};

export default PostCard;
