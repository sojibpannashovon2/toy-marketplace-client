import React from 'react';
import toy24 from "../../../assets/toy/toy24.jpg"
import { Link } from 'react-router-dom';
const ExtraSection = () => {
    return (
        <div className="border border-white rounded-xl mb-8 hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">GAMEZONE TOY SHOP</h1>
                    <p className="mb-5">GameZone toy shop Has Been Focusing On Quality Service For More Than 20 Years! Over 460,000 toys, high quality, low price, export to the world. Toys made in China And Bangladesh. Chinese toy supplier. Remote Control Toys, Dolls, Water Gun.</p>
                    <Link className="btn btn-primary" to="/toyshops">
                        Buy Now !
                    </Link>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;