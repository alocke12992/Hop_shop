import React from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react'; 
import { Link } from 'react-router-dom';

class Beer extends React.Component {
  state = { beer: {} }

  componentDidMount(){
    axios.get(`/api/beers/${this.props.match.params.id}`)
    .then( res => this.setState({ beer: res.data }))
  }

  render() {
    let { beer: {name, style, ibu, abv }} = this.state 
    return(
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{style}</Card.Meta>
          <Card.Description>{ibu}</Card.Description>
          <Card.Description>ABV: {abv}</Card.Description>
          <Link to={'/beers'}>Back</Link> 
        </Card.Content>
      </Card>
    )
  }
}

export default Beer; 