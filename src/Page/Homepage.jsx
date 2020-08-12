import React, { Component } from "react";
import Navbar from "../Component/Navbar";
import "./css/HomePage.css";
import SidebarMenu from "../Component/SidebarMenu";
import HomeBody from "../Component/HomeBody";
import TopStoriesPage from "./TopStoriesPage";
import SourcePage from "./SourcePage";
import {  Route, Switch } from "react-router-dom";



export class Homepage extends Component {
  render() {
    return (
      <div className="homePage">
        
        <Navbar />
        <section className="mainBody">
          <SidebarMenu />
          <section>
            <Switch>
          <Route path="/" component={HomeBody} />
          
          </Switch>
          </section>
          
        </section>
      </div>
    );
  }
}

export default Homepage;