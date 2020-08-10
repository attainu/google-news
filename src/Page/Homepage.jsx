import React, { Component } from "react";
import Navbar from "../Component/Navbar";
import "./css/HomePage.css";
import SidebarMenu from "../Component/SidebarMenu";
import HomeBody from "../Component/HomeBody";

export class Homepage extends Component {
  render() {
    return (
      <div className="homePage">
        <Navbar />
        <section className="mainBody">
          <SidebarMenu />
          <HomeBody />
        </section>
      </div>
    );
  }
}

export default Homepage;
