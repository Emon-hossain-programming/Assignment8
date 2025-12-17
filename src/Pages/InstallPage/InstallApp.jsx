import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratting from '../../assets/icon-ratings.png'

const InstallApp = ({ins}) => {
    
    const {image,title,downloads,ratingAvg,size}=ins
       
    const handleRemove=(id)=>{
       const exisList= JSON.parse(localStorage.getItem('item'))
      let NewList=exisList.filter(p=>p.id!==id)
      
       

    }
    return (
        <div className='bg-white border-2 mb-2 rounded-xl shadow-2xl flex justify-between p-4'>
           <div className='flex'>
             <div className='mr-2'>
                <img className='w-15 h-15 rounded-2xl' src={image} alt="" />
            </div>
            <div>
                <h2 className='mb-2 font-bold'>{title}</h2>
               <div className='flex space-x-4'>
                <div className='flex items-center '>
                    <img className='w-5 h-5' src={downloadIcon} alt="" />
                <span>{downloads}</span>
                </div>
                <div className='flex items-center'>
                    <img className='w-5 h-5' src={ratting} alt="" />
                <h2>{ratingAvg}</h2>
                <h2 className='font-bold ml-2'>{size}MB</h2>
                </div>
               </div>
            </div>
           </div>
           <button onClick={()=>handleRemove(ins.id)}  className='p-5 bg-green-400 btn text-white'>Unstall</button>
        </div>
    );
};

export default InstallApp;