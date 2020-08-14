import React, { Component } from 'react'
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

class FollowingPage extends Component {
    render() {
        return (
            <div>
                {console.log(this.props)}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        following: state.firestore.ordered.following,
    };
};

export default 
    connect(mapStateToProps,
    firebaseConnect([{ collection: "following" }])) 
(FollowingPage);

