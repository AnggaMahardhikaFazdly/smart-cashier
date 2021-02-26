import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class Results extends Component {
    render() {
        return (
            <Col md={3} mt="2">
                <div className="payment-title">
                    <box-icon name="wallet"></box-icon>
                    <h5><strong>Payment</strong></h5>
                </div>
                <hr />
            </Col>
        )
    }
}
