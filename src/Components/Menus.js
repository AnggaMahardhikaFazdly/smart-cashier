import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { numberWithCommas } from '../Utils/Utils';

const Menus = ({ menu, toCart }) => {
    return (
        <Col md={4} xs={6} className="mb-4">
            <Card className="shadow" onClick={() => toCart(menu)}>
                <Card.Img
                    variant="top"
                    src={
                        "assets/images/" +
                        menu.category.name.toLowerCase() +
                        "/" +
                        menu.image
                    }
                />
                <Card.Body>
                    <Card.Title>{menu.name} <strong>({menu.code})</strong></Card.Title>
                    <Card.Text>Rp. {numberWithCommas(menu.price)}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Menus;