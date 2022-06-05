import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>
                            <img style={{ height: "20px" }} src={logo} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/inventory">Inventory</Link>
                        <Link to="/login">Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;