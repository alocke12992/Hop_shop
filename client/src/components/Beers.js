import React from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';

const Beers = () => {
  if (isAuthenticated()) {
    return (
      <div>
        <h3> You are now logged in </h3>
      </div>
    )
  } else {
    return <Redirect to="/login" /> 
  } 
}

export default Beers; 