import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const [productData, setproductData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setproductData(response.data);
    console.log('Data aa gya hoga check kro');

  }
  useEffect(function () {
    getData()
  }, [])
  return (
    <div className='flex flex-wrap gap-8 justify-center p-10 bg-gray-50 min-h-screen'>
      {productData.map((elem, idx) => (
        <div key={idx} className='w-64 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col items-center'>
          <div className='h-48 w-full flex items-center justify-center mb-4 overflow-hidden'>
            <img className='max-h-full object-contain hover:scale-95 transition-transform duration-300' src={elem.image} alt={elem.title} />
          </div>
          <h2 className='text-sm font-bold text-gray-800 text-center line-clamp-2 h-10 mb-2 leading-tight'>{elem.title}</h2>
          <p className='text-lg text-emerald-600 font-bold mt-2'>${elem.price}</p>

        </div>
      ))}
    </div>
  )
}

export default App