import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { numberWithCommas } from '../Utils/Utils';

const Menus = ({ menu, toCart }) => {
    return (
        <Col md={4} xs={6} className="mb-4">
            <Card className="menu-card" onClick={() => toCart(menu)}>
                <Card.Img variant="top" className="bg-food"
                    src={
                        "assets/images/" +
                        menu.category.name.toLowerCase() +
                        "/" +
                        menu.image
                    } />
                <Card.ImgOverlay>
                    <Card.Title className="bg-food-name">{menu.name}</Card.Title>
                    <Card.Text className="bg-price">
                        Rp. {numberWithCommas(menu.price)}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default Menus;