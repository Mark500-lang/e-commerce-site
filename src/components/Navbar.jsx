import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useScrollListener from "./hooks/useScrollListener";
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar({data, query, setQuery, setResults, setNotFoundMessage}) {
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    //update classList of nav on scroll
    useEffect(() => {
    const _classList = [];

    if (scroll.y > 30 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);


    const handleSearch = (e) => {
        e.preventDefault();

        // Filter the data based on the query
        const filteredResults = data.filter(item => {
            const searchString = `${item.name} ${item.product_details.manufacture} ${item.product_details.applicable_vehicles} ${item.category?.cooling || ''} ${item.lighting?.body_parts || ''}`.toLowerCase();
            return searchString.includes(query.toLowerCase());
        });

        setResults(filteredResults);

         // Set a custom not-found message if no results
         if (filteredResults.length === 0) {
            setNotFoundMessage(`No results found for "${query}". Please try another term.`);
        } else {
            setNotFoundMessage('');
        }
    };
    return (
        <header
        className={`sticky top-0 w-full transition-all duration-300 ease-in-out transform ${navClassList.join(" ")}`}
        style={{ zIndex: "9999999" }}
        >
        <div className="mx-auto flex flex-row flex-wrap p-2 md:justify-normal justify-between items-center bg-[rgb(255,255,255)]">
            <Link
            to="/"
            className="flex title-font font-medium items-center text-grey-900 mr-4 border-r-none md:border-r border-gray-900 pr-4 md:mb-0"
            >
            {/* <img
                src="./logo192.png"
                alt="pine grove"
                className="w-8 h-8"
            /> */}
            <span className="ml-3 text-3xl md:block hidden">
                Logo
            </span>
            </Link>
            
            <nav
            className={`flex justify-center flex-row flex-grow md:relative absolute md:w-auto w-full left-0 right-0 md:top-auto top-16 z-50 text-base items-center p-4`}
            >
            <Link
                to="/"
                className="nav-link lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(96,77,194)] hover:text-white"
            >
                Home
            </Link>
            {/* <Link
                to="/add-book"
                className="nav-link lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(96,77,194)] hover:text-white"
            >
                ADD BOOK
            </Link> */}
            <Link
                to="/about"
                className="nav-link lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(96,77,194)] hover:text-white"
            >
                About
            </Link>
            <Link
                to="/shop"
                className="nav-link lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(96,77,194)] hover:text-white"
            >
                Shop
            </Link>
            <Link
                to="/contact"
                className="nav-link lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(96,77,194)] hover:text-white"
            >
                Contact
            </Link>
            </nav>
            <div className="flex justify-end items-center gap-3 pr-20">
                <form onSubmit={handleSearch} className="flex items-center space-x-2 mb-4">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by brand, make, category..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Search
                    </button>
                </form>

                <Link to="/profile">
                    <AccountCircleIcon/>
                </Link>
                <Link to="/cart">
                    <ShoppingCartIcon/>
                </Link>
            
            </div>
        </div>
        </header>
    );
    }

export default Navbar;