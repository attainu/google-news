import React, { Component } from "react";
import Navbar from "../Component/Navbar";
import "./css/HomePage.css";
import SidebarMenu from "../Component/SidebarMenu";
import HomeBody from "../Component/HomeBody";
import TopStoriesPage from "./TopStoriesPage";
import FollowingPage from "./FollowingPage";
import BookmarkPage from "./BookmarkPage";
import SourcePage from "./SourcePage";
import {  Route, Switch } from "react-router-dom";
import CategoryCountryPage from "./CategoryCountryPage";
import WorldNewsPage from "./WorldNewsPage";
import SearchResultPage from './SearchResultPage'
import {Animated} from "react-animated-css";




export class Homepage extends Component {
  render() {
    return (
      <div className="homePage">

        <Navbar />
        <section className="mainBody">
        <Animated animationIn="slideInLeft" animationOut="slideOutLeft" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
          <SidebarMenu />
          </Animated>
          <section>
          <Switch>
          <Route exact path="/" component={HomeBody} />
          <Route path="/topStories" component={TopStoriesPage} />
          <Route path="/source" component={SourcePage} />
          <Route  path='/following' component={FollowingPage} />
          <Route  path ='/bookmark' component ={BookmarkPage}/>
          <Route
          exact
          path="/categories/:categoryName"
          component={CategoryCountryPage}
        />
         <Route exact path="/worldnews" component={WorldNewsPage} />
         <Route exact path='/searchPage/:search' component = {SearchResultPage}/>   
        
          </Switch>
          </section>
        </section>
      </div>
    );
  }
}

export default Homepage;