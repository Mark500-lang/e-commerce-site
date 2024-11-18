import pic1 from './Assets/Radiator Mazda Demio DE3AS 2012.jpg';
import pic2 from './Assets/Radiator Mazda Demio DE3AS 2012-back.jpg';

import pic3 from './Assets/Radiator Core Support Toyota Corolla Fielder ZRE142.jpg';
import pic4 from './Assets/Radiator Core Support Toyota Corolla Fielder ZRE142-back.jpg';

import pic5 from './Assets/Bonnet Hood Subaru Impreza G4 GJ7 Sports GP7 2012 - 2015.jpg';
import pic6 from './Assets/Bonnet Hood Subaru Impreza G4 GJ7 Sports GP7 2012 - 2015-back.jpg';

import pic7 from './Assets/head-lights-honda-front.webp';
import pic8 from './Assets/head-lights-honda-back.jpg';

import pic9 from './Assets/Tail Lamp Suzuki Alto HA25S Lhs.jpg';
import pic10 from './Assets/Tail Lamp Suzuki Alto HA25S Lhs-back.jpg';

export const data = [
    {
        id: 1,
        name: "Radiator Mazda Demio DE3AS 2012",
        sku_product_code: "M0001483",
        price: 12000,
        rating: "5",
        remaining_units: 120,
        category: {
            cooling: "Radiator"
        },
        media: [
            {imageUrl: pic1},
            {imageUrl: pic2},
        ],
        in_cart: true,
        product_details:{
            sku: "M0001483",
            manufacture: "AUTOJAPAN",
            applicable_vehicles: "Mazda Demio (2012-2024)",
        },
        reviews: [
            {
                id: "1",
                user_name: "Alfred",
                email: "example@gmail.com",
                score: 4,
                review: "Worked as expected",
            },
            {
                id: "2",
                user_name: "Faith",
                email: "example@gmail.com",
                score: 5,
                review: "Value for your money",
            },
            {
                id: "3",
                user_name: "Walter",
                email: "example@gmail.com",
                score: 2,
                review: "It worked perfectly",
            },
        ],
    },{
        id: 2,
        name: "Radiator Core Support Toyota Corolla Fielder ZRE142",
        sku_product_code: "R0001690",
        price: 5000,
        rating: "4.4",
        remaining_units: 50,
        category: {
            cooling: "Radiator"
        },
        media: [
            {imageUrl: pic3},
            {imageUrl: pic4},
        ],
        in_cart: true,
        product_details:{
            sku: "",
            manufacture: "",
            applicable_vehicles: "Toyota Corolla",
        },
        reviews: [
            {
                id: "1",
                user_name: "Alfred",
                email: "example@gmail.com",
                score: 4,
                review: "Worked as expected",
            },
            {
                id: "2",
                user_name: "Faith",
                email: "example@gmail.com",
                score: 3,
                review: "Value for your money",
            },
            {
                id: "3",
                user_name: "Walter",
                email: "example@gmail.com",
                score: 5,
                review: "It worked perfectly",
            },
        ],
    },{
        id: 3,
        name: "Bonnet Hood Subaru Impreza G4 GJ7 Sports GP7 2012 - 2015",
        sku_product_code: "E0006882",
        price: 22000,
        rating: "4.4",
        remaining_units: 50,
        category: {
            body_parts: "Bonnet"
        },
        media: [
            {imageUrl: pic5},
            {imageUrl: pic6},
        ],
        in_cart: false,
        product_details:{
            sku: "E0006882",
            manufacture: "AUTOJAPAN",
            applicable_vehicles: "Subaru Impreza (2012-2015)",
        },
        reviews: [
        ],
    },{
        id: 4,
        name: "Head Lamp Honda Fit GK4 2013 Lhs",
        sku_product_code: "D0005862",
        price: 22000,
        rating: "4.4",
        remaining_units: 50,
        lighting: {
            body_parts: "Front Lamp"
        },
        media: [
            {imageUrl: pic7},
            {imageUrl: pic8},
        ],
        in_cart: false,
        product_details:{
            sku: "D0005862",
            manufacture: "AUTOJAPAN",
            applicable_vehicles: "Honda FIT (2013-2024)",
        },
        reviews: [
        ],
    },{
        id: 5,
        name: "Tail Lamp Suzuki Alto HA25S Lhs",
        sku_product_code: "D0005703",
        price: 8500,
        rating: "4.4",
        remaining_units: 50,
        lighting: {
            body_parts: "Front Lamp"
        },
        media: [
            {imageUrl: pic9},
            {imageUrl: pic10},
        ],
        in_cart: false,
        product_details:{
            sku: "D0005703",
            manufacture: "AUTOJAPAN",
            applicable_vehicles: "Suzuki Alto",
        },
        reviews: [
        ],
    },
];