import React from 'react';
import errorImg from '../../assets/error-404.png'
import logo from '../../assets/logo.png'

const Error = () => {
    return (
        <div>
             <div className='flex justify-center items-center'>
                <img className='w-14 h-14 animate-spin ' src={logo} alt="" />
             </div>
            <div className='flex justify-center items-center'>
           
            <img src={errorImg} alt="" />
        </div>
        </div>
      
    );
};

export default Error;