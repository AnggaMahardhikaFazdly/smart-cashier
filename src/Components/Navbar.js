import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Smart Cashier</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
