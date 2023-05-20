import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider2';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateToys = () => {

    const { user } = useContext(AuthContext)
    const toy = useLoaderData()
    const { _id, name, quantity, price, rate, catagory, details, photo } = toy

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;

        const sellerName = user.displayName;
        const email = user.email
        const quantity = form.quantity.value;
        const price = form.price.value;
        const rate = form.rate.value;
        const catagory = form.catagory.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateToy = { name, sellerName, email, quantity, price, rate, catagory, details, photo }
        console.log(updateToy);

        fetch(`http://localhost:2000/mytoys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {


                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Data is Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }

    return (
        <div className='my-5'>
            <form onSubmit={handleForm} className='bg-secondary text-center w-10/12 mx-auto pt-12 flex flex-col justify-center items-center border border-primary p-10'>
                <h1 className='text-4xl text-center font-bold mb-5'>Update A Toy</h1>
                {/* row 1 name and quantity */}
                <div className='lg:md:flex gap-2'>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>Toy-Name</span>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter Toy name" required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />

                    <div className="form-control w-full">

                        <label className="input-group input-group-vertical">
                            <span>Product Quantity</span>
                            <input type="text" defaultValue={quantity} placeholder="Enter Toy quantity" name="quantity" className="input input-bordered lg:px-24" required />
                        </label>
                    </div>
                    <br />

                </div>
                <br />

                {/* row 2 seller name and email */}
                <div className='lg:md:flex gap-2'>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>User Name</span>
                            <input type="text" name="sellerName" placeholder="Enter Seller name" defaultValue={user?.displayName} required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>User Name</span>
                            <input type="text" name="sellerName" placeholder="Enter Seller email" defaultValue={user?.email} required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />

                </div>
                <br />
                {/* row 3 supplier */}
                <div className='lg:md:flex gap-2'>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>Toy-Price</span>
                            <input type="text" name="price" defaultValue={price} placeholder="Enter toy price" required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />
                    <div className="form-control w-full">

                        <label className="input-group input-group-vertical">
                            <span>Toy-Ratting</span>
                            <input type="text" defaultValue={rate} placeholder="Enter Toy Ratting" name="rate" className="input input-bordered lg:px-24" required />
                        </label>
                    </div>
                    <br />

                </div>
                <br />
                {/* row 1 catagories and details */}
                <div className='lg:md:flex gap-2 w'>
                    <div className="form-control w-full ">


                        <label className="input-group input-group-vertical">
                            <span>Choose a Catagory: </span>
                            <select name="catagory" defaultValue={catagory} className="input input-bordered lg:px-28">
                                <option value="Action_Game_Toy">Action Game Toy</option>
                                <option value="Action_Game_Toy">Survival Game Toy</option>
                                <option value="Action_Game_Toy">Raceing Game Toy</option>

                            </select>
                            {/* <input type="text" name="catagory" placeholder="Enter Toy catagory" required className="input input-bordered lg:px-24" /> */}
                        </label>
                    </div>
                    <br />
                    <div className="form-control w-full">

                        <label className="input-group input-group-vertical">
                            <span>Details</span>
                            <input type="text" defaultValue={details} placeholder="Enter Toy details" name="details" className="input input-bordered lg:px-24" required />
                        </label>
                    </div>
                    <br />

                </div>
                <br />
                {/* row 1 name and quantity */}
                <div className=''>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>Photo</span>
                            <input type="text" defaultValue={photo} name="photo" placeholder="Enter photo URL" required className="input input-bordered lg:px-72" />
                        </label>
                    </div>


                </div>


                <br />
                <div className="form-control w-48 mx-auto">

                    <label className="input-group input-group-vertical">

                        <input type="submit" className="input input-bordered btn btn-warning" value="Update-Now" required />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;