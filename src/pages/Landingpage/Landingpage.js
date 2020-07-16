import React from 'react';
import "./card-style.css";
import { Link, withRouter, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';

const Landingpage = props => {
    return(
        <div>
            {/* <div>
            <Navbar bg="light" expand="lg">
                <NavbarBrand className="navbar-brand">
                    <h1 >Face Africa</h1>
                </NavbarBrand>
                    <Nav className="mr-auto" >
                        <NavLink href=".././Login/Login">
                            <h1>Login</h1>
                        </NavLink>
                        <NavLink href=".././Login/Login">
                            <h1>Signup</h1>
                        </NavLink>
                    </Nav>
            </Navbar>
            </div> */}
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt={("img1")} className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title" color="ghostwhite">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.text}
                </p>
                <Link to = ".././Login/Login" > <button className="btn btn-outline-success" >Join</button></Link>
            </div>
        </div>
        </div>
    );
}

export default withRouter(Landingpage);