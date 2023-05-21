import React, { useEffect, useState } from 'react';
import CatagoryDetails from './CatagoryDetails';

const Catagory = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Action_Toy");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        fetch(`https://gamezone-toy-shop-server.vercel.app/alltoys`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, []);

    const result = toys?.filter(pd => pd.catagory == activeTab)
    console.log(toys);
    console.log(result);
    return (
        <div className='pb-5 my-5 mx-16'>
            <h1 className='text-bold text-4xl font-bold w-50 my-12 text-center'>Shop by category</h1>
            <div className="btn-group grid grid-cols-1  lg:grid-cols-3 border border-white p-8">
                <button className="btn btn-outline border-blue-500 w-52">
                    <div
                        onClick={() => handleTabClick("Action_Toy")}
                        className={`tab  tab2 Action_Toy ${activeTab == "Action_Toy" ? " bg-error text-white" : ""
                            }`}
                    >
                        Action Game Toy
                    </div>
                </button>
                <button className="btn btn-outline w-52 border-blue-500">
                    <div
                        onClick={() => handleTabClick("Survival_Toy")}
                        className={`tab  tab2 Survival_Toy ${activeTab == "Survival_Toy" ? " bg-error text-white" : ""
                            }`}
                    >
                        Survival Game Toy
                    </div>
                </button>
                <button className="btn btn-outline w-52 border-blue-500 ">
                    <div
                        onClick={() => handleTabClick("Racing_Toy")}
                        className={`tab  tab2 Racing_Toy ${activeTab == "Racing_Toy" ? " bg-error text-white" : ""
                            }`}
                    >
                        Racing Game Toy
                    </div>
                </button>
            </div>
            <div className="my-10 grid gap-4 grid-cols-1 lg:grid-cols-3 ">
                {result?.map((toy) => <CatagoryDetails
                    key={toy?._id}
                    toy={toy}
                ></CatagoryDetails>)}
            </div>
        </div>
    );
};

export default Catagory;