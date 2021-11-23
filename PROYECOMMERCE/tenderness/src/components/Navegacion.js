import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navbar, Container, Nav, NavLink, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";





export default function Navegacion() {
    const { user, signOut } = useContext(AuthContext);
    const { signIn } = useContext(AuthContext);

    
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Store 5</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        
                        {user ? (
                            <>
                                <Link className="nav-link" to="/checkout">
                                    Checkout
                                </Link>
                            </>
                        ) : null}
                       
                    </Nav>
                    <Nav>

                    
                        {/* Login y Logout */}
                        

                        


                        {user ? (
                            <NavDropdown
                                title={
                                    <div className="d-inline">
                                        <img
                                            src={user.photoURL}
                                            className="me-2"
                                            alt="avatar"
                                            style={{ borderRadius: "50%", width: "30px" }}
                                        />
                                        <span>{user.displayName}</span>
                                    </div>
                                }
                            >
                                <NavDropdown.Item onClick={signOut}>Salir</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Link className="nav-link" to="/login">
                                Ingresar
                            </Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}