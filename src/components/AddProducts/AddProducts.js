import axios from 'axios';
import React, { useState } from 'react';
import './AddProducts.css';
import { useForm } from "react-hook-form";


const AddProducts = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const addData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL,
            quantity: 1,
            time: new Date().toLocaleString()
        };

        const url = `https://apple-cupcake-90314.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '4295ac4d47b569312bea67b440cdbdbb');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder="product name" ref={register} />
                <br />
                <input name="price" placeholder="price" type="text" ref={register} />
                <br />
                <input name="weight" placeholder="weight" type="text" ref={register} />
                <br />
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <input className="addproductButton" type="submit" />
            </form>
            
        </div>
    );
};

export default AddProducts;