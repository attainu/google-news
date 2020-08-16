import React from "react";
import "./CommonCss/CommonCss.css";
import LoginPage from "./Page/LoginPage";

import FollowingPage from "./Page/FollowingPage";
import BookmarkPage from "./Page/BookmarkPage";

import Homepage from "./Page/Homepage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/login" component={LoginPage} />
        {/* <Route path="/topStories" component={TopStoriesPage} />
          <Route path="/source" component={SourcePage} /> */}
        {/* <Route  path='/following' component={FollowingPage} />
                <Route  path ='/bookmark' component ={BookmarkPage}/> 
                */}
      </Switch>
    </div>
  );
}

export default App;
