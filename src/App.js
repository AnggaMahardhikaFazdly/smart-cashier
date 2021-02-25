import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import { Navbar, Categories, Results, Menus } from './Components';
import { API_URL } from './Utils/Constants';
import axios from 'axios';
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
    }
  }

  componentDidMount() {
    axios.get(API_URL + "products")
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { menus } = this.state
    return (
      <div className="App">
        <Navbar />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <Categories />
              <Col>
                <h4><strong>Product List</strong></h4>
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
              <Results />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
