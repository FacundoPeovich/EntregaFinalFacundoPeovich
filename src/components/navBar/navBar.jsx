import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/cartWidget';
import styles from './styles.module.css'
import NavDropdown from 'react-bootstrap/NavDropdown'


const NavBar = () => {


    return (
        <>
            <div>
                <Navbar bg="dark" data-bs-theme="dark" className={styles.navbar}>
                    <Container>
                        <Navbar.Brand href="#home">FP Informatica</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#categoria1">Categoría 1</NavDropdown.Item>
                            <NavDropdown.Item href="#categoria2">Categoría 2</NavDropdown.Item>
                            <NavDropdown.Item href="#categoria3">Categoría 3</NavDropdown.Item>
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
