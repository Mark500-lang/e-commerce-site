import React from "react";
import { Link } from 'react-router-dom';

function Home({data, results, query, notFoundMessage}){
    console.log(results);
    return(
        <div className="min-h-max">
            <div className="container mx-auto pt-20 pb-20">
                {results.length !== 0 ? 
                    <>
                        <h5 className="text-2xl mb-4">Products matching <span className="font-extrabold">"{` ${query}`}"</span></h5>
                        <h5 className="text-sm mb-4">Showing 1 to  <span className="font-bold">{`${results.length}`}</span> results of  <span className="font-extrabold">{`${results.length}`}</span></h5>
                    </>
                    :
                    <h5 className="text-2xl mb-4">{notFoundMessage}</h5>
                }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="w-full max-w-sm bg-gray-300 border border-gray-200 rounded-lg shadow">
                        <h5 className="text-2xl font-semibold tracking-tight text-gray-500 pl-6 pt-10">
                            Best Prices and Best Quality
                        </h5>  
                    </div>
                    {results.length === 0 ?

                        data.map((item)=>{
                            const id = item.id;
                            return(
                                <>
                            <Link 
                                to={`/product/${id}`}  
                                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow" 
                                key={id}>
                                    <a href="/cart">
                                        <img
                                        className="p-8 rounded-t-lg"
                                        src={item.media[0].imageUrl}
                                        alt="product"
                                        />
                                    </a>
                                    <div className="px-5 pb-5">
                                        <div>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                                            {item.name}
                                        </h5>
                                        </div>
                                        <div className="flex items-center justify-between pt-4">
                                            <span className="text-2xl font-bold text-gray-900">
                                                Ksh {item.price}
                                            </span>
                                            <div
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center"
                                            >
                                                View
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                </>
                            )
                        })
                    :
                    <>
                        {results.map((item)=>{
                            const id = item.id;
                            return(
                                <>
                            <Link 
                                to={`/product/${id}`}  
                                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow" 
                                key={id}>
                                    <a href="/cart">
                                        <img
                                        className="p-8 rounded-t-lg"
                                        src={item.media[0].imageUrl}
                                        alt="product"
                                        />
                                    </a>
                                    <div className="px-5 pb-5">
                                        <div>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                                            {item.name}
                                        </h5>
                                        </div>
                                        <div className="flex items-center justify-between pt-4">
                                            <span className="text-2xl font-bold text-gray-900">
                                                Ksh {item.price}
                                            </span>
                                            <div
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center"
                                            >
                                                View
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                </>
                            )
                    })}
                    </>
                    }

                </div>
            </div>
        </div>
    )
}

export default Home;