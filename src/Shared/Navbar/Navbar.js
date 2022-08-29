import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../../Utilities/Logo/logo.png";
import CustomLink from "../../Hooks/CustomLink";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../init.Firebase";
import Loading from "../Loading/Loading";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const from = "/";
  const [isOpen, setIsOpen] = useState(false);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  const handleSignOut = () => {
    signOut(auth);
    toast("Logout successful");
    navigate(from, { replace: true });
  };
  return (
    <nav className="bg-gray-100 shadow-md  sticky z-20 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-start">
            <div className="flex justify-center items-center gap-3">
              <img className="h-8 w-8" src={logo} alt="Workflow" />
              <h5 className="text-xl lg:text-2xl text-primary font-bold">
                Quick Tour Plan
              </h5>
            </div>
          </div>
          <div className="hidden md:block">
            {user ? (
              <div className="flex justify-between items-center">
                <CustomLink
                  to="/plan"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Plan
                </CustomLink>

                <CustomLink
                  to="/service"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Service
                </CustomLink>

                <CustomLink
                  to="/dashboard"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </CustomLink>

                <button onClick={() => handleSignOut()} className="px-3 py-2">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <CustomLink
                  to="/"
                  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </CustomLink>

                <CustomLink
                  to="/blog"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </CustomLink>

                <CustomLink
                  to="/places"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Places
                </CustomLink>
                <CustomLink
                  to="/login"
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </CustomLink>
              </div>
            )}
          </div>
          <div className="hidden md:block">
            <div className="flex justify-center items-center gap-10">
              <FaFacebookSquare className="text-xl text-blue-600 lg:text-3xl" />
              <FaInstagramSquare className="text-xl text-red-600 lg:text-3xl" />
              <FaLinkedin className="text-xl text-blue-600 lg:text-3xl" />
            </div>
          </div>
          {/* </div> */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
              <CustomLink
                to="/"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </CustomLink>

              <CustomLink
                to="/blog"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Blog
              </CustomLink>

              <CustomLink
                to="/plan"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Plan
              </CustomLink>

              <CustomLink
                to="/service"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Service
              </CustomLink>

              <CustomLink
                to="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </CustomLink>
              <div className="flex justify-around py-5">
                <Link
                  to="/login"
                  className="block px-3 py-1 text-blue-600 rounded-md text-base font-medium"
                >
                  <FaFacebookSquare className="text-xl lg:text-3xl" />
                </Link>
                <Link
                  to="/login"
                  className="block px-3 py-1 text-red-600 rounded-md text-base font-medium"
                >
                  <FaInstagramSquare className="text-xl lg:text-3xl" />
                </Link>
                <Link
                  to="/login"
                  className="block px-3 py-1 rounded-md text-blue-600 text-base font-medium"
                >
                  <FaLinkedin className="text-xl lg:text-3xl" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
