import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/cartWidget';
import styles from './styles.module.css'


const NavBar = () => {


    return (
        <>
            <div>
                <Navbar bg="dark" data-bs-theme="dark" className={styles.navbar}>
                    <Container>
                        <Navbar.Brand href="#home">FP Informatica</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#products">Productos</Nav.Link>
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
