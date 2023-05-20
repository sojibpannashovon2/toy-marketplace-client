import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyToysDetails from './MyToysDetails';

const MyToys = () => {
    const toys = useLoaderData()

    const handleDelete = (id) => {
        console.log(id);
    }

    return (
        <div className="overflow-x-auto w-full my-8">
            <table className="table w-full">
                {/* head */}
                <thead className='border border-secondary rounded-xl mb-2 text-2xl font-bond'>
                    <tr>
                        <th className='text-xl font-bond mb-5'>
                            Delete
                            {/* <label>
                                <input type="checkbox" className="checkbox" />
                            </label> */}
                        </th>
                        <th className='text-xl font-bond'>Name</th>
                        <th className='text-xl font-bond'>Job</th>
                        <th className='text-xl font-bond'>Favorite Color</th>
                        <th className='text-xl font-bond'>Update</th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    {
                        toys.map(toy => <MyToysDetails
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToysDetails>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default MyToys;