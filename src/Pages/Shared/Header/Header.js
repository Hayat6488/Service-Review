import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo/logo.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-200 px-10">
                <div className="navbar-start">
                    <img src={logo} className="h-10" alt="" />
                    <Link to='/'><h1 className='text-3xl font-semibold'>DHEKUR</h1></Link>
                </div>
                <div className="navbar-end">
                    <div className='hidden lg:block'>
                        <Link className='mr-6'><button to='/' className="btn btn-ghost">Home</button></Link>
                        <Link to='/foods' className='mr-6'><button className="btn btn-ghost">Foods</button></Link>
                        <Link to='/blogs' className='mr-6'><button className="btn btn-ghost">Blogs</button></Link>
                    </div>
                <div className="dropdown  dropdown-end lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;