import React from 'react';
import toy1 from '../../../assets/toy/toy1.png'
import toy2 from '../../../assets/toy/toy2.webp'
import toy3 from '../../../assets/toy/toy3.png'
import toy4 from '../../../assets/toy/toy-4.png'
import toy5 from '../../../assets/toy/toy6.jpg'
import toy6 from '../../../assets/toy//toy8.webp'
import toy7 from '../../../assets/toy/toy1.png'
import toy11 from '../../../assets/toy/toy13.jpg'
import toy12 from '../../../assets/toy/toy7.png'

import toy8 from '../../../assets/toy/toy14.jpg'
import toy9 from '../../../assets/toy/toy19.jpg'
import toy10 from '../../../assets/toy/toy10.jpg'
const Gallery = () => {
    return (
        <div className='my-8'>

            <h1 className='text-center text-4xl font-bold my-8'>Our Toy Gallery</h1>
            <div className='border-2 border-black lg:flex gap-4 p-8  bg-slate-500 rounded-lg'>
                <div className='grid gap-2'>
                    <div>
                        <img className='border border-white h-96 w-96 drop-shadow-2xl rounded-lg' src={toy1} alt="" />
                    </div>
                    <div className='lg:flex gap-3'>
                        <img className='h-72 w-52 border border-white drop-shadow-2xl rounded-lg ' src={toy4} alt="" />
                        <img className='h-72 w-52 border border-white drop-shadow-2xl rounded-lg' src={toy3} alt="" />

                    </div>
                </div>
                <div>
                    <div className=''>
                        <img className='h-80 w-64 mb-4 border-2 border-orange-500 drop-shadow-2xl rounded-lg' src={toy8} alt="" />
                    </div>
                    <div>
                        <img className='h-80 w-64 mb-4  border-2 border-orange-500 drop-shadow-2xl rounded-lg' src={toy11} alt="" />
                    </div>
                    <div>
                        <img className='h-80 w-64 mb-4  border-2 border-orange-500 drop-shadow-2xl rounded-lg' src={toy12} alt="" />
                    </div>
                </div>
                <div className=''>
                    <div className=' mb-48'>
                        <img className='w-72 ml-6 mb-5  border-2 border-white drop-shadow-2xl rounded-lg' src={toy7} alt="" />
                        <img className='w-72 ml-6 mb-5  border-2 border-orange-500 drop-shadow-2xl rounded-lg' src={toy6} alt="" />
                    </div>
                    <div>
                        <img className='w-48  lg:w-96 mr-4  border-2 border-orange-500 drop-shadow-2xl rounded-lg' src={toy9} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Gallery;