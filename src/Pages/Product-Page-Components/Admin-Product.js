import React from "react";
import { useState } from "react";
import AdminProductView from "./Admin-Product-view";
import AdminCategoryView from "./Admin-Categories";
import AdminAddProduct from "./Admin-Add-Product";
import { getProducts } from "../../Controller/Admin";


const AdminProduct = ({product,categories, addCategory, addProduct, DeactivateCategory, DeactivateProduct}) => {
    const [option, setOption] = useState("View");
    const [products, setProducts] = useState([]);

    React.useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        }
        fetchProducts();
    }
    , []);


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
                {renderOption(option, product,products, categories, addCategory, addProduct, DeactivateCategory, DeactivateProduct)}
            </div>
        </div>
    );
}

const renderOption = (option, product,products, categories, addCategory, addProduct, DeactivateCategory, DeactivateProduct) => {
    switch (option) {
        case "View":
            return <AdminProductView products={products} addProduct={addProduct} DeactivateProduct={DeactivateProduct} />;
        case "Add":
            return <AdminAddProduct products={product} addProduct={addProduct} />;
        case "Categories":
            return <AdminCategoryView categories={categories} addCategory={addCategory} DeactivateCategory={DeactivateCategory} />;
        default:
            return <AdminProductView products={products} addProduct={addProduct} />;
    }
}


export default AdminProduct;