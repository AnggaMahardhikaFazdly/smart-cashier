import React, { Component } from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../Utils/Constants';
import 'boxicons';

const Icon = ({ name }) => {
    if (name === "Foods") return <box-icon name="dish" color="black"></box-icon>
    if (name === "Drinks") return <box-icon name="coffee-togo" color="black"></box-icon>
    if (name === "Snacks") return <box-icon name="cookie" color="black"></box-icon>
    if (name === "Dessert") return <box-icon name="cake" color="black"></box-icon>

    return <box-icon type="regular" name="dish" color="black"></box-icon>
}
export default class Categories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [],
        }
    }

    componentDidMount() {
        axios.get(API_URL + "categories")
            .then(res => {
                const categories = res.data;
                this.setState({ categories });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { categories } = this.state
        const { changeCategory, selectedCategory } = this.props
        return (
            <Col md={1} mt="1">
                <ListGroup>
                    {categories && categories.map((category) => (
                        <ListGroup.Item key={category.id} onClick={() => changeCategory(category.name)} className={selectedCategory === category.name && "active-category"} style={{ cursor: 'pointer' }}>
                            <div style={{ textAlign: 'center' }}>
                                <Icon name={category.name} />
                            </div>
                            <div>
                                <p style={{ textAlign: 'center' }}>{category.name}</p>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        )
    }
}
