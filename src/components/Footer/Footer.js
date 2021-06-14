import React from 'react'
import styles from  './Footer.module.css'
import logo from 'assets/logo.svg'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

const links = [
    {label: 'Catergories', to: '/categories', id: 1},
    {label: 'Types', to: '/types', id: 2 },
    {label: 'Search', to: '/search', id: 3},
    // {label: 'Blog', to: '/blog', id: 4 },
    {label: 'About Us', to: '/about', id: 5},
    {label: 'Contacts', to: '/contacts', id: 6}
  ]
  

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <img src={logo} alt='logo'/>
            <Nav className={styles.Nav} activeKey="/home">
              {links.map(x => (
              <Nav.Link className='px-4'key={x.id} as={Link} to={x.to}>{x.label}</Nav.Link>
              ))}
            </Nav>
            <div className={styles.divider}>
              <hr/>
            </div>
        </div> 
    )
}

export default Footer;