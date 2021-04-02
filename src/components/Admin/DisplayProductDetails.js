import axios from 'axios';
import React from 'react';
import { Button } from '@material-ui/core';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const DisplayProductDetails = (props) => {
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />
    const editIcon = <FontAwesomeIcon icon={faEdit} />
    const { _id, name, weight, price } = props.product;

    const handleDelete = () => {
        axios.delete(`https://apple-cupcake-90314.herokuapp.com/deleteProduct/${_id}`)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }
    const handleEdit = () => {
        console.log('feature will update soon');
    }

    return (
        
        <div className="container">
            <form className=" text-center">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Weight</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>{name}</td>
                            <td>{weight}</td>
                            <td>${price}</td>
                            <td className=" d-flex justify-content-around">
                                <Button className="tableButton" onClick={handleEdit} variant="contained" color="primary">{editIcon} </Button>
                                <Button className="tableButton" onClick={handleDelete} variant="contained" color="secondary">{deleteIcon} </Button>
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </form>
        </div>
    );
};

export default DisplayProductDetails;