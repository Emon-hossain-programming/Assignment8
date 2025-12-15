import React from 'react';
import logo from '../../assets/logo.png'
import { Github } from 'lucide-react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to='/'>Home</NavLink>
      <li>
        <NavLink to='/apps'>Apps</NavLink>
      </li>
      <li><NavLink to='/install'>Installation</NavLink></li>
      </ul>
    </div>
    <img className='w-10 h-10' src={logo} alt="" />
    <a className="btn btn-ghost text-xl text-[#9f62f2]">HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         <li><NavLink to='/'>Home</NavLink></li>
      <li>
       <NavLink to='/apps'>Apps</NavLink>
      </li>
      <li><NavLink to='/install'>Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/Emon-hossain-programming' className="btn background text-white"><Github />Contribute</a>
  </div>
</div>
    );
};

export default Navbar;