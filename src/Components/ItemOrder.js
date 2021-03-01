import React, { Component } from 'react';
import { Col, Row, ListGroup, Badge } from 'react-bootstrap';
import { numberWithCommas } from '../Utils/Utils';
import TotalPayment from './TotalPayment';

export default class ItemOrder extends Component {
    render() {
        const { carts } = this.props
        return (
            <Col md={3} mt="2">
                <div className="payment-title">
                    <box-icon name="wallet"></box-icon>
                    <h5><strong>Items of Order</strong></h5>
                </div>
                <hr />
                {carts.length !== 0 && (
                    <ListGroup variant="flush">
                        {carts.map((itemCart) => (
                            <ListGroup.Item key={itemCart.id}>
                                <Row>
                                    <Col xs={2}>
                                        <p>
                                            <Badge pill variant="danger">
                                                {itemCart.total}
                                            </Badge>
                                        </p>
                                    </Col>
                                    <Col>
                                        <small>{itemCart.product.name}</small>
                                    </Col>
                                    <Col>
                                        <small className="float-right">Rp. {numberWithCommas(itemCart.total_price)}</small>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
                <TotalPayment carts={carts} {... this.props} />
            </Col>
        )
    }
}
