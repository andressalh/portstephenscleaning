import React, { Fragment } from 'react';
import './styles.css';
import {
    Nav,
    NavLink,
} from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar'


/*import logo from '../../assets/logo.png';
<img className="logo" src={logo} alt="Logo" /> */
import { Link } from 'react-router-dom';

export default function Header (){
    return(
        <Fragment>
            <div className="header">
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="/">Port</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink   href="/services" to="/services">services</NavLink>
                    <NavLink  href="/faq">faq's</NavLink>
                   
                </Nav>
                </Navbar.Collapse>
                </Navbar>
                <div className="text-header">
                    <h2>Lorem Ipsum is simply.</h2>
                    <p>Lorem Ipsum is simply dummy.</p>
                </div>
                
                
            </div>
        </Fragment>
    )
}