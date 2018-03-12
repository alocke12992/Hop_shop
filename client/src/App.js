import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import NoMatch from "./components/NoMatch";
import Login from './components/Login';
import Beers from './components/Beers';
import Beer from './components/Beer';
import Add from './components/Add';
import { Container } from 'semantic-ui-react'
import ProtectedRoute from './components/ProtectedRoute'
/* TODO 
  - Add beer form 
  - Add show form to Beer list 
  - Edit Beers from show
  - Delete Beers from show

const App = () => (
  <div>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/beers" component={Beers} />
        <ProtectedRoute path="/add" component={Add} />
        <ProtectedRoute path="/beer/:id" component={Beer} />
        <Route component={NoMatch} /> 
      </Switch>
    </Container>
  </div>
)

export default App;
