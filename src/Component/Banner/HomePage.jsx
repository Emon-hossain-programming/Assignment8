import React from 'react';
import Banner from './Banner';
import { NavLink } from 'react-router';
import Card from '../../Pages/Card/Card';
import useProducts from '../../Hooks/useProducts';
import Loading from '../Loading/Loading';

const HomePage = () => {
    const {apps,loading,error}=useProducts()
    console.log(loading,error);
    if(loading){
        return <Loading></Loading>
    }
     
     const UpadteData=apps.slice(0,8)
    
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:p-6 bg-base-200'>
                {
                    UpadteData.map(card=><Card key={card.id} card={card}></Card>)
                }
            </div>
    <div className='flex justify-center mb-4 bg-base-200'>
    <NavLink to='/apps' className='background btn  text-white p-5'>Show All</NavLink>
   </div>
        </div>
    );
};

export default HomePage;