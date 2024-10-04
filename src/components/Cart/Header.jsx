/* eslint-disable react/prop-types */

import { useState } from 'react'
import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

const ProductRow = ({ product, onQuantityChange, onRemove }) => {
  return (
    <div className="flex items-center py-4 border-b p-2 sm:p-8">
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-medium text-gray-700">{product.name}</h3>
        <p className="text-sm text-gray-500">Color: {product.color}</p>
        <p className="text-sm text-gray-500">Size: {product.size}</p>
      </div>
      <div className="text-center w-24">
        <p className="text-lg font-medium hidden sm:flex text-gray-700">${product.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center justify-center w-32">
        <button onClick={() => onQuantityChange(product.id, -1)} className="text-gray-500 hidden sm:flex hover:text-gray-700">
          <MinusIcon className="h-5 w-5" />
        </button>
        <span className="mx-2 w-8 hidden sm:flex text-center">{product.quantity.toString().padStart(2, '0')}</span>
        <button onClick={() => onQuantityChange(product.id, 1)} className="text-gray-500 hidden sm:flex hover:text-gray-700">
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="text-center w-24">
        <p className="text-lg font-medium text-gray-700">${(product.price * product.quantity).toFixed(2)}</p>
      </div>
      <div className="w-16 text-right">
        <button onClick={() => onRemove(product.id)} className="text-gray-500 hover:text-gray-700">
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export const Header = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'DUMMY PRODUCT NAME', color: 'Black', size: 'SL', price: 56, quantity: 2, image: '/Cart/cart1.webp' },
    { id: 2, name: 'DUMMY PRODUCT NAME', color: 'Black', size: 'SL', price: 56, quantity: 2, image: '/Cart/cart2.webp' },
   { id: 3, name: 'DUMMY PRODUCT NAME', color: 'Black', size: 'SL', price: 56, quantity: 2, image: '/Cart/cart3.webp' },
 ])

  const handleQuantityChange = (id, change) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: Math.max(0, product.quantity + change) } : product
    ))
  }

  const handleRemove = (id) => {
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <div className="py-8 max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center py-4 px-8 bg-gray-50 border-b">
          <div className="flex-grow">
            <h2 className="text-lg font-medium text-gray-700">PRODUCT</h2>
          </div>
          <div className="w-24 text-center">
            <h2 className="text-lg font-medium hidden sm:flex text-gray-700">PRICE</h2>
          </div>
          <div className="w-32 text-center">
            <h2 className="text-lg font-medium hidden sm:flex text-gray-700">QUANTITY</h2>
          </div>
          <div className="w-24 text-center">
            <h2 className="text-lg font-medium text-gray-700">TOTAL</h2>
          </div>
          <div className="w-16 text-right">
            <h2 className="text-lg font-medium text-gray-700">REMOVE</h2>
          </div>
        </div>
        {products.map(product => (
          <ProductRow 
            key={product.id} 
            product={product} 
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  )
}
export default Header