/* eslint-disable react/prop-types */

const CategoryItem = ({ image, title }) => (
  <div className="flex flex-col items-center transition-transform transform hover:scale-105">
    <div className="relative w-52 h-52 rounded-full overflow-hidden mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition duration-300 ease-in-out hover:filter hover:saturate-0 hover:bg-red-500"
      />
      <div className="absolute inset-0 bg-red-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50"></div>
    </div>
    <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">Collections</p>
  </div>
);

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
);

export const Category = () => {
  const categories = [
    { title: 'Women', image: '/home/category-1.png' },
    { title: 'Kids', image: '/home/category-2.png' },
    { title: 'Summer', image: '/home/category-3.png' },
    { title: 'Gents', image: '/home/category-4.png' },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Top Category</h2>
        <p className="text-center text-gray-600 mb-8">
          Follow the most popular trends and get exclusive items from castro shop
        </p>
        <Divider />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {categories.map((category, index) => (
            <CategoryItem key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
