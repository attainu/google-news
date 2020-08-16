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
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/topStories">
            <li>Top stories</li>
          </NavLink>
          <NavLink to="/source">
            <li>Source</li>
          </NavLink>
          <li>Following</li>
          <li>Bookmark</li>
          <hr />

          <li onClick={this.handleClick} id="0">
            Business
          </li>

          <li onClick={this.handleClick} id="1">
            Technology
          </li>
          <li onClick={this.handleClick} id="2">
            Entertainment
          </li>
          <li onClick={this.handleClick} id="3">
            Sports
          </li>
          <li onClick={this.handleClick} id="4">
            Science
          </li>
          <li onClick={this.handleClick} id="5">
            Health
          </li>
          <li onClick={this.handleClick} id="6">
            India
          </li>

          <NavLink to="/worldnews">
            <li>World</li>
          </NavLink>
        </ul>
      </div>
    );
  }
}
export default withRouter(SidebarMenu);
