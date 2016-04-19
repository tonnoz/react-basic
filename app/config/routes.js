import React from 'react'
//routing
import ReactRouter from 'react-router'
import {Route, IndexRoute, Router, hashHistory} from 'react-router'



//components
import Main from '../components/Main'
import Home from '../components/Home'
import Profile from '../components/Profile'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="profile/:username" component={Profile} />
    </Route>
  </Router>
);