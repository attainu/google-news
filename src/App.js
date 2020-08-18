import React from "react";
import "./CommonCss/CommonCss.css";
import LoginPage from "./Page/LoginPage";
import Homepage from "./Page/Homepage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/login" component={LoginPage} />
        
      </Switch>
    </div>
  );
}

export default App;
