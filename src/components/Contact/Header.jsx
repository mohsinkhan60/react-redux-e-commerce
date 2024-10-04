/* eslint-disable react/prop-types */
  
import { MapPin, Phone, Mail } from 'lucide-react'

const AddressCard = ({ title, address, phone, email }) => (
  <div className="bg-gray-200 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <div className="flex items-start mb-3">
      <MapPin className="w-5 h-5 text-gray-500 mr-2 mt-1 flex-shrink-0" />
      <p className="text-gray-600">{address}</p>
    </div>
    <div className="flex items-center mb-3">
      <Phone className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />
      <p className="text-gray-600">{phone}</p>
    </div>
    <div className="flex items-center">
      <Mail className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />
      <p className="text-gray-600">{email}</p>
    </div>
  </div>
)

const Divider = () => (
  <div className="flex items-center justify-center w-full my-8">
    <div className="border-t border-gray-300 flex-grow"></div>
    <div className="mx-4">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#D1D5DB"/>
      </svg>
    </div>
    <div className="border-t border-gray-300 flex-grow"></div>
  </div>
)

export const Header = () => {
  const offices = [
    {
      title: "New York Office",
      address: "PO Box 16122 Collins Street West Victoria 8007 Canada",
      phone: "(+48) 564-334-21-22-34",
      email: "info@example.com"
    },
    {
      title: "London Office",
      address: "PO Box 16122 Collins Street West Victoria 8007 London",
      phone: "(+48) 564-334-21-22-34",
      email: "info@example.com"
    },
    {
      title: "Netherlands Office",
      address: "PO Box 16122 Collins Street West Victoria 8007 Netherlands",
      phone: "(+48) 564-334-21-22-34",
      email: "info@example.com"
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Addresses</h2>
        <p className="text-center text-gray-600 mb-8">
          Excepteur sint occaecat cupidatat non proident sunt
        </p>
        <Divider />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <AddressCard key={index} {...office} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Header