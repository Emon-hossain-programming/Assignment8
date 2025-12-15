import React from 'react';
import heroImg from '../../assets/hero.png'

const Hero = () => {
    return (
        <div>
        <figure className='flex justify-center'>
            <img  src={heroImg} />
       </figure> 
          
       <div className='background p-7'>
        <h2 className='text-center text-3xl font-bold text-white '>Trusted by Millions, Built for You</h2>
       
         <div className='flex justify-center'>

          <div className="stats">       
  <div className="stat">
    
    <div className="stat-figure text-primary">
      
    </div>
    <div className="stat-title text-white">Total Downloads</div>
    <div className="stat-value text-white">29.6M</div>
    <div className="stat-desc text-white">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      
    </div>
    <div className="stat-title text-white">Total Reviews</div>
    <div className="stat-value text-white">906K</div>
    <div className="stat-desc text-white">46% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
     
    </div>
    <div className="stat-value text-white">Active Apps</div>
    <div className="stat-title text-white">132+</div>
    <div className="stat-desc text-white">31 More Will Launch</div>
  </div>
         </div>

         </div>

       </div>

        </div>
    );
};

export default Hero;