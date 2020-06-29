import React, { Fragment } from 'react';
import './styles.css';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/logo.webp';

                
export default function Header (){
    
 
    return(
        <Fragment>
            <div className="header">
            <Navbar collapseOnSelect expand="lg" className="header-show fixed-top" id="header-show">
                <Navbar.Brand href="/"><img className="logoHeader" src={logo} alt="Port Stephens Cleaning Services room" /></Navbar.Brand>
                <h1>Port Stephens Cleaning Services</h1>
                </Navbar>
                <div className="header-image"></div>
            </div>
            <hr className="hr-home"/>
        </Fragment>
    )
}