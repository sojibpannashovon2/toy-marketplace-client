import React from 'react';

const MyToysDetails = ({ toy, handleDelete }) => {
    return (

        // Price, available quantity, Detail description
        <tr className='my-8 '>

            <th>
                <button onClick={() => handleDelete(toy?._id)} className="btn btn-square btn-outline btn-sm bg-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-lg w-28 h-28">
                            <img src={toy?.photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className='border border-white p-3'>
                        <p>{toy?.details.slice(0, 40)}</p>
                        <p>{toy?.details.slice(41, 80)}</p>
                        <p>{toy?.details.slice(81, 120)} ...</p>
                    </div>
                </div>
            </td>
            <td>
                <span>Price: ${toy?.price}</span>
            </td>
            <td>
                <span>Quantity: {toy?.quantity}</span>
            </td>
            <td>
                <span>Ratting: {toy?.rate}</span>
            </td>
            <th>
                <button className="btn btn-outline btn-sm">Update</button>
            </th>

        </tr>
    );
};

export default MyToysDetails;