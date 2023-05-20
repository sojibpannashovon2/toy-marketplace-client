import React, { useEffect, useState } from 'react';

import AllToysDetails from './AllToysDetails';
import { Link } from 'react-router-dom';


const AllToysCard = ({ pd }) => {
    const { name, photo, sellerName, price, catagory, _id, quantity } = pd;

    const [modal, setModal] = useState()
    const url = `http://localhost:2000/toyshops/${_id}`
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setModal(data))

    }, [url])
    console.log(modal);
    return (
        <div className="card w-80  bg-base-100 shadow-xl border border-purple-400">
            <figure>
                <img className='h-72 p-4  rounded-xl' src={pd ? photo : "Not Found"} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h2 className="card-title">
                    Seller-Name: {sellerName}

                </h2>
                <div>
                    <h3>Catagory: {catagory}</h3>
                    <h3>Price: ${price}</h3>
                </div>
                <div className="card-actions justify-between my-3">
                    <div className="badge badge-outline">Quantity: {quantity}</div>


                    {/* <label htmlFor="my-modal" className="btn btn-outline">

                        <Link className='btn btn-accent' to={`/toyshops/${_id}`}>
                            <div >View-Details</div>
                        </Link>
                    </label> */}

                    <Link className='btn btn-accent' to={`/toyshops/${_id}`}>
                        <div >View-Details</div>
                    </Link>





                </div>
            </div>
        </div>
    );
};

export default AllToysCard;