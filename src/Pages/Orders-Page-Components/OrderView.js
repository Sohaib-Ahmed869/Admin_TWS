import React from "react";
import "./OrderView.css";

function OrderView(orders) {
    return (
        <div className="orders-container">
            <div className="orders">
                {orders.orders.map((order) => (
                    <div className="order">
                        <div className="order-details">
                            <div className="left">
                                <h1 className="order-id">Order ID: {order.Order_Id}</h1>
                                <h1>Name: {order.Customer_Name}</h1>
                                <h1>Address: {order.Customer_Address}</h1>
                                <h1>Phone: {order.Customer_Phone}</h1>
                                <h1>Total: {order.Total}/-</h1>
                                <h1>GST: {order.GST}/-</h1>
                                <h1>Order Total: {order.Grand_Total}/-</h1>
                            </div>
                            <div className="right">
                               
                                <h1
                                    className={order.Status === "Delivered" ? "order-delivered" : order.Status === "Unconfirmed" ? "order-unconfirmed" : order.Status === "Confirmed" ? "order-confirmed" : order.Status === "In Kitchen" ? "order-kitchen" : "order-delivering"}
                                >Status: {order.Status}</h1>
                                <h1>Payment Method: {order.Payment_Method}</h1>
                                <h1>Order Date: {order.Date}</h1>
                                <h1>Time: {order.Time}</h1>
                                <h1>Method: {order.Ordered_From}</h1>
                                <h1>Branch: {order.Branch_Name}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default OrderView;