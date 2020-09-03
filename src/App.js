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
        <Route path="/profileEdit" component={ProfileEditPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
