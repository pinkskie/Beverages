import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'
import  { Link } from 'react-router-dom'
import { Navbar as Header, Nav } from 'react-bootstrap';
import wishlist from '../../assets/wishlist.png'

const links = [
  {label: 'Catergories', to: '/categories', id: 1},
  {label: 'Types', to: '/types', id: 2},
  {label: 'Search', to: '/searchPage', id: 3},
  {label: 'About Us', to: '/about', id: 4},
  {label: 'Contacts', to: '/contacts', id: 5}
]

const Navbar = () => {
  return (
    <>
      <div className={styles.wrapper}>
          <span>Order online or call us (1800) 000 8808</span><Header.Brand to='/wishlist' as={ Link }><span><img src={wishlist} alt='wishlist' to='/wishlist' as={ Link } />WISHLIST</span></Header.Brand>
      </div>
      <hr/>
      <div className={styles.navlinks}>
        <Header className={styles.header} bg="white" variant="white">
          <Header.Brand to='/' as={ Link }><img src={logo} alt='logo'/></Header.Brand>
          <Nav className="ml-auto" >
            {links.map(item => (
            <Nav.Link className='px-5' key={item.id} as={Link} to={item.to}>{item.label}</Nav.Link>
          ))}
          </Nav>
        </Header>
      </div>
    </>
  )
}

export default Navbar;