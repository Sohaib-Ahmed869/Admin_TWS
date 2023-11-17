import React from "react";
import "./CustomerModal.css"; // Import the CSS file for styling

const CustomerModal = ({ customer, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close-modal" onClick={closeModal}>
          &times;
        </span>
        <h2>Customer Details</h2>
        <p>Name: {customer.Name}</p>
        <p>Email: {customer.Email}</p>
        <p>Phone: {customer.Phone}</p>
        <p>Status: {customer.Status}</p>
      </div>
    </div>
  );
};

export default CustomerModal;
