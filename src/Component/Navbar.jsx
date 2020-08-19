import React, { Component } from "react";
import "../CommonCss/CommonCss.css";
import "./css/Navbar.css";
import { connect } from "react-redux";
import { Link,NavLink, withRouter } from "react-router-dom";
import { signOut } from "../redux/action/authAction";
import { fetchSearchResults } from "../redux/action/searchAction";

class Navbar extends Component {
  state = {
    searchValue: "",
  };

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchValue } = this.state;
    this.props.history.replace("/");
    this.props.history.push(`/searchPage/${searchValue}`);
  };
  render() {
    const { auth } = this.props;
    console.log(auth);
    return (
      <nav>
        <button className='menu'>
        <i className="material-icons">menu</i>
        </button>
        <NavLink to="/">
        <section className="logo">
          <img
            src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
            alt=""
            />
            <h1>News</h1>
          </section>
            </NavLink>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="searchValue"
            id="search"
            placeholder="search"
            value={this.state.searchValue}
          />
        </form>

        {!auth.uid ? (
          <>
            <Link to="/login">
              <h1>Login</h1>
            </Link>
          </>
        ) : (
          <>
          <span className='userNameImage'>
          <img src={auth.photoURL?auth.photoURL:''} alt="userImage"/>
          <h1>{auth.displayName?auth.displayName:'Add Profile details'}</h1></span>
          <h1 onClick={this.props.signOut}>logout</h1>
          </>
        )}
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signOut: () => dispatch(signOut())
//     };
// };

export default withRouter(
  connect(mapStateToProps, { signOut, fetchSearchResults })(Navbar)
);
