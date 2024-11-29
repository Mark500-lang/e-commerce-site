import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CategoryPage({ data }) {
    const { category, subcategory } = useParams();

    // Normalize the category and subcategory from the URL (replace hyphens with spaces)
    const normalizedCategory = category.replace(/-/g, " ").toLowerCase();
    const normalizedSubcategory = subcategory ? subcategory.replace(/-/g, " ").toLowerCase() : null;

    const filteredProducts = data.filter((item) => {
        // Extract the category key and subcategory value
        const rawCategoryKey = Object.keys(item.category)[0];
        const normalizedCategoryKey = rawCategoryKey?.replace(/_/g, " ").toLowerCase();
        const normalizedSubcategoryValue = item.category[rawCategoryKey]?.toLowerCase();

        if (!normalizedCategoryKey || !normalizedSubcategoryValue) {
            return false; // Skip items without valid category or subcategory
        }

        // Match the category and subcategory
        if (normalizedSubcategory) {
            return (
                normalizedCategoryKey === normalizedCategory &&
                normalizedSubcategoryValue === normalizedSubcategory
            );
        }
        return normalizedCategoryKey === normalizedCategory;
    });

    return (
        <div className="min-h-screen">
            <div className="container mx-auto pt-8 pb-20">
                <h5 className="text-xl mb-4">
                    Showing products in category: <span className="font-bold">{category.replace("-", " ")}</span>
                    {subcategory && (
                        <>
                            {" > "}
                            <span className="font-bold">{subcategory.replace("-", " ")}</span>
                        </>
                    )}
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <Link
                                to={`/product/${item.id}`}
                                key={item.id}
                                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                            >
                                <img
                                    className="p-8 rounded-t-lg"
                                    src={item.media[0].imageUrl}
                                    alt="product"
                                />
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{item.name}</h5>
                                    <div className="flex items-center pt-4">
                                        <span className="text-xl font-bold text-gray-900">KES {item.price}</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <h5 className="text-lg font-bold text-red-500">No products found in this category.</h5>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;