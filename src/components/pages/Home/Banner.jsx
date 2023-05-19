import React from 'react';
import banner1 from '../../../assets/images/banner1.png'
import banner2 from '../../../assets/images/banner2.png'
import banner3 from '../../../assets/images/banner3.png'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full ">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner1} className="w-full  border-4 border-warning rounded-2xl" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={banner2} className="w-full  border-4 border-warning rounded-2xl" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={banner3} className="w-full  border-4 border-warning rounded-2xl" />
                </div>
                {/* <div id="item4" className="carousel-item w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                </div> */}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                {/* <a href="#item4" className="btn btn-xs">4</a> */}
            </div>
        </div>
    );
};

export default Banner;