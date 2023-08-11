import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="md">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="header__nav ">
          <Nav.Link as={Link} to="/catalog">CATALOGUE</Nav.Link>
          <Nav.Link as={Link} to="/fashion">FASHION</Nav.Link>
          <Nav.Link as={Link} to="/favorites">FAVOURITE</Nav.Link>
          <Nav.Link as={Link} to="/festyle">FESTYLE</Nav.Link>
          <Nav.Link>
            <ul>
              <li>
                <button className="header_nav-btn">
                  <p>SIGN UP</p>
                </button>
              </li>
            </ul>
          </Nav.Link>
        </Nav>
</Navbar.Collapse>
    </Navbar> 
  );
}

export default NavBar; 
