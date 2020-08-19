import React, { Component } from "react";
import BookmarkCardList from "../Component/Card/BookmarkCardList";
import firebase from "../Config/firebase.config";

class BookmarkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
    };
  }
  componentDidMount() {
    firebase
      .firestore()
      .collection("bookmarks")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        this.setState({ bookmarks: data });
      });
  }

  render() {
    const { bookmarks } = this.state;
    return bookmarks ? (
      <div>
        <BookmarkCardList stories={bookmarks} />
      </div>
    ) : (
      <h1>You don't have any bookmarks</h1>
    );
  }
}

export default BookmarkPage;
