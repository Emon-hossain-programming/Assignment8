import React, { useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import AllCard from '../../AllApps/AllCard';
import Loading from '../../../Component/Loading/Loading';
import { Link } from 'react-router';


const Apps = () => {
     const {apps,loading}=useProducts()
    const [search,setSearch]=useState('')

    const term=search.trim().toLowerCase()
      
      const searchedCard=term ?apps.filter(app=>app.title.toLowerCase().includes(term)):apps
      
    if (loading) {
        return <Loading></Loading>;
    }
    
    
    if (searchedCard.length === 0 && term) {
       
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <div className='text-center'>
                    <p className='text-center mt-20 text-xl font-semibold gradient'>
                    No apps found matching "{search}"
                </p>
                <Link className='background btn text-white mt-4' to='/apps'>Show All Apps</Link>
                </div>
                
            </div>
            
        );
    }

    return (
          <div>
        <div className='text-center mt-10'>
            <h2 className='font-bold text-3xl mb-4'>Our All Applications</h2>
            <p className='text-gray-400 mb-6'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        <div className='flex justify-between mb-4'>
            <h2 className='font-bold'>({searchedCard.length})Apps Found</h2>
           <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="search Here" className="input" />
        </div>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:p-6'>
            {
                searchedCard.map(app=><AllCard search={search} key={app.id} card={app}></AllCard>)
            }
        </div>
       </div>

    
    );
};

export default Apps;