import { Table, TableContainer, TableBody, TableRow, TableCell, TableHead } from "@mui/material";
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

function Cart({ products }){
    const [enterPromoCode, setEnterPromoCode] = useState(false);
    const productsInCart = products.filter(item => item.in_cart === true);
    
    const [count, setCount] = useState(() => {
        // Initialize quantities based on productsInCart data
        const initialCount = {};
            productsInCart.forEach(item => {
                initialCount[item.id] = 1; // Default quantity to 1
            });
            console.log(initialCount);
            return initialCount;
    });

    const increment=(productId)=>{
        setCount(prevCount => ({
            ...prevCount,
            [productId]: prevCount[productId] + 1
          }));
    }

    const decrement=(productId)=>{
        setCount(prevCount=> ({
        // if (prevCount > 1) {
            ...prevCount,
            [productId]: Math.max(prevCount[productId] - 1, 1)
        // } else {
        //     return (prevCount = 1);
        // }
        }));
    }
    const calculateSubtotal = () => {
        return productsInCart.reduce((total, product) => {
            const productPrice = product.price || 0;
            return total + productPrice * (count[product.id] || 1);
        }, 0).toFixed(2); // Keep 2 decimal places for precision
    };    

    return(
        <section className="py-5 relative min-h-screen">
            <div className="container">
                <div className="max-w-[1150px] mx-auto pt-5">
                    <h6 className="text-3xl font-bold">Cart</h6>
                </div>
            {productsInCart.length === 0? (
                <div className="flex gap-2 max-w-[1150px] mx-auto pt-10">
                    <h4 >You cart is empty!</h4>
                    <a href="/" className="text-red-600 hover:border-b hover:border-b-red-600 transition-all duration-200">continue shopping</a>
                </div>
                
                ):(
                <>
                <TableContainer className="overflow-x-auto">
                    <Table className="min-w-[750px]">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Quantity</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Sub-total</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {productsInCart && productsInCart.map(product =>{
                                return(
                                <TableRow key={product.id}>
                                <TableCell>
                                    <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                                                cx="17" cy="17" r="17" fill="" />
                                            <path className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                                                d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                                                stroke="#EF4444" stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </TableCell>
                                    <TableCell>
                                        <img src={product.media[0].imageUrl} alt="product cover" className="max-w-[80px] min-w-[80px] border"/>
                                    </TableCell>
                                    <TableCell>
                                        <h5 className="text-lg font-bold">{product.name}</h5>
                                        <h5 className="text-base text-gray-400 font-bold">{product.price}</h5>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-4">
                                            <button onClick={()=> decrement(product.id)}
                                                className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                    width="18" height="19" viewBox="0 0 18 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 9.5H13.5" stroke="" stroke-width="1.6" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                            <input type="text" name="copies" id="number"
                                                className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
                                                value={count[product.id] || 1}
                                                placeholder='1'/>
                                            <button onClick={()=> increment(product.id)}
                                                className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                    width="18" height="19" viewBox="0 0 18 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" stroke-width="1.6"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <h6 className="leading-9 text-right">KES {product.price * (count[product.id] || 1)}</h6>
                                    </TableCell>
                                </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div className="grid md:grid-cols-2 gap-16 max-w-[1150px] mx-auto pt-12">
                    <div className="bg-gray-100 border border-gray-400 p-6 rounded-lg h-fit">
                        {enterPromoCode ? 
                            <div>
                                <input className="block w-full px-4 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-red-400"/>
                                <div className="pt-5 flex justify-between">
                                    <button 
                                        className="rounded-lg py-2.5 px-3 bg-red-600 text-white font-semibold text-base text-center whitespace-nowrap transition-all duration-200 hover:bg-red-500">
                                        Enter Code
                                    </button>
                                    <button  onClick={(e) => {
                                        e.preventDefault(); 
                                        setEnterPromoCode(false);
                                        }}
                                        className="rounded-lg py-2.5 px-3 text-red-600 font-semibold text-base text-center whitespace-nowrap transition-all duration-200 hover:bg-gray-200">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        :
                            <button onClick={(e) => {
                                e.preventDefault(); 
                                setEnterPromoCode(true);
                                }}
                                className="rounded-lg py-2.5 px-3 bg-white text-indigo-600 font-semibold text-base text-center whitespace-nowrap transition-all duration-200 hover:bg-indigo-200">
                                Add Promo Code?
                            </button>
                        }
                    </div>
                
                    <div className=" flex flex-col">
                        <h6 className="text-2xl font-bold">Cart Total</h6>
                        <div className="flex items-center justify-between pt-5 pb-3 border-b-2">
                            <h6 className="text-lg font-semibold">Total</h6>
                            <h6 className="font-manrope font-bold text-xl lead-10 text-indigo-600">Kes {calculateSubtotal()}</h6>
                        </div>

                        <button className="rounded-md w-fit mt-4 py-2 px-5 bg-indigo-600 text-white font-semibold text-base transition-all duration-500 hover:bg-indigo-700">
                            Proced to Checkout
                        </button>
        
                    </div>
                </div>
                </>
            )}
            </div>
        </section>
                                            
    )
}

export default Cart;