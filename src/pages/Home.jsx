import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-zinc-50'>
            <h1 className='text-4xl font-bold mb-6 text-zinc-800'>Welcome to our Fake Store</h1>
            <Link to="/products" className='px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors'>
                Explore Products
            </Link>
        </div>
    )
}

export default Home