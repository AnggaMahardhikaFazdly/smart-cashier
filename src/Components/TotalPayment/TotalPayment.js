import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Button } from "react-bootstrap";
import { numberWithCommas } from "../../Utils/Utils";
import { API_URL } from '../../Utils/Constants';
import 'boxicons';

export default class TotalPayment extends Component {
  submitTotal = (totalPayment) => {
    const order = {
      total_pay: totalPayment,
      menus: this.props.carts
    }

    axios.post(API_URL + "orders", order).then((res) => {
      this.props.history.push('/success-payment')
    })
  };

  render() {
    const totalPayment = this.props.carts.reduce(function (result, item) {
      return result + item.total_price;
    }, 0);
    const tax = 10
    const totalTax = Math.round(tax * totalPayment) / 100

    return (
      <>
        {/* Web */}
        <div className="fixed-bottom d-none d-md-block total">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-4">
              <p>
                Sub Total{" "}
                <small className="float-right mr-2">
                  Rp. {numberWithCommas(totalPayment)}
                </small>
              </p>
              <p>
                Tax{" "}
                <small className="float-right mr-2 tax">
                  {(tax)} %
                </small>
              </p>
              <p>
                Total {" "}
                <strong className="float-right mr-2">
                  Rp. {numberWithCommas(totalPayment + totalTax)}
                </strong>
              </p>
              <Button
                variant="success"
                block
                className="mb-2 mt-2 mr-2"
                size="lg"
                onClick={() => this.submitTotal(totalPayment)}
              >
                <box-icon name='money'></box-icon><strong>Pay Now</strong>
              </Button>
            </Col>
          </Row>
        </div>

        {/* Mobile  */}
        <div className="d-sm-block d-md-none">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-4">
              <p>
                SubTotal{" "}
                <small className="float-right mr-2">
                  Rp. {numberWithCommas(totalPayment)}
                </small>
              </p>
              <p>
                Tax{" "}
                <small className="float-right mr-2 tax">
                  {(tax)} %
                </small>
              </p>
              <p>
                Total {" "}
                <strong className="float-right mr-2">
                  Rp. {numberWithCommas(totalPayment + totalTax)}
                </strong>
              </p>
              <Button
                variant="success"
                block
                className="mb-2 mt-4 mr-2"
                size="lg"
                onClick={() => this.submitTotal(totalPayment)}
              >
                <box-icon name='money'></box-icon> <strong>Pay Now</strong>
              </Button>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}