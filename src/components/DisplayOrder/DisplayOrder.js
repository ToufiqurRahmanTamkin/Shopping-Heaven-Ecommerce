import React from 'react';

const DisplayOrder = (props) => {
    console.log(props.product);
    const {name,price,time,quantity} = props.product;
    return (
        <div>
            <h1>{name}</h1>            
            <h1>{quantity}</h1>
            <h1>Total:  {price}</h1>
            <h1>{time}</h1>
        </div>
    );
};

export default DisplayOrder;