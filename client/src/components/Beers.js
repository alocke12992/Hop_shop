import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';
import axios from 'axios';
import { Card } from 'semantic-ui-react'; 


class Beers extends React.Component {
  state = { beers: [] }

  componentDidMount() {
    axios.get('/api/beers') 
      .then( res => this.setState({ beers: res.data }))
  }
  render() {
    let { beers } = this.state;
    return (
      <Card.Group>
        { beers.map( b =>
          <Card key={b.id}>
            <Card.Content>
              <Card.Header>{b.name}</Card.Header>
              <Card.Meta>{b.style}</Card.Meta>
              <Card.Description>{b.ibu}</Card.Description>
              <Card.Description>ABV: {b.abv}</Card.Description>
              <Link to={`/beer/${b.id}`}>Details</Link> 
            </Card.Content>
          </Card>
          )
        }
      </Card.Group>
    ) 
  }
}

export default Beers; 
