import React, { useEffect, useState } from 'react';
import InstallApp from './InstallApp';
import downloadIcon from '../../assets/icon-downloads.png';
import ratting from '../../assets/icon-ratings.png'
import { toast } from 'react-toastify';
const Install = () => {
    const [install,setInstall]=useState([])
    const [sort,setSort]=useState('null')
    
    useEffect(()=>{
        const Applist= JSON.parse(localStorage.getItem('item'))
        if(Applist){
        setInstall(Applist)
        } 

    },[])
     
     const sortedItem = (() => {
  
  const itemsCopy = [...install];

  if (sort === 'download-asc') {
    return itemsCopy.sort((a, b) => a.size - b.size);
  } 
  else if (sort === 'download-desc') {
    return itemsCopy.sort((a, b) => b.size - a.size);
  } 
  else {
    return install; 
  }
})();
   
 const handleRemove=(id)=>{
       const exisList= JSON.parse(localStorage.getItem('item')) || []
      let NewList=exisList.filter(p=>p.id!==id)
      setInstall(prev=>prev.filter(p=>p.id!==id))
      localStorage.setItem('item',JSON.stringify(NewList))
      toast('Unstall Successfull')
    }
    
    return (
        <div className='bg-base-200 '>
            <div className='text-center p-6 space-y-4'>
                <h2 className='font-bold text-3xl'>Your Installed App</h2>
                <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='font-bold text-xl'>({sortedItem.length}) App Found</h1>

                <label className='from-control w-full max-w-xs'>
                <select className='select select-bordered ' value={sort} onChange={(e)=>setSort(e.target.value)}>
                    <option value="null">Sort By Size</option>
                    <option value="download-asc">Low -&gt; High</option>
                    <option value="download-desc">High -&gt; Low </option>
                </select>
                
                </label>

            </div>
            <div>
                <div>
                   {
                    sortedItem.map(p=><div className='bg-white border-2 mb-2 rounded-xl shadow-2xl flex justify-between p-4'>
                               <div className='flex'>
                                 <div className='mr-2'>
                                    <img className='w-15 h-15 rounded-2xl' src={p.image} alt="" />
                                </div>
                                <div>
                                    <h2 className='mb-2 font-bold'>{p.title}</h2>
                                   <div className='flex space-x-4'>
                                    <div className='flex items-center '>
                                        <img className='w-5 h-5' src={downloadIcon} alt="" />
                                    <span>{p.downloads}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <img className='w-5 h-5' src={ratting} alt="" />
                                    <h2>{p.ratingAvg}</h2>
                                    <h2 className='font-bold ml-2'>{p.size}MB</h2>
                                    </div>
                                   </div>
                                </div>
                               </div>
                               <button onClick={()=>handleRemove(p.id)}  className='p-5 bg-green-400 btn text-white'>Unstall</button>
                            </div>)
                   }
                    
                </div>
            </div>
        </div>
    );
};

export default Install;