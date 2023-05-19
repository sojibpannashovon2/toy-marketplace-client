import React from 'react';
import { Link } from 'react-router-dom';

import login from '../../assets/images/login.png'

const LogIn = () => {


    // const { logIn } = useContext(authContext)

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // logIn(email, password)
        //     .then(result => {
        //         const loggedUser = result.user;
        //         console.log(loggedUser);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }
    return (
        <div className="hero min-h-screen bg-base-200 my-6">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="mr-12 w-1/2 ">
                    <img className='h-96 w-96 shadow-lg rounded-xl' src={login} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-white">
                    <h1 className="text-4xl text-center my-2 font-bold">Login now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogIn}>
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
                            <small>Are you new to website<Link
                                className='ml-4 btn btn-outline'
                                to='/signup'> Please Register</Link></small>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Log-in" name="" id="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;