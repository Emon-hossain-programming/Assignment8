import React from 'react';
import logo from '../../assets/logo.png'

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
        <img className='w-14 h-14 animate-spin ' src={logo} alt="" />
            <div className='font-bold text-5xl gradient'>LOADING...</div>
        </div>
    );
};

export default Loading;