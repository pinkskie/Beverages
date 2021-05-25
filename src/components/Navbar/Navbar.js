import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'
import vector from '../../assets/Vector.png'
import vectorLike from '../../assets/Vectorlike.png'
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
    <div className={styles.wrapper}>
      <span>Order online or call us (1800) 000 8808 <span><img src={vector} alt='wishlist'/><img className={styles.likeimg} src={vectorLike} alt='like'/>WISHLIST</span></span>
      <hr/>
      <Header className={styles.header} bg="white" variant="white">
        <Header.Brand to='/' as={ Link }><img src={logo} alt='logo'/></Header.Brand>
        <Nav className="ml-auto" >
          {links.map(item => (
          <Nav.Link className='px-5' key={item.id} as={Link} to={item.to}>{item.label}</Nav.Link>
        ))}
        </Nav>
    </Header>
    </div>
  )
}

export default Navbar;