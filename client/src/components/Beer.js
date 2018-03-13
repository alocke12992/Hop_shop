import React from 'react';
import axios from 'axios';
import { Card, Button } from 'semantic-ui-react'; 
import { Redirect, Link } from 'react-router-dom';
import Form from './Form'

class Beer extends React.Component {
  state = { beer: {}, edit: false, fireRedirect: false }

  componentDidMount(){
    axios.get(`/api/beers/${this.props.match.params.id}`)
    .then( res => this.setState({ beer: res.data }))
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit }
    })
  }

  submit = (beer) => {
    axios.put(`/api/beers/${this.props.match.params.id}`, { beer })
      .then( res => this.setState({ beer: res.data, edit: false })); 
  }

  destroy = (beer) => {
    axios.delete(`/api/beers/${this.props.match.params.id}`, { beer })
    .then( res => this.setState({ ...res.data, fireRedirect: true }))
    return <Redirect to="/beers" />
  }
  show() {
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

  edit() {
    return <Form {...this.state.beer} submit={this.submit} />
  }

  render() {
    let { edit, fireRedirect } = this.state 
    return(
      <div>
        {edit ? this.edit() : this.show() }
        <Button onClick={this.toggleEdit}>{edit ? 'Cancel' : 'Edit' }</Button>
        <Button onClick={this.destroy}>Delete</Button>
        {fireRedirect && (
          <Redirect to='/beers'/> 
        )}
      </div>
    )
  }
}

export default Beer; 