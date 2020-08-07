import React, { Component } from "react";
import "./css/LoginPage.css";
import { connect } from "react-redux";
import { signIn ,signUp } from "../redux/action/authAction";
import {Redirect} from 'react-router-dom'

class LoginPage extends Component {
    state = {
        email: "",
        password: "",
        displayName: "",
    };
    handleChange = (event) => {
        console.log(event.target.value)
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
        this.props.signUp(this.state);
    };

    handleSignIn = (event) => {
        event.preventDefault();
        this.props.signIn(this.state);
    };
    render() {
        const { authError ,auth } = this.props;
        if (auth.uid) return <Redirect to='/' /> 
        return (
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <input type="text" placeholder="Name" id='displayName' onChange={this.handleChange} />
                        <input type="email" placeholder="Email" id='email' onChange={this.handleChange} />
                        <input type="password" placeholder="Password" id='password' onChange={this.handleChange} />
                        <button onClick={this.handleSignUp}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            id='email'
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            id='password'
                            onChange={this.handleChange}
                        />
                        <button onClick={this.handleSignIn}>Sign In</button>
                    </form>
                <div>{authError ? <p>{authError}</p>:null }</div>{/*todo not displayed properly*/}
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>Sign In</p>
                            <button className="ghost" id="signIn" onClick={this.handleSignInShow}>
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>To</h1>
                            <p>Sign up</p>
                            <button className="ghost" id="signUp" onClick={this.handleSignUpShow}>
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
        auth: state.firebase.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials)),
        signUp: (credentials) => dispatch(signUp(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
