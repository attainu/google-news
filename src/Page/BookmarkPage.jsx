import React, { Component } from "react";
import BookmarkCardList from "../Component/Card/BookmarkCardList";
import firebase from "../Config/firebase.config";
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";

class BookmarkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    bookmarks: [],
    };
}
componentDidMount() {
    let that = this;
    const {auth}=that.props
    if (auth.uid){
    console.log(auth.uid)
    firebase
        .firestore()
        .collection('users').doc(auth.uid)
        .collection("bookmarks")
        .get()
        .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => 
            ({id:doc.id,...doc.data()})
        );

        console.log(data);
        this.setState({bookmarks: data });
        });}
}


render() {
    const {bookmarks } = this.state;
    const {auth } = this.props;
    console.log(auth)
    console.log(this.props)
    if (!auth.uid) return <Redirect to='/login' />
    return bookmarks ? (
    <div>
        <BookmarkCardList stories={bookmarks} />
    </div>
    ) : (
    <h1>You don't have any bookmarks</h1>
    );
}
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    };
};

export default connect(mapStateToProps,null)(BookmarkPage);
