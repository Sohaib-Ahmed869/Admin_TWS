import React from "react";
import { Fragment } from 'react';
import Admin_Navbar from "./Admin-Navbar";
import AdminProduct from "./Product-Page-Components/Admin-Product";
import CustomerView from "./Customer-Page-Components/customer-view";
import OrderView from "./Orders-Page-Components/OrderView";
import Settings from "./Settings-Page-Components/Settings";
import OffersView from "./Offers-Page-Components/OffersView";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import product from "../Data/product";
import category from "../Data/category";
import customerdata from "../Data/customer";
import orderdata from "../Data/order";



const URL = process.env.REACT_APP_BACKEND_URL;
function AdminComponent() {
    const [products, setProducts] = React.useState(product);
    const [categories, setCategories] = React.useState(category);
    const [customers, setCustomers] = React.useState(customerdata);
    const [gst, setGST] = React.useState(18);
    const addCategory = (Name) => {
        setCategories([...categories, { Name, Status: "Available" }]);
    }
    const DeactivateCategory = (Name) => {
        //set the status of the category to unavailable if available and vice versa
        setCategories(categories.map((category) => category.Name === Name ? { ...category, Status: category.Status === "Available" ? "Unavailable" : "Available" } : category));
    }
    const addProduct =async (Name, Description, Price, Category, Status, Image) => {
        try {
            const productResponse = await fetch(`${URL}/admin/product`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    Name,
                    Description,
                    Price,
                    Category,
                    Status,
                    Image: {
                        name: Name,
                        data: Image
                    }
                })
            });
            const productData = await productResponse.json();
            console.log(productData);
            if (productResponse.status === 200) {
                console.log("success");
                alert("Product Added");
                //refresh the page
                window.location.reload();
            } else {
                console.log("error");
                alert("Product Not Added");
            }

        }
        catch (error) {
            console.log(error);
        }
    }
    const DeactivateProduct = (Name) => {
        //set the status of the product to unavailable if available and vice versa
        setProducts(products.map((product) => product.Name === Name ? { ...product, Status: product.Status === "Active" ? "Inactive" : "Active" } : product));
    }
    const DeactivateCustomer = (Name) => {
        //set the status of the customer to unavailable if available and vice versa
        setCustomers(customers.map((customer) => customer.Name === Name ? { ...customer, Status: customer.Status === "Active" ? "Inactive" : "Active" } : customer));
    }
    const changeGST = (gst) => {
        setGST(gst);
    }
    const updateDiscount = (product) => {
        setProducts(products.map((prod) => prod.Name === product.Name ? { ...prod, Discount: product.Discount } : prod));
    }



    return (
        <div className="App">

            <Routes>
                <Route path="/products" element={<AdminProduct product={products} categories={categories} addCategory={addCategory} DeactivateCategory={DeactivateCategory} addProduct={addProduct} DeactivateProduct={DeactivateProduct} updateDiscount={updateDiscount} />} />
                <Route path="/orders" element={<OrderView orders={orderdata} />} />
                <Route path="/customers" element={<CustomerView customers={customers} DeactivateCustomer={DeactivateCustomer} />} />
                <Route path="/settings" element={<Settings gst={gst} changeGST={changeGST} />} />
                <Route path="/offers" element={<OffersView product={products} updateDiscount={updateDiscount} />} />
            </Routes>

        </div>
    );
}

export default AdminComponent;