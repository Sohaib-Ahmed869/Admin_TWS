import React from "react";
import "./Admin-Add-Product.css"; // Assuming you have a separate CSS file

const AdminAddProduct = ({ product, addProduct }) => {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [image, setImage] = React.useState("");

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result.split(',')[1]);
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fileInput = document.getElementById('image');
        const file = fileInput.files[0];
        if(file === undefined) {
            alert("Please select a file");
            return;
        }
        const base64 = await convertBase64(file);
        addProduct(name, description, price, category, status, base64);
        setName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setStatus("");
        setImage("");
    }

    return (
        <div className="add-product-container">
            <h2 className="add-product-title">Add Product</h2>
            <form className="add-product-form" onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label">Product Name</label>
                <input type="text" id="name" className="form-input" value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="description" className="form-label">Product Description</label>
                <input type="text" id="description" className="form-input" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <label htmlFor="price" className="form-label">Product Price</label>
                <input type="number" id="price" className="form-input" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <label htmlFor="category" className="form-label">Product Category</label>
                <select id="category" className="form-select" value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Drink">Drink</option>
                    <option value="Dessert">Dessert</option>
                </select>
                <label htmlFor="status" className="form-label">Product Status</label>
                <select id="status" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="">Select Status</option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                </select>
                <label htmlFor="image" className="form-label">Product Image</label>
                <input type="file" id="image" className="form-input" value={image} onChange={(e) => setImage(e.target.value)} required />
                <button type="submit" className="form-button">Add Product</button>
            </form>
        </div>
    );
}

export default AdminAddProduct;
