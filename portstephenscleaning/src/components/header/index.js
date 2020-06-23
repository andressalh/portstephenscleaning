import React, { Fragment } from 'react';
import './styles.css';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/logo.png';

                
export default function Header (){
    
 
    return(
        <Fragment>
            <div className="header">
            <Navbar collapseOnSelect expand="lg" className="header-show fixed-top" id="header-show">
                <Navbar.Brand href="/"><img className="logoHeader" src={logo} alt="Logo" /></Navbar.Brand>
                
                </Navbar>
                <div className="header-image"></div>
            </div>
            <hr className="hr-home"/>
        </Fragment>
    )
}