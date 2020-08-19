import React, { Component } from "react";
import './css/PostCard.css'


class BookmarkCard extends Component {
 
  render() {
    const {
      title,
      author,
      description,
      publishedAt,
      url,
      urlToImage,
      name,
    } = this.props.article;

    

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
          <section className="mainPostDetails">
          <i  className="fas fa-bookmark"></i>
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
        <button 
          className='bookmarkButton'
         ><i className="fas fa-minus-circle">Remove</i></button>
     
    </section>
  );}
};


export default BookmarkCard;