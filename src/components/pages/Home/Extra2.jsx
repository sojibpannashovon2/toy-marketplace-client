import React from 'react';

const Extra2 = () => {
    return (
        <div className="indicator w-96 h-96">
            <span className="indicator-item indicator-top indicator-start badge badge-secondary p-8 font-bold ">Best Collection</span>
            <span className="indicator-item indicator-top indicator-center badge badge-secondary p-8 font-bold">Best Quality</span>
            <span className="indicator-item indicator-top indicator-end badge badge-secondary p-8 font-bold">Reuseability</span>
            <span className="indicator-item indicator-middle indicator-start badge badge-secondary p-8 font-bold">Well Sequrity</span>
            <span className="indicator-item indicator-middle indicator-center badge badge-secondary p-8 font-bold">Well Desgin</span>
            <span className="indicator-item indicator-middle indicator-end badge badge-secondary p-8 font-bold">HelpFul</span>
            <span className="indicator-item indicator-bottom indicator-start badge badge-secondary p-8 font-bold">No 1</span>
            <span className="indicator-item indicator-bottom indicator-center badge badge-secondary p-8 font-bold">Well Planned</span>
            <span className="indicator-item indicator-bottom indicator-end badge badge-secondary p-8 font-bold">Focused</span>
            <div className="grid w-full h-full bg-base-300 place-items-center">
                <img className='h-96' src="https://media.istockphoto.com/id/1365335770/vector/oys-on-the-background-of-gift-boxes-bithday-gifts-colorful-boxes-with-presents-teddy-bear.jpg?s=612x612&w=0&k=20&c=yGPGOC0sxRNJNQ7-LgQro7Q71Siwe1fqUjdfi4QmfHY=" alt="" />
            </div>
        </div>
    );
};

export default Extra2;