import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'
import  { Link } from 'react-router-dom'
import { Navbar as Header, Nav } from 'react-bootstrap';

const links = [
  {label: 'Catergories', to: '/categories', id: 1},
  {label: 'Types', to: '/types', id: 2},
  {label: 'Search', to: '/search', id: 3},
  {label: 'About Us', to: '/about', id: 4},
  {label: 'Contacts', to: '/contacts', id: 5}
]

const Navbar = () => {
  return (
    <Header className={styles.header} bg="dark" variant="dark">
      <Header.Brand href="#home"><img src={logo}/></Header.Brand>
      <Nav className="ml-auto" >
        {links.map(item => (
          <Nav.Link className='px-4'key={item.id} as={Link} to={item.to}>{item.label}</Nav.Link>
        ))}
      </Nav>
    </Header>
  )
}

export default Navbar;