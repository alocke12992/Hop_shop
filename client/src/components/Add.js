import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';
import axios from 'axios';
import { Card } from 'semantic-ui-react'; 
import Form from "./Form";

class Add extends React.Component {

  state = { showForm: true }
  
  form() {
    return <Form submit={this.submit} />
  }

  render() {
    return(
        <h1>Form</h1>
    )
  }

}

export default Add;