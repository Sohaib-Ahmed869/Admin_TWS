import React from "react";
import { useState } from "react";
import AdminProductView from "./Admin-Product-view";
import AdminCategoryView from "./Admin-Categories";
import AdminAddProduct from "./Admin-Add-Product";


const AdminProduct = ({products, categories, addCategory, addProduct, DeactivateCategory, DeactivateProduct}) => {
    const [option, setOption] = useState("View");
    return (
        <div>
            <div className="prod-options">
                <ul>
                    <li onClick={() => setOption("View")}>View</li>
                    <li onClick={() => setOption("Add")}>Add</li>
                    <li onClick={() => setOption("Categories")}>Categories</li>
                </ul>
            </div>
            <div className="prod-view">
                {renderOption(option, products, categories, addCategory, addProduct, DeactivateCategory, DeactivateProduct)}
            </div>
        </div>
    );
}

const renderOption = (option, products, categories, addCategory, addProduct, DeactivateCategory, DeactivateProduct) => {
    switch (option) {
        case "View":
            return <AdminProductView products={products} addProduct={addProduct} DeactivateProduct={DeactivateProduct} />;
        case "Add":
            return <AdminAddProduct products={products} addProduct={addProduct} />;
        case "Categories":
            return <AdminCategoryView categories={categories} addCategory={addCategory} DeactivateCategory={DeactivateCategory} />;
        default:
            return <AdminProductView products={products} addProduct={addProduct} />;
    }
}


export default AdminProduct;