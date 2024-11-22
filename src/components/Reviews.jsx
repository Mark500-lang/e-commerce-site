import React from "react";
import Rating from '@mui/material/Rating';

function Reviews({data}){
    const productReviews = data.reviews;

    return(
        <div>
            {productReviews.length === 0? 
                <div>
                    <h1 className="text-md">No reviews on this product yet...</h1>
                </div>
                :
                productReviews.map((item)=>{
                    return(

                        <div key={item.id} className="border-b py-4">
                            <span className="flex flex-row gap-36">
                                <h3 className="font-medium">{item.user_name}</h3>
                                <Rating name="read-only" value={item.score} readOnly />
                            </span>
                            <p className="font-normal text-xs text-gray-500">{item.email}</p>
                            <p className="pt-6 font-normal text-sm text-gray-700">{item.review}</p>
                        </div>
                    )
            })}
        </div>
    )
}

export default Reviews;