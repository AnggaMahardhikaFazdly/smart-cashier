import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { numberWithCommas } from "../../Utils/Utils";
import 'boxicons';

const OrderDetail = ({
    showModal,
    handleClose,
    cartDetail,
    total,
    notes,
    increase,
    decrease,
    changeHandler,
    handleSubmit,
    totalPrice,
    deleteOrder
}) => {
    if (cartDetail) {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {cartDetail.product.name}{" "}
                        <strong>
                            (Rp. {numberWithCommas(cartDetail.product.price)})
                        </strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Total Price</Form.Label>
                            <p>
                                <strong>
                                    Rp. {numberWithCommas(totalPrice)}
                                </strong>
                            </p>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Items</Form.Label>
                            <br />
                            <Button size="sm" className="mr-2 btn-items" onClick={() => decrease()}>
                                <box-icon type='solid' name='chevron-left-square'></box-icon>
                            </Button>

                            <strong>{total}</strong>

                            <Button size="sm" className="ml-2 btn-items" onClick={() => increase()}>
                                <box-icon type='solid' name='chevron-right-square' ></box-icon>
                            </Button>
                            &nbsp;
                            <span><strong>pcs</strong></span>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                name="notes"
                                placeholder="Example : Spicy and Extra Sauce"
                                value={notes}
                                onChange={(event) => changeHandler(event)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => deleteOrder(cartDetail.id)}>
                        <box-icon type='solid' name='trash-alt'></box-icon> Delete Order
                    </Button>
                </Modal.Footer>
            </Modal >
        );
    } else {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Empty</Modal.Title>
                </Modal.Header>
                <Modal.Body>Empty!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )

    }

}

export default OrderDetail;
