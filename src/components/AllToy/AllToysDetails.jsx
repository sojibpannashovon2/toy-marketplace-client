import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider2';


const AllToysDetails = ({ pd }) => {

    const { user } = useContext(AuthContext)
    const [modal, setModal] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:2000/toyshops/${pd._id}`)
            .then(res => res.json())
            .then(data => setModal(data))

    }, [])
    // console.log(data);
    // const { name, photo, sellerName, e } = modal;
    // picture, toy name, seller name, seller email, price, rating, available quantity, and detail description)
    return (
        <div>
            {/* The button to open modal */}
            <label to={`/toyshops/${pd._id}`} htmlFor="my-modal" className="btn btn-outline">View-Details</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-4xl max-h-6xl border border-success">

                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure className=' rounded-lg'>
                            <img className='h-72 w-64 border border-white rounded-lg p-2' src={modal?.photo} alt="Movie" />
                        </figure>
                        <div className="card-body w-1/2">
                            <h2 className="text-3xl  text-center font-bold">{modal?.name}</h2>
                            <h2 className="card-title text-primary">Seller-Name: {modal?.sellerName}</h2>
                            <h2 className="card-title text-primary">Seller-Name: {user?.email}</h2>
                            <p>{modal?.details}</p>
                            <div className='mt-6 flex justify-between'>
                                <div className="badge badge-outline p-4">Price: ${modal?.price}</div>
                                <div className="badge badge-outline p-4">Quantity: {modal?.quantity}</div>
                                <div className="badge badge-outline p-4">Ratting: {modal?.rate}</div>

                            </div>

                            <div className="card-actions justify-end modal-action">
                                {/* <button className="btn btn-primary">Watch</button> */}
                                <label htmlFor="my-modal" className="btn btn-outline btn-sm">Cancel</label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">

                        {/* <label htmlFor="my-modal" className="btn btn-outline">Cancel</label> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToysDetails;