import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
    FaGoogle
} from 'react-icons/fa';

import login from '../../assets/images/login.png'
import { AuthContext } from '../../providers/AuthProvider2';
import useTitle from '../../hooks/useTitle';

const LogIn = () => {

    const [error, setError] = useState(null)
    const { logIn, googleSignIn } = useContext(AuthContext)

    useTitle("LogIn")
    const navigate = useNavigate();
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/toyshops'

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleGoogleLog = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
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
                                className='ml-4 mb-3 btn btn-outline'
                                to='/signup'> Please Register</Link></small>
                            <small className='my-5 text-center text-error'>{error}</small>
                            <div className="form-control my-6">

                                <input className="btn btn-primary" type="submit" value="Log-in" name="" id="" />
                            </div>

                            <small className='mt-4 text-center'>Or you can log in with Google</small>
                            <div onClick={handleGoogleLog} className="btn btn-outline flex justify-center items-center gap-3">
                                <FaGoogle></FaGoogle>
                                <span >Google</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;