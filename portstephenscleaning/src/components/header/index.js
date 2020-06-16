import React, { Fragment } from 'react';
import './styles.css';
import {
    Nav,
    
} from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


/*<div className="text-header">
                    <h2>Lorem Ipsum is simply.</h2>
                    <p>Lorem Ipsum is simply dummy.</p>
                </div> /*/

                
export default function Header (){
    

 
    return(
        <Fragment>
            <div className="header">
            <Navbar collapseOnSelect expand="lg" className="header-show" id="header-show">
                <Navbar.Brand href="/"><img className="logoHeader" src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto">
                    <Link to="/services">services</Link>
                    <Link to="/faq">faq's</Link>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
                <div className="header-image"></div>
                
                
            </div>
        </Fragment>
    )
}