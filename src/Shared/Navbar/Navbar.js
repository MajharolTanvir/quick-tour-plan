import React from 'react';
import CustomLink from '../../Hooks/CustomLink';

const Navbar = () => {
    return (
        <nav className="">
            <div className="container mx-auto flex md:flex-row flex-col p-5 items-center">
                <CustomLink to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-3xl font-bold">Quick Tour Plan</span>
                </CustomLink>
                <div className="md:ml-auto md:mr-auto flex md:flex-row flex-col items-center text-base justify-center">
                    <CustomLink to='/' className="mr-5 hover:text-gray-900 px-2">Home</CustomLink>
                    <CustomLink to='/plan' className="mr-5 hover:text-gray-900 px-2">Plan</CustomLink>
                    <CustomLink to='/blogs' className="mr-5 hover:text-gray-900 px-2">Blogs</CustomLink>
                    <CustomLink to='/service' className="mr-5 hover:text-gray-900 px-2">Service</CustomLink>
                    <CustomLink to='/login' className="mr-5 hover:text-gray-900 px-2">Login</CustomLink>
                </div>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;