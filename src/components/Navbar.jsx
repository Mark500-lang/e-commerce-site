import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useScrollListener from "./hooks/useScrollListener";
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CategorySection from "./CategoryNavSection";

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
        className={`shadow bg-[rgb(255,255,255)] sticky top-0 w-full transition-all duration-300 ease-in-out transform ${navClassList.join(" ")}`}
        style={{ zIndex: "9999999" }}
        >
        <div className="bg-gray-100">
            <div className="container mx-auto flex flex-row px-10 py-2 justify-between items-center">
                <div className="flex flex-row">
                    <p className="font-semibold pr-3">Customer Care: <span className="pl-1">+254700000000</span></p>
                    <Link to="/contacts" className="font-semibold border-l-2 border-gray-800 pl-3">Contacts</Link>
                </div>
            </div>
        </div>
        <div className="">
            <div className="container mx-auto flex flex-row flex-wrap px-10 py-5 justify-between items-center">
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

                <div className="flex ">
                    <form onSubmit={handleSearch} className="flex items-center mb-4 border-2 border-gray-300 p-1 rounded-full">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search product"
                            className="w-full px-4 py-2 border-0 border-gray-300 rounded-full focus:outline-none focus:ring-0"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#383C49] hover:bg-[#1A1E26] text-white rounded-full transition"
                        >
                            <SearchIcon/>
                        </button>
                    </form>
                </div>
                <div className="flex gap-5">
                    <Link to="/cart">
                        <ShoppingCartIcon
                            className="text-[#383C49] hover:text-[#1A1E26]"
                            sx={{height: "1.8rem", width: "1.8rem"}}
                        />
                    </Link>
                    <Link to="/profile">
                        <AccountCircleIcon
                            className="text-[#383C49] hover:text-[#1A1E26]"
                            sx={{height: "1.8rem", width: "1.8rem"}}/>
                    </Link>
                </div>
                
            </div>
        </div>
        {/* category section */}
        <CategorySection data={data}/>
        </header>
    );
    }

export default Navbar;