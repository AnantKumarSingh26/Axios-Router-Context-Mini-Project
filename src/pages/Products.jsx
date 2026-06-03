import React, { useContext } from 'react'
import { productDatacontext } from '../context/ProductContext'
import { Link } from 'react-router-dom';

const Products = () => {
    const [products] = useContext(productDatacontext);

    return (
        <div className='p-10 flex flex-wrap gap-5 justify-center bg-zinc-100 min-h-screen'>
            {products.length > 0 ? products.map((p) => (
                <Link key={p.id} to={`/products/${p.id}`} className="p-5 border shadow-lg rounded-xl w-64 bg-white flex flex-col items-center hover:scale-105 transition-transform">
                    <div className='w-full h-48 bg-contain bg-no-repeat bg-center mb-4'
                        style={{ backgroundImage: `url(${p.image})` }}>
                    </div>
                    <h1 className='text-sm font-bold text-center line-clamp-2 h-10'>{p.title}</h1>
                    <p className='text-blue-600 font-bold mt-3'>${p.price}</p>
                </Link>
            )) : <h1 className='text-2xl font-bold'>Loading Products...</h1>}
        </div>
    )
}

export default Products