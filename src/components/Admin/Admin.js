import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Table } from 'react-bootstrap';

const Admin = () => {

    const { register, handleSubmit } = useForm();
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
        const url = `http://localhost:5000/addProduct`;
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
        <div className="container text-center">
            <div className="row">
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input name="name" placeholder="Enter name" ref={register} />
                                    </td>
                                    <td>
                                        <input name="weight" placeholder="Enter weight" type="text" ref={register} />
                                    </td>
                                </tr>
                            </tbody>

                            <thead>
                                <tr>
                                    <th>Add Price</th>
                                    <th>Add Photo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <input name="price" placeholder="Enter price" type="text" ref={register} /> </td>
                                    <td> <input name="exampleRequired" type="file" onChange={handleImageUpload} /> </td>
                                </tr>
                                <tr>
                                    <td> </td>
                                    <td> <input className="submitButtonClass" type="submit" /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;