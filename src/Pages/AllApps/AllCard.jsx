import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratting from '../../assets/icon-ratings.png'
import { NavLink } from 'react-router';
 

const AllCard = ({card}) => {
    const {image,title,downloads,ratingAvg,id}=card

    return (
      
        <NavLink to={`/appdetaila/${id}`}>
           <div>
                <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out">
          <figure className=''>
            <img
            className='w-40 h-40 p-3'
              src={image}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
        
            <div className="card-actions flex justify-between">
              <div className='flex gap-1 items-center btn'>
                <img className='w-4 h-4 ' src={downloadIcon} alt="" />
                <h2 className='font-bold text-green-500'>{downloads}</h2>
        
              </div>
              <div className='flex gap-1 items-center btn bg-[#fff0e1]'>
                <img className='w-4 h-4 ' src={ratting} alt="" />
                <h2 className='font-bold  text-[#ff8811]'>{ratingAvg}</h2>
              </div>
            </div>
          </div>
        </div>
               </div>
        </NavLink>
    );
};

export default AllCard;