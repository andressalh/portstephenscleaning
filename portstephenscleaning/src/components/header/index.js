import React, { Fragment } from 'react';
import './styles.css';
import {
    Nav,
    NavbarBrand,
    NavItem,
    Navbar,
} from 'reactstrap';
/*import logo from '../../assets/logo.png';
<img className="logo" src={logo} alt="Logo" /> */
import { Link } from 'react-router-dom';

export default function Header (){
    return(
        <Fragment>
            <div className="header">
                <Navbar  sticky="top"  expand="md">
                    <Nav>
                        <NavItem>
                            <NavbarBrand href="/">Port Stephens Cleaning </NavbarBrand>
                        </NavItem>
                    </Nav>
                    <Nav className="links">
                        <NavItem>
                            <Link to="/services">services</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/faq">faq's</Link>
                        </NavItem>  
                    </Nav>
                </Navbar>
            </div>
        </Fragment>
    )
}