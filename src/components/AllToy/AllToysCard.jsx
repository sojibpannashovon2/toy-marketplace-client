import React from 'react';

const AllToysCard = ({ pd }) => {
    //     Seller: (if available) show the name of the person who posted the toy
    // Toy Name
    // Sub-category
    // Price
    // Available Quantity
    // View Details button
    const { name, photo, sellerName, price, catagory, _id, quantity } = pd;
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
                    <div className="btn btn-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default AllToysCard;