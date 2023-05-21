import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import useTitle from '../../../hooks/useTitle';
import Catagory from './Catagory';

const Home = () => {

    useTitle("Home");
    return (
        <div>

            <Banner></Banner>
            <Gallery></Gallery>
            <Catagory></Catagory>
        </div>
    );
};

export default Home;