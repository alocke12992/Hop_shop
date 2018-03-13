import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'; 


class Form extends React.Component { 

  defaultValues = { name: '', style: '', ibu: '', abv: '' }
  state = { ...this.defaultValues, fireRedirect: false  }

  componentDidMount() {
    if (this.props.id)
      this.setState({...this.props})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let beer = { ...this.state }
    this.props.submit(beer)
    this.setState({ ...this.defaultValues, fireRedirect: true })
  }

  handleChange = (e) => {
    let { target: { id, value } } = e;
    this.setState({ [id]: value })
  }

  render() {
    let { name, style, ibu, abv, fireRedirect } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            id="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <input
            id="style"
            placeholder="Style"
            value={style}
            onChange={this.handleChange}
          />
          <input
            id="ibu"
            placeholder="Ibus"
            value={ibu}
            onChange={this.handleChange}
          />
          <input
            id="abv"
            placeholder="ABV"
            value={abv}
            onChange={this.handleChange}
          />
          <Button>Submit</Button>
        </form>
        {fireRedirect && (
          <Redirect to="/beers" />
        )}
      </div>
    )
  }
}

export default Form; 