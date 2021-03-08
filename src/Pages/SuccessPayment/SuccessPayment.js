import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Utils/Constants";

export default class SuccessPayment extends Component {
    componentDidMount() {
        axios
            .get(API_URL + "carts")
            .then((res) => {
                const carts = res.data;
                carts.map(function (item) {
                    return axios
                        .delete(API_URL + "carts/" + item.id)
                        .then((res) => console.log(res))
                        .catch((error) => console.log(error))
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="mt-4 text-center">
                <Image src="assets/images/success.png" className="success-page" />
                <h2>Payment Has Been Completed!</h2>
                <br />
                <Button variant="primary" as={Link} to="/">
                    Back
                </Button>
            </div>
        );
    }
}