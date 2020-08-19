import React, { Component } from "react";
import "./css/SourceCard.css";

class FollowingCard extends Component {
  render() {
    const {
      name,
      description,
      category,
      url,
      language,
      country,
    } = this.props.article;

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
        <button className="followButton">
          <i className="fas fa-minus-circle"> Remove</i>
        </button>
      </section>
    );
  }
}

export default FollowingCard;
