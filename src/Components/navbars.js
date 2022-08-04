import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

const openCart = () => {
  // console.log('seen');
  document.querySelector('.cart-overlay').style.visibility = 'visible'
  document.querySelector('.cart').style.transform = 'translateX(0%)'
}

const navbars = ({cartItems}) => {
    return ( 
        <div>
            <Navbar collapseOnSelect expand="lg" bg="gold" variant="dark" className='nav-container'>
  <Container className='navbar_container'>
  <Navbar.Brand onClick={openCart} className='navbar_a' href="#home"><i className="fas fa-cart-plus"></i> <strong className="cart-length">{cartItems.length}</strong> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features" className=' nav-links'>Features</Nav.Link>
      <Nav.Link href="#pricing" className=' nav-links'>Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown" className=' nav-links'>
        <NavDropdown.Item href="#action/3.1" className=' nav-links'>Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" className=' nav-links'>Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className=' nav-links'>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4" className=' nav-links'>Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets" className=' nav-links'>More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes" className=' nav-links'>
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
     );
}
 
export default navbars;