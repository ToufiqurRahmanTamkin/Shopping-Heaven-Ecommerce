import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayProductDetails from './DisplayProductDetails';
const ManageProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            {
                products.map((product) => <DisplayProductDetails product={product} key={product._id} />)
            }
        </>
    );
};

export default ManageProduct;