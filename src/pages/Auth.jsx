import { useState } from "react";

export const Auth = () => {
  const [signState, setSignState] = useState("Login");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {signState}
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          {signState === "Register" && (
            <input
              type="text"
              placeholder="Your name..."
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
              className=" border p-2 w-full"
              required
            />
          )}

          {/* Email input */}
          <input
            type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email..."
            className=" border p-2 w-full"
            required
          />

          {/* Password input */}
          <input
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            className=" border p-2 w-full"
            required
          />

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              {signState}
            </button>
          </div>
          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2">
              {signState === "Login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <button
              type="button"
              onClick={() =>
                setSignState(signState === "Login" ? "Register" : "Login")
              }
              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              {signState === "Login" ? "Register" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Auth;
