import React from "react";

import "./Admin-Product-view.css";

const AdminProductView = ({ products , DeactivateProduct}) => {
    return (
        <div className="prod-view">
            <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Product Price</th>
                        <th>Product Category</th>
                        <th>Product Status</th>
                        <th>Deactivate</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.Name}>
                            <td><img src={product.Image} alt={product.Name} /></td>
                            <td>{product.Name}</td>
                            <td>{product.Description}</td>
                            <td>{product.Price}</td>
                            <td>{product.Category}</td>
                            <td>{product.Status}</td>
                            <td><button className="prod-delete" onClick={() => DeactivateProduct(product.Name)}>{product.Status === "Inactive" ? "Activate" : "Deactivate"}</button></td>
                            <td><button className="prod-edit">Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminProductView;
