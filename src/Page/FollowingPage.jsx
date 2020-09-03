import React, { Component } from "react";
import firebase from "../Config/firebase.config";
import FollowingCardList from "../Component/Card/FollowingCardList";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class FollowingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followings: [],
    };
  }
  componentDidMount() {
    let that = this;
    const { auth } = that.props;
    if (auth.uid) {
      firebase
        .firestore()
        .collection("users")
        .doc(auth.uid)
        .collection("followings")
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(data);
          this.setState({ followings: data });
        });
    }
  }
  handleDelete = (itemId) => {
    console.log(itemId);
    const items = this.state.followings.filter(
      (follow) => follow.id !== itemId
    );
    this.setState({ followings: items });
  };

  render() {
    const { followings } = this.state;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <FollowingCardList
          stories={followings}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(FollowingPage);
