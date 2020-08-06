import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { signIn, signUp } from "../redux/actions/userActions";

import "../styles/loginPage.css";

class LoginPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    clicked: false,
  };

  handleSlide = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignInSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    this.props.signIn(user);
    this.props.history.push("/");
  };

  handleSignUpSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const user = {
      name,
      email,
      password,
    };
    this.props.signUp(user);
    this.handleSlide();
  };
  render() {
    let cls = this.state.clicked ? "container right-panel-active" : "container";
    return this.props.validUser ? (
      <Redirect to="/" />
    ) : (
      <div className={cls} id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={this.handleSignUpSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
              <Link to="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link to="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
            <span>or use your email for registration</span>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              type="text"
              placeholder="Name"
            />
            <input
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={this.handleSignInSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              <Link to="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link to="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
            <span>or use your account</span>
            <input
              onChange={this.handleChange}
              value={this.state.email}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
              type="password"
              placeholder="Password"
            />
            <Link to="#">Forgot your password?</Link>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button onClick={this.handleSlide} className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Google News</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={this.handleSlide} className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    validUser: storeState.userState.validUser,
  };
};

export default connect(mapStateToProps, { signIn, signUp })(LoginPage);
