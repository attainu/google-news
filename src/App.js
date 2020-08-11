import React from "react";
import "./CommonCss/CommonCss.css";
import LoginPage from "./Page/LoginPage";
import TopStoriesPage from "./Page/TopStoriesPage";
import SourcePage from "./Page/SourcePage";
import FollowingPage from "./Page/FollowingPage";
import BookmarkPage from "./Page/BookmarkPage";
import CategoryCountryPage from "./Page/CategoryCountryPage";
import WorldNewsPage from './Page/WorldNewsPage'
import Homepage from "./Page/Homepage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/topStories" component={TopStoriesPage} />
        <Route
          exact
          path="/categories/:categoryName"
          component={CategoryCountryPage}
        />
        <Route exact path="/worldnews" component={WorldNewsPage}/>
        {/* 
                <Route  path='/sources' component={SourcePage} />
                <Route  path='/following' component={FollowingPage} />
                <Route  path ='/bookmark' component ={BookmarkPage}/> 
                */}
      </Switch>
    </div>
  );
}

export default App;
