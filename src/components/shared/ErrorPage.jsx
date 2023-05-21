import React from 'react';
import error from '../../assets/images/error.avif'
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
const ErrorPage = () => {

    useTitle("Error")
    return (
        <div className='mx-auto w-[60%]'>
            <img className='shadow-xl border-2 border-primary rounded-xl' src={error} alt="" />
            <div className='text-center my-4'>
                <Link to="/toyshops" className='btn btn-outline  '>
                    Back-To-Homepage
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;