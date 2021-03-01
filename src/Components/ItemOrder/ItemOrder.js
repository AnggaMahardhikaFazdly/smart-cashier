import React, { Component } from 'react';
import { Col, Row, ListGroup, Badge } from 'react-bootstrap';
import { numberWithCommas } from '../../Utils/Utils';
import TotalPayment from '../TotalPayment/TotalPayment';
import OrderDetail from '../OrderDetail/OrderDetail';

export default class ItemOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            cartDetail: false,
            total: 0,
            notes: '',
        }
    }

    handleShow = (itemCart) => {
        this.setState({
            showModal: true,
            cartDetail: itemCart,
            total: itemCart.total,
            notes: itemCart.notes,
            totalPrice: itemCart.total_price,
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    increase = () => {
        this.setState({
            total: this.state.total + 1
        })
    }

    decrease = () => {
        if (this.state.total !== 1) {
            this.setState({
                total: this.state.total - 1
            })
        }
    }

    changeHandler = (event) => {
        this.setState({
            notes: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

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
                            <ListGroup.Item key={itemCart.id} onClick={() => this.handleShow(itemCart)}>
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

                        <OrderDetail
                            handleClose={this.handleClose}
                            {...this.state}
                            decrease={this.decrease}
                            increase={this.increase}
                            changeHandler={this.changeHandler}
                            handleSubmit={this.handleSubmit}
                        />
                    </ListGroup>
                )}
                <TotalPayment carts={carts} {... this.props} />
            </Col>
        )
    }
}
