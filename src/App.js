import React from "react";
import "./CommonCss/CommonCss.css";
import LoginPage from "./Page/LoginPage";
import TopStoriesPage from "./Page/TopStoriesPage";
import SourcePage from "./Page/SourcePage";
import FollowingPage from "./Page/FollowingPage";
import BookmarkPage from "./Page/BookmarkPage";
import CategoryCountryPage from "./Page/CategoryCountryPage";
import Homepage from "./Page/Homepage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/topStories" component={TopStoriesPage} />
        <Route path="/sources" component={SourcePage} />
        {/* <Route  path='/following' component={FollowingPage} />
                <Route  path ='/bookmark' component ={BookmarkPage}/> 
                <Route  path ='categories/:categoryNAME' component ={CategoryCountryPage}/> */}
      </Switch>
    </div>
  );
}

export default App;
