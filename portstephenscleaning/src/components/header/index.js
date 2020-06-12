import React, { Fragment } from 'react';
import './styles.css';
import {
    Nav,
    NavbarBrand,
    NavItem,
    NavLink,
    Navbar,
} from 'reactstrap';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header (){
    return(
        <Fragment>
            <div className="header">
                <Navbar  sticky="top"  expand="md">
                    <Nav>
                        <NavItem>
                            <NavbarBrand href="/"><img className="logo" src={logo} alt="Logo" /></NavbarBrand>
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