import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Order from '../Order/Order';
import { Button } from '@material-ui/core';
import { Table } from 'react-bootstrap';

const Checkout = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(0);
    const [checkOrder, setCheckOrder] = useState(false);

    const handleCheckout = () => {
        const { _id, name, price, weight } = productDetails;
        const cartData = {
            name: name,
            price: price,
            weight: weight
        }

        axios.put(`http://localhost:5000/updateProduct/${_id}`, {
            body: JSON.stringify(cartData)
        }).then(res => {
            setCheckOrder(_id);
            localStorage.setItem("product", JSON.stringify(res.data.value));
        });

    }

    useEffect(() => {

        if (!productDetails) {
            // console.log("useEffect");
            axios.get(`http://localhost:5000/${id}`)
                .then((response) => setProductDetails(response.data))
                .catch((error) => console.log(error))
        }

    }, [id])

    return (
        <div>
            {
                !checkOrder &&
                <div className="container mt-5 text-center">

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Item Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>{productDetails.name}</td>
                                <td>{productDetails.quantity}</td>
                                <td>${productDetails.price}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Total:  ${productDetails.price}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><Button onClick={handleCheckout} variant="contained" color="primary">Checkout</Button></td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            }

            {
                checkOrder && <Order product={productDetails} />
            }
        </div>

    );
};

export default Checkout;