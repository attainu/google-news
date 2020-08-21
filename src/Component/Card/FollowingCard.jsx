import React, { Component } from "react";
import "./css/SourceCard.css";
import firebase from "../../Config/firebase.config";
import { connect } from "react-redux";

class FollowingCard extends Component {
  deleteData = (uid, id) => {
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .collection("followings")
      .doc(id)
      .delete()
      .then(function () {
        window.location.href = "/following";
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  render() {
    const {
      id,
      name,
      description,
      category,
      url,
      language,
      country,
    } = this.props.article;
    const { auth } = this.props;

    return (
      <section className="SourceCard">
        <a
          className="SourceAnchor"
          target="_blank"
          rel="noopener noreferrer"
          href={url}
          alt={name + " Url"}
        >
          <section className="mainDetails">
            <i className="fas fa-star"></i>
            <span className="sourceCardName">{name}</span>
            <span className="sourceCardDescription">{description}</span>
            <span className="sourceCardCategory">
              {" "}
              <strong>Category : </strong> {category}
            </span>
            <span className="sourceCardLanguage">
              {" "}
              <strong>Language : </strong> {language}
            </span>
            <span className="sourceCardCountry">
              {" "}
              <strong>Country : </strong> {country}
            </span>
          </section>
        </a>
        <button
          className="followButton"
          onClick={() => {
            this.props.onDelete(id);
            this.deleteData(auth.uid, id);
          }}
        >
          <i className="fas fa-minus-circle"> Remove</i>
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(FollowingCard);
