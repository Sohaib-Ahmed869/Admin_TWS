import React from "react";

import "./Admin-Product-view.css";

const AdminProductView = ({ products, DeactivateProduct }) => {
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
                    {products &&
                        products.map((product, index) => (
                            <tr key={index}>
                                <td>
                                    <img
                                        key={index}
                                        src={`data:${product.Image.contentType};base64,${product.Image.data.data}`}
                                        alt={`Product ${index + 1}`}
                                        style={{ maxWidth: '50px', maxHeight: '50px', margin: '5px' }}
                                    />
                                </td>
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
