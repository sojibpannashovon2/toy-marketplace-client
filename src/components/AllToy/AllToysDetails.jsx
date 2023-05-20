
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider2';
import { useLoaderData } from 'react-router-dom';


const AllToysDetails = () => {

    const details = useLoaderData()
    const { user } = useContext(AuthContext)
    // picture, toy name, seller name, seller email, price, rating, available quantity, and detail description)

    return (



        <div className="card  glass my-5 mx-48 border-2 border-white rounded-xl flex flex-row">
            <div className="card-body w-1/2 border-2 border-white rounded-xl">
                <h2 className="card-title text-success text-3xl font-bold mx-auto"> {details?.name}</h2>
                <h2 className="card-title text-secondary mt-6">Seller-Name: {details?.sellerName}</h2>
                <h2 className="card-title  text-secondary">User-Email: {user?.email}</h2>
                <p className='my-3'>{details?.details}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline p-3">Quantity: {details?.quantity}</div>
                    <div className="badge badge-outline p-3">Price: ${details?.price}</div>
                    <div className="badge badge-outline p-3">Ratting: {details?.rate}</div>
                </div>
            </div>
            <figure className='p-4  border-2 border-white rounded-xl"'>
                <img className='w-72 border-2 border-blue-700 rounded-xl' src={details?.photo} alt="car!" />
            </figure>

        </div>

    );
};

export default AllToysDetails;