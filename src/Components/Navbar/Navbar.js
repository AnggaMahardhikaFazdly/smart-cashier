import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand className="brand">SMART CASHIER by SkyLounge Restaurant</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
