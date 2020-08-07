import React, { Component } from "react";
import "../CommonCss/CommonCss.css";
import "./css/Navbar.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../redux/action/authAction";

class Navbar extends Component {
    render() {
        const { auth } = this.props;
        console.log(auth)
        return (
            <nav>
                <i className="material-icons">menu</i>
                <section>
                    <img src="" alt="" />
                    <h1>News</h1>
                </section>
                <input type="text" name="search" id="search" placeholder="search" />

                {!auth.uid ? (
                    <>
                        <h1>{auth.displayName}</h1>
                        <h1>
                            <Link to="/login">Login</Link>
                        </h1>
                    </>
                ) : (
                        <h1 onClick={this.props.signOut}>
                           logout
                        </h1>
                    )}
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
