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
  state = {
    visible : true
  }

  handleSideMenu = (visiblity) => {
   
    this.setState({
      visible : !visiblity
    })
  }
  
  render() {
    console.log(this.state.visible)
    return (
      <div className="homePage">

        <Navbar handleSideMenu={this.handleSideMenu} visibility={this.state.visible}/>
        <section className="mainBody">
        <Animated animationIn="slideInLeft" animationOut="slideOutLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={this.state.visible}>
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