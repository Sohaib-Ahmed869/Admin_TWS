import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';

const URL = process.env.REACT_APP_BACKEND_URL;

const buttonStyles = {
    marginTop: "20px",
    marginBottom: "20px",
    padding: "10px 30px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#FED926",
    color: "#000",
    cursor: "pointer",
    boxShadow: "0px 0px 5px #ccc",
    transition: "background-color 0.3s ease", // Add a transition for a smooth effect
};

const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#D5B001";
    e.target.style.color = "#fff";
    e.target.style.transition = "background-color 0.3s ease";
};

const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#FED926";
    e.target.style.color = "#000";
};

const SuperAdminSignin = () => {
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${URL}/superadmin/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Name: name,
                    Password: password
                })
            });

            const data = await response.json();
            console.log(data);

            if (response.status === 200) {
                console.log("success");
                localStorage.setItem('token', data.token);
                alert("Super Admin Signed In");
                window.location.href = "/superadmin/adminmanagement";
            }
            else {
                console.log("failure");
                alert("Invalid Credentials");
            }
            
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <React.Fragment>
            <Container fluid>
                <Row className="justify-content-md-center" style={{ alignContent: "center", alignItems: "center", justifyContent: "center", display: "flex", padding: "20px" }}>
                    <Col md={12}>
                        <h1
                            className="text-center section-heading"

                            style={{
                                textAlign: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                alignContent: "center",
                                display: "flex",
                                flexDirection: "column",
                                color: "#FED926",
                            }}
                        >SUPER ADMIN SIGNIN</h1>
                        <form onSubmit={handleSubmit} style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0px 0px 5px #ccc", marginBottom: "20px", backgroundColor: "#fff", display: "flex", flexDirection: "column", alignItems: "center", padding: "120px" }}>
                            <div className="form-group" style={{ marginTop: "20px", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <label htmlFor="name"
                                >Name</label>
                                <input type="text" className="form-control"
                                    style={{ marginTop: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
                                    onChange={(e) => setName(e.target.value)} value={name} />

                                <label htmlFor="password">Password</label>
                                <input type="text" className="form-control"
                                    style={{ marginTop: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                                    onChange={(e) => setPassword(e.target.value)} value={password} />
                            </div>
                            <Button type="submit" variant="primary"
                                style={buttonStyles}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >Signin</Button>

                        </form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default SuperAdminSignin;