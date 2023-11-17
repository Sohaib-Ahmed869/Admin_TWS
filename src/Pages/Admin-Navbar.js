import React from "react";

import './Admin-Navbar.css';

function Admin_Navbar() {
    return (
        <div className="Nav">
            <div className="details">
                <img src="./WrapSpot.png" alt="WrapSpot Logo" />
                <h1>Admin Dashboard</h1>
            </div>
            <div className="options">
                <ul>
                    <li>Product Management</li>
                    <li>Branch Management</li>
                    <li>Orders</li>
                    <li>Customers</li>
                    <li>Offers</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    );
}

export default Admin_Navbar;