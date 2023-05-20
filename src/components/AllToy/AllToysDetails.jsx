
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider2';
import { useLoaderData } from 'react-router-dom';


const AllToysDetails = () => {

    const details = useLoaderData()

    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={details.photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToysDetails;