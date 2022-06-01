import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./navbarCom.scss";


const NavbarCom = () => {
    return (
        <div>
            <Navbar className="Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div className="container-fluid">
                    <Navbar.Brand href="#home">React Online-Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav nav-link">Home</Link>
                            <Link to="/products" className="nav nav-link">Products</Link>
                            <Link className="nav nav-link">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default NavbarCom;