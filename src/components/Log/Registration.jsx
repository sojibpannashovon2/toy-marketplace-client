import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import login from '../../assets/images/login.png'

import { AuthContext } from '../../providers/AuthProvider2';
import useTitle from '../../hooks/useTitle';



const Registration = () => {
    const [error, setError] = useState(null)
    const { createUser, updateUserProfile } = useContext(AuthContext)
    useTitle("Register")
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(email, password, name, photo);
        form.reset();
        if (password.length < 6) {
            setError("Your Password must be 6 character !!")
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                alert("Successfully Register !!!")
                updateUserProfile(loggedUser, name, photo)
                    .then(result => {
                        alert("profile Name updated !!!")
                        // console.log(result);
                    })
                    .catch(error => {
                        console.log(error.message);

                    })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 my-6">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="mr-12 w-1/2">
                    <img className='h-fit w-96 shadow-lg rounded-xl' src={login} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-white">
                    <h1 className="text-4xl text-center my-2 font-bold">Register now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-URL</span>
                                </label>
                                <input type="text" placeholder="Photo-url" name='photo' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <small className='ml-6'>Already have a account   <Link className='ml-2 btn btn-outline'
                                to='/login'> Please Login</Link></small>

                            <small className='my-5 text-center text-error'>{error}</small>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Register" name="" id="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Registration;