import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';
import axios from 'axios';
import { Card } from 'semantic-ui-react'; 
import Form from "./Form";

class Add extends React.Component {
  
  state = { beer: [] }
  
  componentDidMount() {
    axios.get('/api/beers')
      .then(res => this.setState({ beers: res.data }))
  }

  form() {
    return <Form submit={this.submit} />
  }

  submit = (beer) => {
    let { beers } = this.state
    axios.post('/api/beers', { beer })
      .then(res => this.setState({ beers: [{...res.data}, ...beers ]}))
      .catch( e => console.log(e.response.data.errors))
  } 

  render() {
    return(
      <div>
        <h2>Add New Beer</h2>
        {this.form()}
      </div>
    )
  }

}

export default Add;