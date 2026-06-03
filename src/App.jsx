import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const App = () => {

  return (
    <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/products' element={<Products/>}/>
        <Route path ='/products/:id' element={<ProductDetails/>}/>
    </Routes>
  )
}

export default App





  // const [productData, setproductData] = useState([]);

  // const getData = async () => {
  //   const response = await axios.get('https://fakestoreapi.com/products')
  //   setproductData(response.data);
  //   console.log('Data aa gya hoga check kro');

  // }
  // useEffect(function () {
  //   getData()
  // }, [])