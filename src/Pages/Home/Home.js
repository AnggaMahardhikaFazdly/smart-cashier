import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Categories, Menus, ItemOrder } from '../../Components';
import { API_URL } from '../../Utils/Constants';
import axios from 'axios';
import swal from 'sweetalert';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menus: [],
            selectedCategory: '',
            carts: []
        }
    }

    componentDidMount() {
        axios
            .get(API_URL + "products?category.name=" + this.state.selectedCategory)
            .then((res) => {
                const menus = res.data;
                this.setState({ menus });
            })
            .catch(error => {
                console.log(error);
            })

        axios
            .get(API_URL + "carts")
            .then((res) => {
                const carts = res.data;
                this.setState({ carts });
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidUpdate(prevState) {
        if (this.state.carts !== prevState.carts) {
            axios
                .get(API_URL + "carts")
                .then((res) => {
                    const carts = res.data;
                    this.setState({ carts });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    changeCategory = (value) => {
        this.setState({
            selectedCategory: value,
            menus: []
        })

        axios
            .get(API_URL + "products?category.name=" + value)
            .then((res) => {
                const menus = res.data;
                this.setState({ menus });
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleCarts = (value) => {
        axios
            .get(API_URL + "carts?product.id=" + value.id)
            .then((res) => {
                if (res.data.length === 0) {
                    const cart = {
                        total: 1,
                        total_price: value.price,
                        product: value
                    }

                    axios
                        .post(API_URL + "carts", cart)
                        .then((res) => {
                            swal({
                                title: "Success!",
                                text: cart.product.name + " Already Into the Cart!",
                                icon: "success",
                                button: false,
                                timer: 2000,
                            });
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    const cart = {
                        total: res.data[0].total + 1,
                        total_price: res.data[0].total_price + value.price,
                        product: value,
                    }

                    axios.put(API_URL + "carts/" + res.data[0].id, cart)
                        .then((res) => {
                            swal({
                                title: "Success!",
                                text: cart.product.name + " Already Into the Cart!",
                                icon: "success",
                                button: false,
                                timer: 2000,
                            });
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { menus, selectedCategory, carts } = this.state
        return (
            <div className="home">
                <div className="mt-3">
                    <Container fluid>
                        <Row>
                            <Categories changeCategory={this.changeCategory} selectedCategory={selectedCategory} />
                            <Col>
                                <h5 className="menu-title"><strong>{selectedCategory}</strong></h5>
                                <hr />
                                <Row className="overflow-auto menu">
                                    {menus && menus.map((menu) => (
                                        <Menus
                                            key={menu.id}
                                            menu={menu}
                                            handleCarts={this.handleCarts}
                                        />
                                    ))}
                                </Row>
                            </Col>
                            <ItemOrder carts={carts} {... this.props} />
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
