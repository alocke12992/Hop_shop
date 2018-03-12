import React from 'react';
import { login } from '../fakeAuth';
import { Button } from 'semantic-ui-react'; 
 
const Login = ({ history }) => (
  <div>
    <h3>Sign in to see the goods!</h3>
    <Button onClick={ () => {
      login()
      history.push('/beers')
    }}>
      Beer Me
    </Button>
  </div>
)

export default Login; 
