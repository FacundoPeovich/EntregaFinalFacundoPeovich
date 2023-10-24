import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/cartWidget';
import styles from './styles.module.css'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {


    return (
        <>
            <div>
                <Navbar bg="dark" data-bs-theme="dark" className={styles.navbar}>
                    <Container>
                        <Navbar.Brand href="#home"><Link to={`/`}>FP Informatica</Link></Navbar.Brand>
                        <Nav className="me-auto">
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#jewelery"><NavLink to={`./category/jewelery`}>Jewelery</NavLink></NavDropdown.Item>
                                <NavDropdown.Item href="#electronics"><NavLink to={`./category/electronics`}>Electronics</NavLink></NavDropdown.Item>
                                <NavDropdown.Item href="#mensclothing"><NavLink to={`/category/men's%20clothing`}>Men's Clothing</NavLink></NavDropdown.Item>
                                <NavDropdown.Item href="#womensclothing"><NavLink to={`./category/women's%20clothing`}>Women's Clothing</NavLink></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#contact" >Contacto</Nav.Link>
                        </Nav>
                    </Container>
                    <CartWidget />
                </Navbar>

            </div>



        </>
    )
}

export default NavBar;
