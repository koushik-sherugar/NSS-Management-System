import logo from "../../assets/Nsslogo.jpeg";
import Navbar from "../../pages/Navbar";

export default function StudentLogin() {
  return (
    <>
      <Navbar />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-16 w-auto" src={logo} alt="Nss logo" />

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Student login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {/* Or{" "} */}
              <p className="font-medium text-indigo-600 hover:text-indigo-500 no-underline">
                log in now...
              </p>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                {/* <label htmlFor="email-address" className="sr-only">
                  User name
                </label> */}
                <input
                  id="user-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className=" appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="enter your user name"
                />
              </div>
              <div>
                {/* <label htmlFor="password" className="sr-only">
                  Password
                </label> */}
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                want to register ?{"  "}
                <a
                  href="#"
                  className="font-medium no-underline text-indigo-600 hover:text-indigo-500"
                >
                  click here
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
