export const Header = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 relative max-w-7xl sm:px-6 lg:px-8 mt-0 md:my-20">
      <div className="relative bg-white w-full flex flex-col md:flex-row">
        <img
          src="/home/news-3.jpg"
          alt="Modern interior design"
          className="w-full md:w-3/5 lg:w-2/3 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
        />
        <div className="bg-[#F6F6F6] p-6 md:p-8 rounded-l w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">ABOUT HURST</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit. Voluptatem accusantium doloremque laudantium, totam rem ipsam aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
