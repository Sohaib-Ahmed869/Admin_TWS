import React from "react";
import Admin_Navbar from "./Admin-Navbar";
import AdminProduct from "./Product-Page-Components/Admin-Product";
import CustomerView from "./Customer-Page-Components/customer-view";
import OrderView from "./Orders-Page-Components/OrderView";
import Settings from "./Settings-Page-Components/Settings";
import OffersView from "./Offers-Page-Components/OffersView";

import product from "../Data/product";
import category from "../Data/category";
import customerdata from "../Data/customer";
import orderdata from "../Data/order";

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
    const addProduct = (Name, Description, Price, Category, Status, Image) => {
        setProducts([...products, { Name, Description, Price, Category, Status, Image }]);
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
            <Admin_Navbar />
            {/* <CustomerView customers={customers} DeactivateCustomer={DeactivateCustomer} /> */}
            {/* <AdminProduct products={products} categories={categories} addCategory={addCategory} addProduct={addProduct} DeactivateCategory={DeactivateCategory} DeactivateProduct={DeactivateProduct} /> */}
            {/* <OrderView orders={orderdata} /> */}
            {/* <Settings gst={18} changeGST={changeGST} /> */}
            <OffersView products={products} updateDiscount={updateDiscount} />
        </div>
    );
}

export default AdminComponent;