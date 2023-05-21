import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysCard from './AllToysCard';
import useTitle from '../../hooks/useTitle';

const AllToy = () => {

    useTitle("AllToy")
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1 className='text-center my-8 text-4xl font-bold'>All Catgories Toy Is Here:  {data.length}</h1>
            <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto'>
                {
                    data.map(pd => <AllToysCard
                        key={pd._id}
                        pd={pd}
                    ></AllToysCard>)
                }
            </div>


        </div>
    );
};

export default AllToy;