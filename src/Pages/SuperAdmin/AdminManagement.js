import React, { useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Table,
    Form
} from 'react-bootstrap';

import { AiOutlineDelete } from 'react-icons/ai';


import { useState } from "react";

const URL = process.env.REACT_APP_BACKEND_URL;

const AdminManagement = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [admins, setAdmins] = useState([]);


    
    const handleAddAdmin = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${URL}/superadmin/addAdmin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Name: name,
                    Password: password,
                    Phone: phone,
                    Email: email,
                })
            });

            const data = await response.json();
            console.log(data);

            if (response.status === 200) {
                console.log("success");
                alert("Admin Added");
                //refresh the page
                window.location.reload();
            } else {
                console.log("error");
                alert("Admin Not Added");
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleDeleteAdmin = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${URL}/superadmin/deleteAdmin/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Id: id,
                })
            });

            const data = await response.json();
            console.log(data);

            if (response.status === 200) {
                console.log("success");
                alert("Admin Deleted");
                //refresh the page
                window.location.reload();
            }

            else {
                console.log("error");
                alert("Admin Not Deleted");
            }
        }

        catch (error) {
            console.log(error);
        }
    }

    const handleDeleteAdminButton = async(e) => {
        e.preventDefault();
        const id = e.target.value;
        try {
            const response = await fetch(`${URL}/superadmin/deleteAdmin/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Id: e.target.value,
                })
            });

            const data = await response.json();
            console.log(data);

            if (response.status === 200) {
                console.log("success");
                alert("Admin Deleted");
                //refresh the page
                window.location.reload();
            }

            else {
                console.log("error");
                alert("Admin Not Deleted");
            }
        }

        catch (error) {
            console.log(error);
        }
    }


    const getAdmins = async() => {
        try {
            const response = await fetch(`${URL}/superadmin/getAdmins`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await response.json();
            console.log(data);

            if (response.status === 200) {
                console.log("success in fetching admins");
                setAdmins(data.admins);
            }

            else {
                console.log("error", data.message);
                alert("Admins Not Fetched");
            }
        }

        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAdmins();
    }, []);

    return (
        <React.Fragment>
            <Container style={{ marginTop: "100px", marginBottom: "100px", border: "0px solid black", padding: "100px", boxShadow: "0px 0px 35px #ccc", borderRadius: "50px" }}>
                <Row>
                    <Col md={6}>
                        <h3>Add Admin</h3>
                        <Form onSubmit={handleAddAdmin} style={{marginTop: "10px", marginBottom: "20px"}}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone" onChange={(e) => setPhone(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{marginTop: "20px", backgroundColor: "#FED926", border: "0px solid black", color: "#000"}}>
                                Add Admin
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6} style={{marginTop: "0px"}}>
                        <h3>Delete Admin</h3>
                        <Form onSubmit={handleDeleteAdmin} style={{marginTop: "10px", marginBottom: "20px"}}>
                            <Form.Group controlId="formBasicId">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter Id" onChange={(e) => setId(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{marginTop: "20px", backgroundColor: "#FED926", border: "0px solid black", color: "#000"}}>
                                Delete Admin
                            </Button>
                        </Form>
                    </Col>
                    <Col md={12} style={{marginTop: "20px"}}>
                        <h3>Get Admins</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admins.map((admin) => (
                                    <tr style={{textAlign: "center", justifyContent: "center", alignItems: "center", alignContent: "center"}}>
                                        <td>{admin._id}</td>
                                        <td>{admin.Name}</td>
                                        <td>{admin.Phone}</td>
                                        <td>{admin.Email}</td>
                                        <td><Button type="submit" 
                                        style={{backgroundColor: "transparent", border: "0px solid black", color: "#000", padding:'0px', marginTop: "-10px"}}
                                        onClick={handleDeleteAdminButton} value={admin._id}>
                                            <AiOutlineDelete />
                                        </Button></td>

                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default AdminManagement;