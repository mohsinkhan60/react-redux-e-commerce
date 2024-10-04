/* eslint-disable react/prop-types */

import { FaTwitter, FaRss, FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa'

const Team = ({ image, name, title, description }) => (
  <div className="bg-white p-6 rounded-lg hover:shadow-md text-center">
    <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
    <p className="text-sm text-gray-500 uppercase mb-3">{title}</p>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <div className="flex justify-center space-x-3">
      <FaTwitter className="text-gray-400 hover:text-blue-400 cursor-pointer" />
      <FaRss className="text-gray-400 hover:text-orange-400 cursor-pointer" />
      <FaFacebookF className="text-gray-400 hover:text-blue-600 cursor-pointer" />
      <FaLinkedinIn className="text-gray-400 hover:text-blue-700 cursor-pointer" />
      <FaPinterestP className="text-gray-400 hover:text-red-600 cursor-pointer" />
    </div>
  </div>
)

const TeamMember = () => {
  const teamMembers = [
    {
      image: "/about/1.webp",
      name: "NANCY HOLLAND",
      title: "CHAIRMAN",
      description: "There are many variations of passage of Lorem Ipsum available, but the in majority have suffered.",
    },
    {
      image: "/about/2.webp",
      name: "HEATHER ESTRADA",
      title: "CHIEF MARKETING",
      description: "There are many variations of passage of Lorem Ipsum available, but the in majority have suffered.",
    },
    {
      image: "/about/3.webp",
      name: "NANCY HOLLAND",
      title: "FASHION DESINGER",
      description: "There are many variations of passage of Lorem Ipsum available, but the in majority have suffered.",
    },
    {
      image: "/about/1.webp",
      name: "SARA KNIGHT",
      title: "GRAPHIC DESIGN",
      description: "There are many variations of passage of Lorem Ipsum available, but the in majority have suffered.",
    },
  ]

  return (
    <div className=" py-16 max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Team Member</h2>
      <div className="w-16 h-1 bg-orange-500 mx-auto mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Team key={index} {...member} />
        ))}
      </div>
    </div>
  )
}
export default TeamMember