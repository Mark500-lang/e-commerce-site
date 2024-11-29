import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CategoryNavSection.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const categoryData = {
    Lighting: [
        "Tail Lamp",
        "Front Lamp",
        "Reverse Lamp",
        "Brake Lamp",
        "Room Lamp",
        "Bumper Lamp",
        "Side Lamp",
        "Corner Lamp",
        "Tail Lamp",
        "Fog Lamp",
        "Head Lamp",
        "Indicator Lamp",
        "License Lamp",
        "Light Case",
        "Rear Reflector",
        "Tail Lens",
        "Fog Lamp Cover",
        "Signal Switch",
    ],
    Cooling: [
        "Condenser",
        "Cooler Tank",
        "Fan Blade",
        "Fan Shroud",
        "Intercooler",
        "Radiator",
        "Radiator Cover",
        "Radiator Fittings",
        "Spare Tank",
        "Washer Tank",
    ],
    Body_Parts: [
        "Air Tank",
        "Body Parts",
        "Bonnet",
        "Bumper",
        "Door",
        "Fender",
        "Grille",
        "Mud Flap",
        "Radiator Support",
        "Roof Panel",
        "Tail Body",
        "Tail Gate",
        "Washer Tank",
        "Winding Machines",
    ],
    Mirror: [
        "Angle Mirror",
        "Fender Mirror",
        "Interior Mirror",
        "Mirror Arm",
        "Mirror Glass",
        "Side Mirror",
        "Mirror Arm",
    ]
};

function CategorySection() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const history = useHistory();
    const [activeCategory, setActiveCategory] = useState(null);

    const handleNavigation = (category, subcategory = null) => {
        const isSmallScreen = window.innerWidth <= 766; // Small screen threshold
    
        // If small screen and main category clicked, toggle the dropdown instead of navigating
        if (isSmallScreen && subcategory === null) {
            //opening and closing sub categories dropdown on mobile view
            if (category === activeCategory) {
                setActiveCategory(null); // Close the dropdown
            } else {
                setActiveCategory(category); // Open the dropdown
            }
            return;
        }
    
        const formattedCategory = category.toLowerCase().replace(/_/g, "-");
        const formattedSubcategory = subcategory
            ? subcategory.toLowerCase().replace(/ /g, "-")
            : null;
    
        if (subcategory) {
            setIsNavExpanded(false); // Close the hamburger menu
            history.push(`/catalogue/category/${formattedCategory}${formattedSubcategory ? `/${formattedSubcategory}` : ""}`);
        }
    };
    

    return (
        <>
            <div className="hamburger-parent">
                {isNavExpanded ? 
                    <CloseIcon onClick={() => {setIsNavExpanded(false);}}
                        className="hamburger" sx={{height: "30px", width: "30px"}}
                    />
                :
                    <MenuIcon onClick={() => {setIsNavExpanded(true);}}
                        className="hamburger" sx={{height: "30px", width: "30px"}}
                    />
                }
            </div>
            <ul id={``} className={`md:container md:mx-auto md:my-0 list-none md:grid md:grid-cols-5 px-10  md:justify-between  md:items-center ${
                isNavExpanded ? 
                    "category-list-active flex flex-col justify-start" 
                : 
                    "category-list-inactive"
            }`}>
                {Object.entries(categoryData).map(([category, subCategories]) => (
                    <li key={category} className="category-nav-item">
                        <p
                            onClick={() => handleNavigation(category)}
                            className={`main-category cursor-pointer md:p-2 pl-6 p-2 transition-all duration-100 flex md:justify-center md:items-center ${
                                activeCategory === category ? "bg-[#383C49] text-white" : "hover:bg-[#383C49] hover:text-white"
                            }`}
                        >
                            {category.replace("_", " ")} 
                            <span className="dropdown-icon">
                                <ArrowDropDownIcon className={` transition-all duration-100 ${activeCategory === category ? 
                                    "bg-[#383C49] text-white" : "hover:bg-[#383C49] hover:text-white"
                                }`}/>
                            </span>
                        </p>
                        <div className={`${activeCategory === category ? "toggle-mobile-subnav-active": "toggle-mobile-subnav"} subnav-content container md:border bg-white w-full`}>
                            {subCategories.map((subCategory, index) => (
                                <p
                                    key={index}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        handleNavigation(category, subCategory);
                                        setIsNavExpanded(false); // Close menu after navigation
                                    }}
                                >
                                    {subCategory}
                                </p>
                            ))}
                        </div>
                    </li>
                ))}
                <li className="category-nav-item bg-red-500">
                    <p className="main-category cursor-pointer md:p-2 pl-6 p-2  hover:bg-[#383C49] text-white transition-all duration-100 flex md:justify-center md:items-center">
                        On Sale
                    </p>
                    {/* <div className="container border bg-white shadow subnav-content grid grid-cols-3 w-full items-center">
                        <h1 className="p-2">faaaa</h1>
                        <h1 className="p-2">rrrrrrr</h1>
                        <h1 className="p-2">kkkksss</h1>
                    </div> */}
                </li>
            </ul>
        </>
    );
}

export default CategorySection;
