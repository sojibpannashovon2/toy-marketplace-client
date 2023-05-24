import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import useTitle from '../../../hooks/useTitle';
import Catagory from './Catagory';
import ExtraSection from './ExtraSection';
import Extra2 from './Extra2';

const Home = () => {

    useTitle("Home");
    return (
        <div>

            <Banner></Banner>
            <Gallery></Gallery>
            <Catagory></Catagory>
            <ExtraSection></ExtraSection>
            <div className=' flex my-48 justify-center items-center '>
                <Extra2></Extra2>
            </div>
        </div>
    );
};

export default Home;