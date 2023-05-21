import React, { useContext, useEffect, useState } from 'react';

import MyToysDetails from './MyToysDetails';
import { AuthContext } from '../../providers/AuthProvider2';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [addToy, setAddToy] = useState([])

    useTitle("MyToys")
    const url = `https://gamezone-toy-shop-server.vercel.app/mytoys?email=${user?.email}`

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setAddToy(data))
    }, [url])

    console.log(addToy);


    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:2000/mytoys/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )

                            const remaining = addToy.filter(toy =>
                                toy._id !== id
                            )
                            setAddToy(remaining)
                        }
                    })
            }
        })
    }



    // const handleDelete = (id) => {
    //     console.log(id);
    //     fetch(`http://localhost:2000/mytoys/${id}`, {
    //         method: "DELETE"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }

    return (
        <div className="overflow-x-auto w-full my-8">
            <h1 className='text-center my-4'>Toys-Count: {addToy.length}</h1>
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
                        addToy.map(toy => <MyToysDetails
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