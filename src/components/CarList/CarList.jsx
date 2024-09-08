import React from 'react';
import { featuredCars } from '../utils/options/options';

const CarList = () => {
    return (
        <div className='pb-24 pt-12 bg-white dark:bg-dark dark:text-white'>
            <div className='container'>
                {/* head */}
                <h1 className='text-3xl sm:text-4xl font-semibold font-serif mb-3'>Featured cars</h1>
                <p data-aos='fade-up' className='text-sm pb-10'>
                    Have you ever had the chance to try these cars?
                </p>
                {/* Car list: */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                        {featuredCars.map(car => (
                            <div
                                data-aos='fade-up'
                                data-aos-delay={car.aosDelay}
                                className='space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl 
                                relative group'
                            >
                                <div className='w-full h-[120px]'>
                                    <img
                                        src={car.image}
                                        alt=''
                                        className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16
                                         duration-700'
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <h1 className='text-primary font-semibold'>{car.name}</h1>
                                    <div className='flex justify-between items-center text-xl font-semibold'>
                                        <p>${car.price}/Day</p>
                                        <a href='#'>Details</a>
                                    </div>
                                </div>
                                <p className='text-xl font-semibold absolute top-0 left-3'>12Km</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='grid place-items-center mt-8'>
                    <button data-aos='fade-up' className='button-outline'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarList;
