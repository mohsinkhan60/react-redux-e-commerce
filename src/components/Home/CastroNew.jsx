/* eslint-disable react/prop-types */

import { ArrowRight } from "lucide-react";
import { Truck, CreditCard, Clock, RotateCcw } from "lucide-react";

const NewsItem = ({ date, title, author, comments, description, image }) => (
  <div className="bg-white hover:shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <p className="text-gray-600 text-sm mb-2">— {date}</p>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">
        by {author} | {comments} Comments
      </p>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#"
        className="inline-flex items-center text-gray-800 font-semibold hover:text-gray-600"
      >
        Read More <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  </div>
);
const FeatureItem = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4">
      <Icon className="w-12 h-12 text-gray-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

const Divider = () => (
  <div className="flex items-center justify-center w-full my-8">
    <div className="border-t border-gray-300 flex-grow"></div>
    <div className="mx-4">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
          fill="#D1D5DB"
        />
      </svg>
    </div>
    <div className="border-t border-gray-300 flex-grow"></div>
  </div>
);

export const CastroNew = () => {
  const newsItems = [
    {
      date: "May 05, 2020",
      title: "Why is a ticket to lagos so expensive?",
      author: "admin",
      comments: "03 Comments",
      description:
        "Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.",
      image: "/home/news-1.jpg",
    },
    {
      date: "May 04, 2020",
      title: "But i must explain to you how all this mistaken idea.",
      author: "admin",
      comments: "07 Comments",
      description:
        "Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.",
      image: "/home/news-2.jpg",
    },
    {
      date: "May 03, 2020",
      title: "The Biebers Just Switched Up Their Couple Style",
      author: "admin",
      comments: "05 Comments",
      description:
        "Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.",
      image: "/home/news-3.jpg",
    },
  ];
  const features = [
    {
      Icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on oder over $100",
    },
    {
      Icon: CreditCard,
      title: "Secure Payment",
      description: "We ensure secure payment with PEV",
    },
    {
      Icon: Clock,
      title: "Support 24/7",
      description: "Contact us 24 hours a day, 7 days a week",
    },
    {
      Icon: RotateCcw,
      title: "30 Days Return",
      description: "Simply return it within 30 days for an exchange.",
    },
  ];

  return (
    <section className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Castro News
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Excepteur sint occaecat cupidatat non proident sunt
      </p>
      <Divider />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </div>
      <hr className="font-bold mt-10" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
      <hr className="mb-10" />
    </section>
  );
};
export default CastroNew;
