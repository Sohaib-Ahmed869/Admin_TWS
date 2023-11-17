import React from "react";
import "./Admin-Categories.css";
const AdminCategoryView = ({categories, addCategory, DeactivateCategory}) => {
    const deactivate = (Name, Status) => {
        //confirmation message to activate or deactivate the category
        if (window.confirm("Are you sure you want to " + (Status === "Available" ? "Deactivate" : "Activate") + " the category " + Name + "?")) {
            //set the status of the category to unavailable if available and vice versa
            DeactivateCategory(Name);
        }
    }
        

    return (
        <div>
            <div className="add-category">
                <h2 className="add-category-title">Add a new Category</h2>
                <form>
                    <input type="text" id="name" required placeholder="Category Name" />
                    <button type="button" onClick={() => addCategory(document.getElementById("name").value)}>Add Category</button>
                </form>
            </div>
            <table className="cat-table">
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Status</th>
                        <th>Deactivate</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.Name}</td>
                            <td>{category.Status}</td>
                            <td><button onClick={() => deactivate(category.Name, category.Status)}>{category.Status === "Available" ? "Deactivate" : "Activate"}</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default AdminCategoryView;