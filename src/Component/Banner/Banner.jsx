import React from 'react';
import googlePlayLogo from '../../assets/google-play_3128279.png'
import appStoreLogo from '../../assets/app-store_668276.png'
import Hero from './Hero';
import { TrendingUp } from 'lucide-react';


const Banner = () => {
    return (
        <div className='bg-base-200'>
       <div className="hero bg-base-200 ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">We Build<br /><span className='gradient'>Productive <span className='text-black'>Apps</span></span></h1>
      <p className="py-6">
        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className='flex justify-center '>
        <div className=' flex gap-1'>
            <img className='w-10 h-10 ' src={googlePlayLogo} alt="" />
            <a href='https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en' className="btn btn-grad text-center">Play Store</a>
        </div>
      <div className='flex gap-1'>
        <img className='w-10 h-10 ' src={appStoreLogo} alt="" />
        <a href='https://www.apple.com/app-store/' className="btn btn-grad1">App Store</a>
      </div>
      </div>
    </div>
  </div>
</div>
<Hero></Hero>
<div className='flex justify-center items-center mt-12'>
  <div className='text-center'>
    <h2 className="text-3xl font-bold flex ml-8 p-4">Trending Apps <TrendingUp/></h2>
    <p className='text-gray-400 mt-4 mb-6'>Explore All Trending Apps on the Market developed by us</p>
  </div>
</div>

</div>
    );
};

export default Banner;