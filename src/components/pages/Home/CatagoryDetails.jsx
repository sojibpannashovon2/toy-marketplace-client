import React from 'react';
import { Link } from 'react-router-dom';

const CatagoryDetails = ({ toy }) => {
    console.log(toy);
    const { name, photo, sellerName, price, catagory, _id, quantity } = toy;
    return (
        <div className="card w-72 bg-base-100 shadow-xl border border-success">
            <figure className='rounded-lg'><img className='w-full h-72 p-4 ' src={toy?.photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-center font-bold">
                    {toy?.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h3> </h3>

                <div className="card-actions justify-evenly my-4">
                    <div className="badge badge-outline">Price: {toy?.price}</div>
                    <div className="badge badge-outline">Quantity: {toy?.quantity}</div>
                </div>

                <Link to={`/toyshops/${toy._id}`} className='btn btn-outline' >
                    View Details
                </Link>

            </div>
        </div>
    );
};

export default CatagoryDetails;