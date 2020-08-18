import React, { Component } from "react";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import PostCardList from "../Component/Card/PostCardList";
import { fetchFirebaseData } from "../redux/action/getFirebaseAction";

class BookmarkPage extends Component {
//     componentDidMount() {
//         this.props.fetchFirebaseData();
// }

    render() {
       // const {bookmarks} =this.props
        return (
            <div>
                {/* <PostCardList stories={this.props.}/> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
       // bookmark: state.firestore.ordered.bookmarks,
    };
};

export default compose(
    connect(mapStateToProps),
   // firebaseConnect([{collection: 'bookmarks'}])
)(BookmarkPage);
