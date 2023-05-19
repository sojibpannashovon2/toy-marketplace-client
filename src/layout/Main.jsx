import React from 'react';
import Home from '../components/pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>

            <h1>Main LayOut</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;