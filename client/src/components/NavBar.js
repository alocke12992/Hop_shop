import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

const styles = {
  active: {
    textDecoration: "none",
    FontWeight: "bold",
    color: "black",
  }
}
const NavBar = () => (
  <nav>
    <NavLink 
      exact 
      activeStyle={styles.active}
      to="/"
    >
    Home 
    </NavLink>
    {' '}
    <NavLink 
      exact 
      activeStyle={styles.active}
      to="/about"
    >
    About 
    </NavLink> 
  </nav>
)

export default NavBar; 