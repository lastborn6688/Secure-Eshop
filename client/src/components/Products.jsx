import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Products = () => {
  return (
  <motion.div
    id="products"
    className='flex flex-col items-center justify-center bg-[hsl(210,23%,88%)] py-10'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
  >
      <h1 className='text-3xl font-bold text-[hsl(209,49%,46%)]'>Our Catalog</h1>
        <p className='text-xl font-semibold flex justify-center items-center w-[80%] text-[hsl(209,56%,58%)] mt-4'>Explore our wide range of products designed to meet your needs.</p>
  <div className="w-full flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 text-center py-8 px-4 sm:px-0 max-w-7xl">
      {[
        { name: 'Power Banks', src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
        { name: 'Portable power station', src: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231' },
        { name: 'Solar fan: 16 inches', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
        { name: 'Solar fan: 18 inches', src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' },
        { name: 'Mobile Phone Chargers', src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' },
        { name: 'Mobile Phone Cables', src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c' }
      ].map((product, idx) => (
        <div key={idx} className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-[370px] h-[340px]">
          <img src={product.src} alt={product.name} className="w-[320px] h-[200px] object-cover rounded mb-4" />
          <p className="font-semibold text-gray-800 text-lg">{product.name}</p>
        </div>
      ))}
    </div>
  </div>
  <Link
  to="/products"
  className="bg-[rgb(59,118,174)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(50,100,150)]"
>
  See More
</Link>
  </motion.div>
  )
}

export default Products
