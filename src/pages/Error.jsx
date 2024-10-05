import { Link } from "react-router-dom"



export const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Page Not Found</h1>
          <p className="mt-2 text-sm text-gray-500">
            Home <span className="mx-2">&gt;</span> 404
          </p>
        </div>
        <div className="mt-8">
          <div className="text-9xl font-bold text-gray-900">404</div>
          <h2 className="mt-4 text-3xl font-medium text-gray-600">Oops! Page Not Found!</h2>
          <p className="mt-4 text-gray-500">
            Please go back to <Link to={"/"} className="text-red-500 hover:underline">Back homepage</Link>
          </p>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <Link to={"/"} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800">
            Go Back To Home
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link to={"/shop"} className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Continue Shopping
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Error