import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [ user ] = useAuthState( auth );
    const handleSignOut = () => {
        signOut( auth );
    };
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img style={{ height: "20px" }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-white' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='text-white' href="home#experts">Experts</Nav.Link>
                        <Nav.Link className='text-white' href="home#services">Services</Nav.Link>
                        {
                            user && <>
                                <NavDropdown className='' title="Manage" id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/addservice">Add Service</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manageservices">Manage</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
                        {
                            user ? <Nav.Link onClick={handleSignOut} className='text-white' as={Link} to="/login">Sign Out</Nav.Link> : <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;