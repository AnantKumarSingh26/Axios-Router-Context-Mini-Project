import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const productDatacontext = createContext();

const ProductContext = (props) => {

    const [products, setproducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setproducts(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <productDatacontext.Provider value={[products, setproducts]}>
            {props.children}
        </productDatacontext.Provider>
    )
}

export default ProductContext