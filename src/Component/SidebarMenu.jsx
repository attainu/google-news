import React, { Component } from "react";
import "./css/SidebarMenu.css";
import { NavLink, withRouter } from "react-router-dom";
class SidebarMenu extends Component {
  state = {
    categoryElements: [
      "Business",
      "Technology",
      "Entertainment",
      "Sports",
      "Science",
      "Health",
      "general",
    ],
  };
  handleClick = (event) => {
    this.props.history.replace("/");
    this.props.history.push(
      `categories/${this.state.categoryElements[event.target.id]}`
    );
  };

  render() {
    return (
      <div>
        <ul className="menuList">
          <NavLink
          exact
            activeStyle={{
              fontWeight: "bold",
              color: "cadetblue",
            }}
            to="/"
          >
            <li className="sideMenuStyle">Home</li>
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "cadetblue",
            }}
            to="/topStories"
          >
            <li className="sideMenuStyle">Top stories</li>
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "cadetblue",
            }}
            to="/source"
          >
            <li className="sideMenuStyle">Source</li>
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "cadetblue",
            }}
            to="/following"
          >
            <li className="sideMenuStyle">Following</li>
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "cadetblue",
            }}
            to="/bookmark"
          >
            <li className="sideMenuStyle">Bookmark</li>
          </NavLink>
          <hr />

          <li className="sideMenuStyle" onClick={this.handleClick} id="0">
            Business
          </li>

          <li className="sideMenuStyle" onClick={this.handleClick} id="1">
            Technology
          </li>
          <li className="sideMenuStyle" onClick={this.handleClick} id="2">
            Entertainment
          </li>
          <li className="sideMenuStyle" onClick={this.handleClick} id="3">
            Sports
          </li>
          <li className="sideMenuStyle" onClick={this.handleClick} id="4">
            Science
          </li>
          <li className="sideMenuStyle" onClick={this.handleClick} id="5">
            Health
          </li>
          <li className="sideMenuStyle" onClick={this.handleClick} id="6">
            India
          </li>

          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "cadetblue",
            }}
            to="/worldnews"
          >
            <li className="sideMenuStyle">World</li>
          </NavLink>
        </ul>
      </div>
    );
  }
}
export default withRouter(SidebarMenu);
