import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import AllCard from '../../AllApps/AllCard';

const Apps = () => {
    const {apps}=useProducts()
    console.log(apps);
    
    return (

       <div>
        <div className='text-center mt-10'>
            <h2 className='font-bold text-3xl mb-4'>Our All Applications</h2>
            <p className='text-gray-400 mb-6'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        <div className='flex justify-between mb-4'>
            <h2 className='font-bold'>({apps.length})Apps Found</h2>
           <input type="text" placeholder="search Here" className="input" />
        </div>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:p-6'>
            {
                apps.map(app=><AllCard key={app.id} card={app}></AllCard>)
            }
        </div>

       </div>
    );
};

export default Apps;