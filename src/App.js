import React from "react";
import "./CommonCss/CommonCss.css";
import LoginPage from "./Page/LoginPage";
import Homepage from "./Page/Homepage";
import { Switch, Route } from "react-router-dom";
import ProfileEditPage from "./Page/ProfileEditPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={Homepage} />
        <Route path="/profileEdit" component={ProfileEditPage} />

        {/* <Route path="/topStories" component={TopStoriesPage} />
          <Route path="/source" component={SourcePage} /> */}
        {/* <Route  path='/following' component={FollowingPage} />
                <Route  path ='/bookmark' component ={BookmarkPage}/> 
                <Route  path ='categories/:categoryNAME' component ={CategoryCountryPage}/>*/}
      </Switch>
    </div>
  );
}

export default App;
