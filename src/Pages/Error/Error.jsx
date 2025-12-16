import React from 'react';
import errorImg from '../../assets/error-404.png'
import { Link } from 'react-router';


const Error = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
           
            <img src={errorImg} alt="" />
            
        </div>
           <div className='flex justify-center items-center'>
           <div className='text-center space-y-4'>
             <h2 className='font-bold text-3xl'>Oops, page not found!</h2>
             <p>The page you are looking for is not available.</p>
             <Link to='/' className='background text-white btn'>Go Back!</Link>
           </div>
           </div>
        </div>
      
    );
};

export default Error;