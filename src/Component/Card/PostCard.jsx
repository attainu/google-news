import React, { Component } from "react";
import './css/PostCard.css'
import { connect } from 'react-redux'

import {createBookmark} from '../../redux/action/bookmarkAction'


class PostCard extends Component {
  state = {
    title:'',
    author:'',
    description:'',
    publishedAt:'',
    url:'',
    urlToImage:'',
    name:'',
  }

  
  render() {
    
    const {
      title,
      author,
      description,
      publishedAt,
      url,
      urlToImage,
      source: { name },
    } = this.props.article;
    const {auth } = this.props; 

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
      onClick={()=>{
        this.setState({
          title:title,
          author:author,
          description:description,
          publishedAt:publishedAt,
          url:url,
          urlToImage:urlToImage,
          name:name,
        },()=>{
        console.log('create firestore',this.state)
        this.props.createBookmark(auth.uid,this.state)}
        )
        }}><i  className="far fa-bookmark"> bookmark</i></button>
      {/* <section className="ViewRelatedPosts">
        todo related search 
        View Related Search
      </section> */}
    </section>
  );}
};

const mapStateToProps = (state) => {
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    createBookmark: (uid,bookmarks)=> dispatch(createBookmark(uid,bookmarks))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostCard);