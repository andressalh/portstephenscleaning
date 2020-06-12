import React, { Fragment } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './styles.css';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';



export default function Home (){
    return(
        <Fragment>
            <footer>
                <div>

                </div>
                <Nav className="navbar navbar-expand-lg navbarMenu">
                <NavItem>
                    <NavLink target="_blank" href="https://www.facebook.com/Port-Stephens-Cleaning-Services-100338908129015/"><LogoFacebook name="LogoFacebook"></LogoFacebook></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink target="_blank"  href="https://www.linkedin.com/in/andressalh/" ><LogoLinkedin name="logo-linkedin"></LogoLinkedin></NavLink>
                </NavItem>
                </Nav>
                <div>
                 <p>© Port Stephens Cleaning | All Rights Reserved | Terms & Conditions</p> 
                 <NavLink target="_blank"  href="andressahenriques.com" >Design by andressahenriques.com</NavLink>
                 <p></p>
                </div>
            </footer> 
        
        </Fragment>
    )
}