import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
const Header = () => {
    return (
        <div className="navbar bg-base-100 border border-success rounded-lg shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li >
                            <Link>All Toys</Link>
                        </li>
                        <li>
                            <Link>Log-In</Link>
                        </li>
                    </ul>
                </div>

                <div className=" mask mask-hexagon">
                    <img className='w-12 h-12 border-2 border-error' src={logo} alt="" />
                </div>


                <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">GameZone Toy Store</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/" className='text-md font-semibold'>Home</Link>
                    </li>
                    <li >
                        <Link className='text-md font-semibold'>All Toys</Link>
                    </li>
                    <li>
                        <Link className='text-md font-semibold'>Log-In</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/blog' className="btn btn-outline px-4">Blog</Link>

            </div>
        </div>
    );
};

export default Header;