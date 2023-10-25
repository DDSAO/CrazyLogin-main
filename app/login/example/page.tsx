"use client";
import { useState, FormEvent } from "react";
import RememberMeCheckbox from "./RememberMeCheckbox";

const LoginPage: React.FC = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  //used to check email state
  const [email, setEmail] = useState<string>("");
  //used to check password state
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    //testing
    console.log("eamil：" + email, "password: " + password);

    //submit username and password to the backend
    if (true) {
      setMessage("Logged in successfully");
      //if match, return tooken
      //if token exsit and RememberMe is true, svae jwt into local storage
      if (true && rememberMe === true) {
        localStorage.setItem("name", "xxxx");
      }
    }
    //if doesnt match
    else {
      setMessage("Failed to login");
    }
  };

  //used to change rememberMe state
  const handleRememberChange = (checked: boolean) => {
    setRememberMe(checked);
  };

  // type Func = (...args,any[]) => any

  // const  debounce=(func: Func,wait:number) =>{
  //       let timeout:number;
  //       return function () {
  //           const context = this;
  //           const args = arguments;
  //           clearTimeout(timeout);
  //           timeout = setTimeout(function () {
  //               func.apply(context, args);
  //           }, wait);
  //       };
  //   }

  return (
    <div className="">
      <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat bg-[url('/images/background.jpg')]">
        {/* login window */}
        <div className="max-w-md w-full space-y-8 ">
          <div>
            <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900">
              Welcome back to Ningle!
            </h2>
            <h6 className="mt-4 text-center text-slate-400">
              please enter your details
            </h6>
          </div>

          {/* login form */}

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <RememberMeCheckbox onRememberChange={handleRememberChange} />

              <button
                type="submit"
                className="group relative w-full flex justify-center my-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-slate-400">Don't have an account?</p>
              <p className="font-bold px-1 text-slate-600 underline underline-offset-4 ">
                Sign Up
              </p>
            </div>

            {message && (
              <div className="mt-4 text-center text-red-500">{message}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
