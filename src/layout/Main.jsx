import React from 'react';
import Home from '../components/pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';

const Main = () => {
    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;