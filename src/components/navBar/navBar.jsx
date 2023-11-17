import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/cartWidget';
import styles from './styles.module.css'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, NavLink } from 'react-router-dom';
import logofp from "../../assets/logofp.png"

const NavBar = () => {
    return (
        <>
            <div>
                <Navbar bg="dark" data-bs-theme="dark" className={styles.navbar}>
                    <Container>
                        <Navbar.Brand>
                            <Link to={`/`}>
                                <img src={logofp} alt="Logo" width="40" height="40" />
                            </Link>
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to={`/category/pantalones`}>Pantalones</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to={`/category/remeras`}>Remeras</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to={`/category/camperas`}>Camperas</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to="#contact">Contacto</Nav.Link>
                        </Nav>
                    </Container>
                    <CartWidget />
                </Navbar>
            </div>
        </>
    )
}

export default NavBar;