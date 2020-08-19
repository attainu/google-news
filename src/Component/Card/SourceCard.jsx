import React from "react";
import "./css/SourceCard.css";
import { connect } from 'react-redux'

import {createFollowing} from '../../redux/action/followingAction'


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
            className='SourceAnchor'
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                alt={name + " Url"}
            >
    <section className="mainDetails">
    <span className="sourceCardName">{name}</span>
    <span className="sourceCardDescription">{description}</span>
    <span className="sourceCardCategory"> <strong>Category : </strong> {category}</span>
    <span className="sourceCardLanguage"> <strong>Language : </strong> {language}</span>
    <span className="sourceCardCountry"> <strong>Country : </strong> {country}</span>
        </section>
            </a>
            <button 
    className='followButton'
    onClick={()=>{
        this.setState({
            name:name,
            description:description,
            category:category,
            url:url,
            language:language,
            country:country,
        },()=>{
        console.log('create firestore')
        this.props.createFollowing(this.state)}
        )
        }}><i  className="fas fa-star"> Follow</i></button>
        </section>
    );
};

const mapDispatchToProps = dispatch =>{
    return{
        createFollowing: (follows)=> dispatch(createFollowing(follows))
    }
  }
  export default connect(null, mapDispatchToProps)(SourceCard);