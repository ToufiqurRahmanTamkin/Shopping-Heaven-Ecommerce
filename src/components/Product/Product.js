import axios from 'axios';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import './Product.css'
import { useHistory } from 'react-router';
import Order from '../Order/Order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const [clicked, setClicked] = useState(false);
    // console.log(props.product);
    const { _id, name, price, weight, imageURL } = props.product;
    const history = useHistory();
    const showDetails = () => {
        const url = `checkout/${_id}`;
        history.push(url);

        const data = {
            name: name,
            price: price,
            weight: weight
        }

        axios.put(`https://apple-cupcake-90314.herokuapp.com/updateProduct/${_id}`, {
            body: JSON.stringify(data)
        }).then(res => {
            setClicked(_id);

            localStorage.setItem("product", JSON.stringify(res.data.value));

        });
    }

    return (

        <div className="col-md-3 align-items-center mt-5">
            <div className="d-flex justify-content-around">
                <Card id="card" className="homeCardClass">
                    <Card.Img id="team-image" className="cardImageClass" variant="top" src={imageURL} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Title>Weight: {weight}</Card.Title>
                        <Card.Title>Price: {price}</Card.Title>
                        <Button onClick={() => showDetails()} variant="contained" color="primary">{cartIcon} Buy Now </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default Product;