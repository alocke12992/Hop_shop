import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import NoMatch from "./components/NoMatch";

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NoMatch} /> 
    </Switch>
  </div>
)

export default App;
