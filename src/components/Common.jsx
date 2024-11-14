import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';

function Common({ children }){
    return(
        <div className="flex flex-col">
            <Navbar/>
            { children }
            <Footer/>
        </div>
    )
}

export default Common;