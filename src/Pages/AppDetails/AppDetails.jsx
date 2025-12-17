import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useProducts from '../../Hooks/useProducts';
import Loading from '../../Component/Loading/Loading';
import downloadIcon from '../../assets/icon-downloads.png';
import ratting from '../../assets/icon-ratings.png';
import rivewIcon from '../../assets/icon-review.png';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useProducts();
    
    
    const [toggle, setToggle] = useState(false);

    const product = apps.find(p => String(p.id) === id) || {};

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('item')) || [];
       
        
        const isInstalled = storedItems.some(p => String(p.id) === id);
        setToggle(isInstalled);
    }, [id, apps]);


    if (loading) {
        return <Loading />;
    }

    const { title, description, image, downloads, ratingAvg, reviews, size } = product;

    const handleInstall = () => {
        const exisList = JSON.parse(localStorage.getItem('item')) || [];
        const isDuplicate = exisList.some(p => p.id === product.id);

        if (isDuplicate) {
            return toast.error('This app is already installed');
        }

        const newList = [...exisList, product];
        localStorage.setItem('item', JSON.stringify(newList));
        
       
        setToggle(true);
        toast.success('Successfully Installed');
    };

    return (
        <div className='card mt-8'>
            <div className='flex gap-3 p-4'>
                <img className='w-25 h-25' src={image} alt={title} />
                <div className='space-y-2'>
                    <h2 className='font-bold text-2xl'>SmPlan: {title}</h2>
                    <p>Developed by <span className='gradient'>productive.io</span></p>
                    <div className='border-b-2 border-gray-400'></div>
                    <div className='grid md:grid-cols-3 grid-cols-2 gap-4'>
                        <div className='space-x-3'>
                            <img src={downloadIcon} alt="Download Icon" />
                            <p>Downloads</p>
                            <h1 className='font-bold text-xl'>{downloads}</h1>
                        </div>
                        <div className='space-x-3'>
                            <img src={ratting} alt="Rating Icon" />
                            <p>Rating</p>
                            <h1 className='font-bold text-xl'>{ratingAvg}</h1>
                        </div>
                        <div className='space-x-3'>
                            <img src={rivewIcon} alt="Review Icon" />
                            <p>Reviews</p>
                            <h1 className='font-bold text-xl'>{reviews}</h1>
                        </div>
                    </div>

                    <button 
                        disabled={toggle} 
                        onClick={handleInstall}
                        className={`p-3 rounded-xl ${toggle ? 'btn-disabled opacity-50 cursor-not-allowed bg-gray-300' : 'bg-green-400 text-white hover:bg-green-500'}`}
                    >
                        {toggle ? 'Installed' : `Install Now (${size} MB)`}
                    </button>
                </div>
            </div>

            <div className='space-y-4 px-4'>
                <h2 className='text-xl font-bold'>Ratings</h2>
                <div className='bg-base-100 border rounded-xl h-80 p-4'>
                    <ResponsiveContainer width='100%' height='100%'>
               
                <BarChart 
                    layout="vertical" 
                    data={product.ratings} 
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
                    
              
                    <XAxis type="number" hide={false} />
                    
                 
                    <YAxis 
                        dataKey="name" 
                        type="category" 
                        width={80}
                    />
                    
                    <Tooltip 
                        formatter={(value) => new Intl.NumberFormat('en-US').format(value)}
                    />
                    <Legend />
                    
                   
                    <Bar 
                        dataKey='count' 
                        fill="#FFA500" 
                        radius={[0, 0, 0, 0]} 
                        barSize={30}
                        name="Total Users"
                    />
                </BarChart>
            </ResponsiveContainer>
                </div>
            </div>

            <div className='mb-4 mt-8 px-4'>
                <h1 className='font-bold text-2xl mb-3'>Description</h1>
                <h1 className='text-gray-600 mb-4'>{description}</h1>
                <div className='text-gray-500 space-y-6'>
                    <p>
                        This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. 
                    </p>
                    <p>
                        A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy.
                    </p>
                    <p>
                        For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;