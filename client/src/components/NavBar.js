import React from 'react'
import { withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../fakeAuth';
import Form from './Form';
import { Menu } from 'semantic-ui-react'

const styles = {
  active: {
    textDecoration: "none",
    FontWeight: "bold",
    color: "black",
  }
}

const NavBar = ({history}) => {
  if (isAuthenticated()) {
    return (
      <Menu>
        <Menu.Item
          exact
          activeStyle={styles.active}
          href="/"
        >
          Home
        </Menu.Item>
        <Menu.Item 
        activeStyle={styles.active} 
        href="/beers"
        > Beers
        </Menu.Item> 
        <Menu.Item
          activeStyle={styles.active}
          href="/add"
        > Add
        </Menu.Item>
        <Menu.Item 
          href="#" onClick={() => {
          logout()
          history.push("/login")
        }}>
          Logout
        </Menu.Item> 
      </Menu>
    )
  } else {
    return (
      <Menu>
        <Menu.Item
          exact
          activeStyle={styles.active}
          href="/"
        >
          Home
        </Menu.Item>
          <Menu.Item
            exact
            activeStyle={styles.active}
            href="/about"
          >
            About
        </Menu.Item>
        <Menu.Item
          activeStyle={styles.active}
          href="/login"
        >
          Login
        </Menu.Item> 
      </Menu>
    )
  }
}


export default withRouter(NavBar); 