import React from 'react';
import { Table } from 'react-bootstrap';

const Order = (props) => {
    const product = JSON.parse(localStorage.getItem("product"));
     const { name, price, quantity, time } = product;
    return (
        <div className="container mt-5 text-center">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Item Price</th>
                        <th>Order Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>${price}</td>
                        <td>{time}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total:  ${price}</td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default Order;