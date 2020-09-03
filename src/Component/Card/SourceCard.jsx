import React, { Component } from "react";
import "./css/SourceCard.css";
import { connect } from 'react-redux'

import {createFollowing} from '../../redux/action/followingAction'


class SourceCard extends Component {
    state = {
        name: '',
        description: '',
        category: '',
        url: '',
        language: '',
        country: '',
    }
    render() {
        const {
            name,
            description,
            category,
            url,
            language,
            country,
        } = this.props.article;
        const {auth } = this.props; 

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
                    onClick={() => {
                        this.setState({
                            name: name,
                            description: description,
                            category: category,
                            url: url,
                            language: language,
                            country: country,
                        }, () => {
                            console.log('create firestore')
                            this.props.createFollowing(auth.uid,this.state)
                        }
                        )
                    }}><i className="far fa-star"> Follow</i></button>
            </section>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    };
  };
  

const mapDispatchToProps = dispatch =>{
    return{
        createFollowing: (uid,follows)=> dispatch(createFollowing(uid,follows))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(SourceCard);