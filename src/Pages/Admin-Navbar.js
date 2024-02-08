import React from "react";
import { Link } from 'react-router-dom';

import './Admin-Navbar.css';

import WrapSpot from '../Assets/WrapSpot.png'

function Admin_Navbar() {
    return (
        <div className="Nav">
            <div className="details">
                <Link to="/admin/products" className="link">
                    <img src={WrapSpot} alt="WrapSpot Logo" />
                </Link>
                <h1>Admin Dashboard</h1>
            </div>
            <div className="options">
                <ul>
                    <li><Link to="/admin/products" className="link">Products</Link></li>
                    <li>Branch Management</li>
                    <li><Link to="/admin/orders" className="link">Orders</Link></li>
                    <li><Link to="/admin/customers" className="link">Customers</Link></li>
                    <li><Link to="/admin/offers" className="link">Offers</Link></li>
                    <li><Link to="/admin/settings" className="link">Settings</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Admin_Navbar;