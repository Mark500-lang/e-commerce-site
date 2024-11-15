import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Avatar from '@mui/material/Avatar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import Reviews from './Reviews';
import ProductDescription from './ProductDescription';

function ProductPage({data}){
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [count, setCount] = useState(1);
    const [pageChange, setPageChange] = useState(true);

    const handlePageChangeDescription=(event)=>{
        event.preventDefault();
        setPageChange(true);
    }
    const handlePageChangeReviews=(event)=>{
        event.preventDefault();
        setPageChange(false);
    }

    // Ensure speakersData is available and not null
    if (!data) {
        return <div className='pt-5 pb-5' style={{ backgroundColor: "#fff" }}><div className='container-lg'>Loading...</div></div>;
    }

    const product = data && data.find(item => item.id === parseInt(id));

    // Handle case where speaker is not found
    if (!product) {
        return <div className='pt-5 pb-5' style={{ backgroundColor: "#fff" }}><div className='container-lg'>Product not found</div></div>;
    }


    const handleImageClick = (index) => {
        setSelectedImage(index);
    };
    


    const increment=()=>{
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
        return (prevCount += 1);
        });
    }
    const decrement=()=>{
        setCount(function (prevCount) {
        if (prevCount > 1) {
            return (prevCount -= 1); 
        } else {
            return (prevCount = 1);
        }
        });
    }

    return(
        <div className="min-h-max">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-2 mx-auto pb-20">

                <div className="w-full px-5">
                    <div className="mt-16 flex flex-col md:flex-col gap-2">
                        <div className="flex-1">
                            <motion.div
                                key={selectedImage}
                                className="flex-1 relative p-2 rounded-md border border-gray-800 overflow-hidden"
                                initial={{ y: '100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween', duration: .3, ease: 'easeOut', delay: 0   }}
                            >
                                <motion.img
                                    src={product.media[selectedImage].imageUrl}
                                    alt="illustration"
                                    className="mx-auto object-cover"
                                />
                            </motion.div>
                        </div>
                        
                        <div className="flex flex-row w-1/3">
                            {product.media.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex-1 cursor-pointer relative before:rounded-md rounded-md space-y-3 before:absolute before:transition-all ${selectedImage === index
                                        ? 'before:ease-linear before:scale-x-105 before:scale-y-110 before:inset-0' : 'hover:before:ease-linear hover:before:scale-x-105 hover:before:scale-y-110 before:inset-0'
                                        }`}
                                    onClick={() => handleImageClick(index)}
                                    whileHover={{ scale: selectedImage === index ? 1 : 0.95 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        border:
                                            selectedImage === index
                                                ? '2px solid rgba(59, 130, 246, 0.5)'
                                                : 'none',
                                    }}
                                >
                                    <motion.img src={item.imageUrl} className="w-full my-auto"/>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:flex-1 px-4 pt-24">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {product.name}
                    </h2>
                    <p className="text-gray-600 text-md mb-4">Product Code: <span className='font-serif'>{product.sku_product_code}</span></p>
                    <div className="flex mb-4">
                        <div className="mr-4">
                            {/* <span className="text-gray-500 line-through text-xl pr-3">10000</span> */}
                            <span className="font-bold text-2xl text-gray-700">
                                KES {product.price}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-10 mb-4">
                        <div className="flex flex-row border-2 px-2 rounded-md">
                            <button className="border-r-2 pr-2 text-[25px]" disabled={count <= 1 ? true : false} onClick={decrement}><RemoveIcon/> </button>&nbsp;
                            <div className='min-w-10 m-auto text-center'><h1  className="text-[22px]">{count}</h1></div>&nbsp;
                            <button variant='text' className="border-l-2 pl-2 text-[25px]" disabled={count >= 50 ? true : false} onClick={increment}><AddIcon/> </button>
                        </div>

                        <div className="w-1/3">
                            <button className="flex flex-row bg-gray-900 text-white py-2 px-4 rounded-md font-bold hover:bg-gray-800">
                            <ShoppingCartIcon/> Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className='bg-gray-100 shadow flex flex-row justify-between p-6 md:mt-20 rounded-lg'>
                        <div className='flex flex-col justify-center p-2'>
                            <Avatar className='mx-auto'>
                                <CheckCircleOutlineIcon className=''/>
                            </Avatar>
                            <h4 className='mx-auto font-medium text-gray-700 text-sm pt-3'>Original Parts</h4>
                        </div>

                        <div className='flex flex-col justify-center p-2'>
                            <Avatar className='mx-auto'>
                                <LocalShippingIcon/>
                            </Avatar>
                            <h4 className='mx-auto font-medium text-gray-700 text-sm pt-3'>Nairobi Shipping</h4>
                        </div>

                        <div className='flex flex-col justify-center p-2'>
                            <Avatar className='mx-auto'>
                                <PublishedWithChangesIcon/>
                            </Avatar>
                            <h4 className='mx-auto font-medium text-gray-700 text-sm pt-3'>10 Day Returns</h4>
                        </div>

                        <div className='flex flex-col justify-center p-2'>
                            <Avatar className='mx-auto'>
                                <SecurityIcon/>
                            </Avatar>
                            <h4 className='mx-auto font-medium text-gray-700 text-sm pt-3'>Warranty</h4>
                        </div>
                    </div>
                </div>

                <div className='p-4 w-full shadow rounded-md mt-24 pb-10'>
                    <div className='flex flex-1 gap-8 mb-6'>
                        <h1 className={`text-lg font-medium text-gray-500 transition ease-in-out delay-100 hover:border-b-2 hover:border-red-600 cursor-pointer 
                            ${pageChange? 
                            'text-gray-900 border-b-2 border-red-600 ' 
                            : 
                            ''
                            }`} onClick={handlePageChangeDescription}>Description
                        </h1>
                        <h1 className={`text-lg font-medium text-gray-500 transition ease-in-out delay-50 hover:border-b-2 hover:border-red-600 cursor-pointer 
                            ${pageChange? '' 
                            : 
                            'text-gray-900 border-b-2 border-red-600'
                            }`} onClick={handlePageChangeReviews}>Reviews
                        </h1>
                    </div>
                    {pageChange?
                    <ProductDescription data={product}/>
                    :
                    <Reviews data={product}/> 
                }

                </div>
            </div>
        </div>
    )
}

export default ProductPage;