import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../redux/actions/userActions";

class Header extends React.Component {
  render() {
    if (this.props.validUser) {
      return (
        <div
          className="header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#34495e",
            height: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "250px",
              marginLeft: "20px",
            }}
          >
            <i class="fas fa-bars"></i>
            <Link to="/">
              <img
                src="http://vignette3.wikia.nocookie.net/logopedia/images/7/75/Google_News_2015.png/revision/latest/scale-to-width-down/2000?cb=20160220081235"
                alt="googleNews logo"
                style={{ width: "200px" }}
              />
            </Link>
          </div>
          <button
            onClick={this.props.logOut}
            style={{ fontSize: "2rem", marginRight: "20px" }}
          >
            LogOut
          </button>
        </div>
      );
    } else {
      return (
        <div
          className="header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#34495e",
            height: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "250px",
              marginLeft: "20px",
            }}
          >
            <i class="fas fa-bars"></i>
            <Link to="/">
              <img
                src="http://vignette3.wikia.nocookie.net/logopedia/images/7/75/Google_News_2015.png/revision/latest/scale-to-width-down/2000?cb=20160220081235"
                alt="googleNews logo"
                style={{ width: "200px" }}
              />
            </Link>
          </div>
        </div>
      );
    }
  }
}

const maspStateToProps = (storeState) => {
  return {
    validUser: storeState.userState.validUser,
  };
};

export default connect(maspStateToProps, { signOut })(Header);
