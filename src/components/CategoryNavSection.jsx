import React, { useState } from "react";

const categoryData=[
    {
        "lighting": [
            "Back Lamp",
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
            "Signal Switch"
        ],
        "cooling": [
            "Condenser",
            "Cooler Tank",
            "Fan Blade",
            "Fan Shroud",
            "Intercooler",
            "Radiator",
            "Radiator Cover",
            "Radiator Fittings",
            "Spare Tank",
            "Washer Tank"
        ],
        "body_parts": [
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
            "Winding Machines"
        ],
        "mirror": [
            "Angle Mirror",
            "Fender Mirror",
            "Interior Mirror",
            "Mirror arm",
            "Mirror glass",
            "Side Mirror",
            "Mirror Arm"
        ],
        "accessories": [],
        "on_sale": []
    }
]

function CategorySection({data}){
    const [filterTerm, setFilterTerm] = useState('');

    const handleCategoryFilter = (term)=>{
        setFilterTerm(term);
    }

    return(
        <ul className="container mx-auto grid grid-cols-5 px-10 py-2 justify-between items-center">
            <li className="">
                <p onCLick={(e) => handleCategoryFilter("lighting")} 
                    className="pl-[38%] cursor-pointer p-2 hover:bg-[#383C49] hover:text-white transition-all duration-100"
                >Lighting
                </p>
                <div>
                    
                </div>
            </li>
            <li>
                <p onCLick={(e) => handleCategoryFilter("mirror")} 
                    className="pl-[40%] cursor-pointer p-2 hover:bg-[#383C49] hover:text-white transition-all duration-100"
                >Mirror
                </p>
                <div>
                    
                </div>
            </li>
            <li>
                <p onCLick={(e) => handleCategoryFilter("cooling")} 
                    className="pl-[40%] cursor-pointer p-2 hover:bg-[#383C49] hover:text-white transition-all duration-100"
                >Cooling
                </p>
                <div>
                    
                </div>
            </li>

            <li>
                <p onCLick={(e) => handleCategoryFilter("body_parts")} 
                    className="pl-[40%] cursor-pointer p-2 hover:bg-[#383C49] hover:text-white transition-all duration-100"
                >Body Parts
                </p>
                <div>
                    
                </div>
            </li>
            <li>
                <p className="pl-[40%] cursor-pointer p-2 hover:bg-[#383C49] hover:text-white transition-all duration-100">On Sale</p>
                <div>
                    
                </div>
            </li>
        </ul>
    )
}

export default CategorySection;