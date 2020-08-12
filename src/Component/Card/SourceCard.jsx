import React from "react";
import "./css/SourceCard.css";

const SourceCard = ({ article }) => {
    const {
        name,
        description,
        category,
        url,
        language,
        country,
    } = article;

    return (
        <section className="SourceCard">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                alt={name + " Url"}
            >
                <section className="mainDetails">
    <p className="sourceCardName">{name}</p>
    <p className="sourceCardDescription">{description}</p>
    <p className="sourceCardCategory">{category}</p>
    <p className="sourceCardLanguage">{language}</p>
    <p className="sourceCardCountry">{country}</p>
                </section>
            </a>
        </section>
    );
};

export default SourceCard;