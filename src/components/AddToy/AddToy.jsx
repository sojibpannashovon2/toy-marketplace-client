import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider2';

const AddToy = () => {

    const { user } = useContext(AuthContext);

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;

        const sellerName = user.displayName;

        const quantity = form.quantity.value;
        const price = form.price.value;
        const rate = form.rate.value;
        const catagory = form.catagory.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newToy = { name, sellerName, quantity, price, rate, catagory, details, photo }
        console.log(newToy);

        fetch(`http://localhost:2000/toyshops`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    // alert("New data added successfully");

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Single Toy Data is Added',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }



    return (
        <div className='my-5'>
            <form onSubmit={handleForm} className='text-center w-10/12 mx-auto pt-12 flex flex-col justify-center items-center border border-primary p-10'>
                <h1 className='text-4xl text-center font-bold mb-5'>Add A Toy</h1>
                {/* row 1 name and quantity */}
                <div className='lg:md:flex gap-2'>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>Toy-Name</span>
                            <input type="text" name="name" placeholder="Enter Toy name" required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />

                    <div className="form-control w-full">

                        <label className="input-group input-group-vertical">
                            <span>Product Quantity</span>
                            <input type="text" placeholder="Enter Toy quantity" name="quantity" className="input input-bordered lg:px-24" required />
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
                            <input type="text" name="price" placeholder="Enter toy price" required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />
                    <div className="form-control w-full">

                        <label className="input-group input-group-vertical">
                            <span>Toy-Ratting</span>
                            <input type="text" placeholder="Enter Toy Ratting" name="rate" className="input input-bordered lg:px-24" required />
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
                            <select name="catagory" className="input input-bordered lg:px-28">
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
                            <input type="text" placeholder="Enter Toy details" name="details" className="input input-bordered lg:px-24" required />
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
                            <input type="text" name="photo" placeholder="Enter photo URL" required className="input input-bordered lg:px-72" />
                        </label>
                    </div>


                </div>


                <br />
                <div className="form-control w-48 mx-auto">

                    <label className="input-group input-group-vertical">

                        <input type="submit" className="input input-bordered btn btn-outline" value="Add-Toy" required />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default AddToy;