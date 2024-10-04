/* eslint-disable react/prop-types */

import { Filter, Grid, List, Heart, Search } from 'lucide-react'

const Head = () => (
  <div className="flex flex-col md:flex-row justify-between items-center mb-6">
    <div className="flex items-center mb-4 md:mb-0">
      <button className="flex items-center mr-4 text-gray-600 hover:text-gray-800">
        <Filter className="w-5 h-5 mr-2" />
        Filter
      </button>
      <span className="text-gray-600">Showing 1-12 of 50 Results</span>
    </div>
    <div className="flex items-center">
      <div className="mr-4">
        <span className="mr-2 text-gray-600">Short by</span>
        <select className="border rounded p-1">
          <option>9</option>
          <option>12</option>
          <option>24</option>
        </select>
      </div>
      <div className="mr-4">
        <span className="mr-2 text-gray-600">Short by</span>
        <select className="border rounded p-1">
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      <div className="flex">
        <button className="p-2 bg-gray-800 text-white mr-2">
          <Grid className="w-5 h-5" />
        </button>
        <button className="p-2 border">
          <List className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
)

const ProductCard = ({ image, name, price, isNew }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      {isNew && (
        <span className="absolute top-2 right-2 bg-cyan-400 text-white px-2 py-1 text-xs font-bold rounded">
          New
        </span>
      )}
      {isNew && (
        <div className="absolute bottom-2 right-2 flex">
          <button className="bg-gray-800 text-white p-2 rounded-l">
            <Heart className="w-5 h-5" />
          </button>
          <button className="bg-gray-800 text-white p-2">Add to cart</button>
          <button className="bg-gray-800 text-white p-2 rounded-r">
            <Search className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>
    </div>
  </div>
)

export const Header = () => {
  const products = [
    { id: 1, name: "Cold Crewneck Sweater", price: 70.30, image: "/home/shop-1.jpg" },
    { id: 2, name: "Multi-Way Ultra Crop Top", price: 50.00, image: "/home/shop-2.jpg"},
    { id: 3, name: "Side-Tie Tank", price: 40.00, image: "/home/shop-3.jpg" },
    { id: 4, name: "Cold Crewneck Sweater", price: 60.30, image: "/home/shop-4.jpg" },
    { id: 1, name: "Cold Crewneck Sweater", price: 70.30, image: "/home/shop-5.jpg" },
    { id: 2, name: "Multi-Way Ultra Crop Top", price: 50.00, image: "/home/shop-6.jpg"},
    { id: 3, name: "Side-Tie Tank", price: 40.00, image: "/home/shop-36.jpg" },
    { id: 4, name: "Cold Crewneck Sweater", price: 60.30, image: "/home/shop-34.jpg" },
    { id: 1, name: "Cold Crewneck Sweater", price: 70.30, image: "/home/news-1.jpg" },
    { id: 2, name: "Multi-Way Ultra Crop Top", price: 50.00, image: "/home/news-2.jpg"},
    { id: 3, name: "Side-Tie Tank", price: 40.00, image: "/home/news-3.jpg" },
    { id: 4, name: "Cold Crewneck Sweater", price: 60.30, image: "/home/header3.png" },
  ]

  return (
    <div className="max-w-7xl sm:px-7 lg:px-10 container mx-auto px-4 py-16">
      <Head />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
export default Header