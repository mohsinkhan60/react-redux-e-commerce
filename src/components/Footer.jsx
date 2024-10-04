

const Footer = () => {
  return (
    <footer className="bg-[#EAECEB] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-bold">castro<span className="text-red-500">.</span></h2>
          </div>

          {/* Category */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <ul className="space-y-2">
              {['Men', 'Women', 'Kids', 'Accessories', 'Shoe'].map((item) => (
                <li key={item}><a href="#" className="text-gray-600 hover:text-gray-900">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Useful Link */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Useful Link</h3>
            <ul className="space-y-2">
              {['News & Tips', 'About Us', 'Terms & Conditions', 'Our Shop', 'Contact Us'].map((item) => (
                <li key={item}><a href="#" className="text-gray-600 hover:text-gray-900">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">4708 Ruecker Wall, Kassandratown, HI</p>
            <p className="text-gray-600 mb-2">+2(305) 587-3407</p>
            <p className="text-gray-600 mb-4">info@example.com</p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'vimeo', 'google-plus'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">4708 Ruecker Wall, Kassandratown, HI 97729</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-black flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <p>Made By Mohsin Khan @</p>
          </div>
          <p className="text-gray-500 text-sm">Castro © 2024 All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer