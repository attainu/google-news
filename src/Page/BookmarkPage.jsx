import React, { Component } from "react";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import PostCardList from "../Component/Card/PostCardList";

class BookmarkPage extends Component {
    render() {
        // const {bookmarkStatus} =this.props
        return (
            <div>
                {console.log(this.props)}
                {/* <PostCardList stories={this.props}/> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        bookmark: state.firestore.ordered.bookmarks,
    };
};

export default compose(
    firebaseConnect([{ collection: "bookmarks" }]),
    connect(mapStateToProps)
)(BookmarkPage);
