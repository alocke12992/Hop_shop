import React from 'react'; 
import { Link } from 'react-router-dom';

const NoMatch = ({ location }) => (
  <div>
    <h2>You done messed up</h2>
    <h3>Error 404: { location.pathname} doesn't exist</h3>
    <h4>Don't be that guy, go home</h4>
    <Link className=""to="/">
      Home
    </Link>
  </div>
)

export default NoMatch;