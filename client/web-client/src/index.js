import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import AppContainer from './components/AppContainer';
import Login from './components/Login'
import './styles/main.css';

ReactDOM.render(

  <div>
  <div className = "titleWrapper">
    <div className="navElements">
    <h4 onClick={()=>{  window.location.href = '/';}} className="navElement">Home</h4>
    </div>
    <h1 className = "title"> Nfinite Space</h1>
  </div>
    <Router history={hashHistory}>
      <Route path="/" component={Login}/>
      <Route path="/dashboard" username = "null" password = "null" component={AppContainer}/>
    </Router>
    </div>,
  document.getElementById('root')
);
