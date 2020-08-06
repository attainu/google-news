import React, { Component } from "react";
import "./css/LoginPage.css";
import { connect } from "react-redux";
import { signIn } from "../redux/action/authAction";
import { withRouter } from "react-router-dom";

class LoginPage extends Component {
    state = {
        email: "",
        password: "",
    };
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };
    handleSignUpShow = (event) => {
        event.preventDefault();
        document.getElementById("container").classList.add("right-panel-active");
    };
    handleSignInShow = (event) => {
        event.preventDefault();
        document.getElementById("container").classList.remove("right-panel-active");
    };

    handleSignUp = (event) => {
        event.preventDefault();
    };

    handleSignIn = (event) => {
        event.preventDefault();
        this.props.signIn(this.state);
    };
    render() {
        return (
            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button onClick={this.handleSignUp}>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                        <button onClick={this.handleSignIn}>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>Sign In</p>
                            <button class="ghost" id="signIn" onClick={this.handleSignInShow}>
                                Sign In
                            </button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Sign up</p>
                            <button class="ghost" id="signUp" onClick={this.handleSignUpShow}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
