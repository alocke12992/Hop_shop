import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import NoMatch from "./components/NoMatch";
import Login from './components/Login';
import Beers from './components/Beers';
import { Container } from 'semantic-ui-react'


const App = () => (
  <div>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/beers" component={Beers} />
        <Route component={NoMatch} /> 
      </Switch>
    </Container>
  </div>
)

export default App;
