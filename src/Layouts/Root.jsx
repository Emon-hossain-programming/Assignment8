import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Banner from '../Component/Banner/Banner';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-360 mx-auto font flex flex-col min-h-screen'>
            <Navbar></Navbar>
           <div className='flex-1'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;