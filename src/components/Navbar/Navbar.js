import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { Navbar as Header, Nav, NavDropdown } from 'react-bootstrap';
import Wishlist from '../../assets/wishlist.png'
import useLocalStorage from '../../utils/useLocalStorage'

const links = [
  {label: 'Catergories', to: '/categories', id: 1},
  {label: 'Types', to: '#', id: 2},
  {label: 'Search', to: '/searchPage', id: 3},
  {label: 'About Us', to: '/about', id: 4},
  {label: 'Contacts', to: '/contacts', id: 5}
]



const Navbar = () => {

  const [wishlist] = useLocalStorage('wishlist',[]);
  
  return (
    <>
      <div className={styles.wrapper}>
          <span>Order online or call us (1800) 000 8808</span><Header.Brand to='/wishlist' as={ Link }><span><img src={Wishlist} alt='wishlist' to='/wishlist' as={ Link } />WISHLIST <sup>{wishlist.length}</sup></span></Header.Brand>
      </div>
      <hr/>
      <div className={styles.navlinks}>
        <Header className={styles.header} bg="white" variant="white">
          <Header.Brand to='/' as={ Link }><img src={logo} alt='logo'/></Header.Brand>
          <Nav className="ml-auto" >
            {links.map(x => x.label === 'Types' ? (
             <NavDropdown title="Types" id="basic-nav-dropdown" className={styles.dropDown}>
             <NavDropdown.Item to="/glassesPage" as={Link}>Glasses</NavDropdown.Item>
             <NavDropdown.Item to="/categoriesPage" as={Link}>Categories</NavDropdown.Item>
             <NavDropdown.Item to="/ingredientsPage" as={Link}>Ingredients</NavDropdown.Item>
           </NavDropdown>):( 
            <Nav.Link className='px-5' key={x.id} as={Link} to={x.to}>{x.label}</Nav.Link>
          ))}
          </Nav>
        </Header>
      </div>
    </>
  )
}

export default Navbar;