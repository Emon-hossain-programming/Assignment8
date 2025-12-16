import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../../Hooks/useProducts';
import InstalledApps from '../AllInstalledApps/InstalledApps';
import Loading from '../../Component/Loading/Loading';

const AppDetails = () => {
    const {id}=useParams()
    
    const {apps,loading}=useProducts()
    const product=apps.find(p=>String(p.id) === id)

    if(loading){
        return <Loading></Loading>
    }

    const {title,description}=product
    

    return (
        <div className='bg-base-200'>
             
         <div>
          <div className="card  bg-base-100 card-sm shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>  
        </div>

        </div>
    );
};

export default AppDetails;