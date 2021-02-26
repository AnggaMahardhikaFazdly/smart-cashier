import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import { Navbar, Categories, Menus, Payment } from './Components';
import { API_URL } from './Utils/Constants';
import axios from 'axios';
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      selectedCategory: ''
    }
  }

  componentDidMount() {
    axios.get(API_URL + "products?category.name=" + this.state.selectedCategory)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })
  }

  changeCategory = (value) => {
    this.setState({
      selectedCategory: value,
      menus: []
    })

    axios.get(API_URL + "products?category.name=" + value)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { menus, selectedCategory } = this.state
    return (
      <div className="App">
        <Navbar />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <Categories changeCategory={this.changeCategory} selectedCategory={selectedCategory} />
              <Col>
                <h5 className="menu-title"><strong>{selectedCategory}</strong></h5>
                <hr />
                <Row>
                  {menus && menus.map((menu) => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                    />
                  ))}
                </Row>
              </Col>
              <Payment />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
