import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header'

import LoginPage from './Page/LoginPage'
import Homepage from './Page/Homepage';
import TopStoriesPage from './Page/TopStoriesPage';
import SourcePage from './Page/SourcePage';
import FollowingPage from './Page/FollowingPage';
import BookmarkPage from './Page/BookmarkPage';
import CategoryPage from './Page/CategoryPage';

function App() {
  return (
    <>
    <Header />
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/topStories' component={TopStoriesPage} />
        <Route exact path='/sources' component={SourcePage} />
        <Route exact path='/following' component={FollowingPage} />
        <Route exact path = '/bookmark' component ={BookmarkPage}/>
        <Route exact path = 'categories/:categoryNAME' component ={CategoryPage}/>
     </Switch>
      </div>
      </>
  );
}

export default App;
