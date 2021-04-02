import React, { useEffect, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Product from '../Product/Product';


const Home = () => {
    const icon = <FontAwesomeIcon icon={faSearch} />
    const [products, setProducts] = useState([]);
    useEffect(() => {
       axios.get('https://apple-cupcake-90314.herokuapp.com/')
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error)) 
    },[])

    return (
        <div className="container text-center main-div-class">
            <div className=" container search-div m-2">
                <input type="text" className="searchTerm text-center" placeholder="Search for products" />
                <button type="submit" className="searchButton">Search {icon}</button>
            </div>

            <div className='row'>
                {
                    products.map((product) => <Product product={product} key={product._id} />)
                }
            </div>

        </div>

    );
};

export default Home;