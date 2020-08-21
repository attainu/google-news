import React, { Component } from "react";
import './css/PostCard.css'
import firebase from "../../Config/firebase.config";
import { Redirect,useHistory } from "react-router-dom";
import { connect } from "react-redux";
import ReactDOM from 'react-dom'

class BookmarkCard extends Component {
  
  deleteData = (uid,id) =>{
    firebase
        .firestore().collection('users').doc(uid).collection("bookmarks").doc(id).delete().then(function() {
          window.location.href="/bookmark"
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}
  render() {
    const {
      id,
      title,
      author,
      description,
      publishedAt,
      url,
      urlToImage,
      name,
    } = this.props.article;

    const {auth}=this.props

    function timeStampToDate(timeStamp) {
      const dateObj = new Date(timeStamp);
  
      const month = dateObj.getMonth() + 1;
      const year = dateObj.getFullYear();
      const date = dateObj.getDate();
  
      return `${month}/${date}/${year}`;
    }


    return (
    <section id={`post${id}`} className={`postCard`}>
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
          className='bookmarkButton' onClick={()=>this.deleteData(auth.uid,id)}
            ><i className="fas fa-minus-circle">Remove</i></button>
    
    </section>
  );}
};
const mapStateToProps = (state) => {
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth
  };
};

export default connect(mapStateToProps,null)(BookmarkCard);