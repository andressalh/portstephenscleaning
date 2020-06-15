import React, { Fragment } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './styles.css';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { RiFacebookCircleLine } from 'react-icons/ri';


export default function Home (){
    return(
        <Fragment>
            <footer >
                <div className="div-footer">
                    <Nav className="navbar navbar-expand-lg navbarMenu">
                    <NavItem>
                        <NavLink target="_blank" href="https://www.facebook.com/Port-Stephens-Cleaning-Services-100338908129015/"><RiFacebookCircleLine/></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="logo-whatsapp" target="_blank"  href=" https://api.whatsapp.com/send?phone=61406204408&text=Hey%20there" ><AiOutlineWhatsApp/></NavLink>
                    </NavItem>
                    </Nav>
                    <div className="contact-info">
                     <h5 id="contact-email">andreadavison@gmail.com</h5>
                        <h5>406 204 408</h5>
                    </div>
                    
                </div>
                <hr/>
                
                <div className="div-contact">
                   
                    <p>© Port Stephens Cleaning | All Rights Reserved | Terms & Conditions</p> 
                    <NavLink target="_blank"  href="https://andressahenriques.com/" rel="noopener noreferrer">Design by andressahenriques.com</NavLink>

                </div>
            </footer> 
        
        </Fragment>
    )
}