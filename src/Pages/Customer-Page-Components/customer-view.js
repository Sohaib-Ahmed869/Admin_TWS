import React, { useState } from "react";
import CustomerModal from "./Customer-Modal";

import './customer-view.css';

const CustomerView = ({ customers, DeactivateCustomer }) => {
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const DeactivateCustomerFunc = (Name, Status) => {
        //give a confirmation alert
        if (window.confirm("Are you sure you want to " + (Status === "Active" ? "Deactivate" : "Activate") + " the customer " + Name + "?")) {
            //set the status of the customer to unavailable if available and vice versa
            DeactivateCustomer(Name);
        }
    }

    const viewCustomer = (customer) => {
        setSelectedCustomer(customer);
    };

    const closeModal = () => {
        setSelectedCustomer(null);
    };

    return (
        <div className="cust-view">
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Customer Phone</th>
                        <th>Customer Status</th>
                        <th>Deactivate</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.Name}>
                            <td>{customer.Name}</td>
                            <td>{customer.Email}</td>
                            <td>{customer.Phone}</td>
                            <td>{customer.Status}</td>
                            <td><button className="cust-delete" onClick={() => DeactivateCustomerFunc(customer.Name, customer.Status)}>{customer.Status === "Inactive" ? "Activate" : "Deactivate"}</button></td>
                            <td><button className="cust-view" onClick={() => viewCustomer(customer)}>View</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedCustomer && (
                <CustomerModal
                    className="modal"
                    customer={selectedCustomer}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default CustomerView;