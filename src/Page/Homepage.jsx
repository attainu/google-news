import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    if (this.props.validUser) {
      return (
        <div className="HomePage">
          <h1>Google News</h1>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = (storeState) => {
  return {
    validUser: storeState.userState.validUser,
  };
};

export default connect(mapStateToProps)(HomePage);
