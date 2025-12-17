import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Banner from '../Component/Banner/Banner';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='max-w-360 mx-auto font flex flex-col min-h-screen'>
            <Navbar></Navbar>
           <div className='flex-1'>
             <Outlet></Outlet>
           </div>
            <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"

                                />
            <Footer></Footer>
        </div>
    );
};

export default Root;