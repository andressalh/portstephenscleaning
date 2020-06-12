import React, { Fragment } from 'react';
import {
    Nav,
    NavbarBrand,
    NavItem,
    NavLink,
    Navbar,
    CardImg,
    Card,
    CardBody,
    CardText,
    CardTitle,
} from 'reactstrap';
import logo from '../../assets/logo.png';
import eco from '../../assets/eco.png';
import me from '../../assets/me.jpg';
import room from '../../assets/room.jpg';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import { Linking } from 'react-native';



export default function Home (){
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
                        <NavLink href="#about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#services">Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#faq">FAQ'S</NavLink>
                    </NavItem>  
                    </Nav>
                </Navbar >
            </div>

            <div id="about">
            <h2>About Us</h2>
            <p>We're a small family-owned and -operated business located in Nelson Bay-Corlette, and are proud to be relied upon by local and out-of-town property owners to provide detailed, committed and reliable home, AirBnB and commercial cleaning and laundry services in the Port Stephens area. We happily go the extra mile with any number of supplementary tasks that most don't even consider! If you need someone to take care of all the things you can't (or just don't have time to), call us today for a chat, and we can arrange to arrive at your location weekly, fortnightly or monthly.</p>
            </div>

            <div id="why-us">
                <h2>Why us</h2>
                <div className="row row-why-us">
                    <Card className="card-why-us" >
                        <CardImg variant="top" src={eco} />
                        <CardBody>
                            <CardTitle>Environmentally Friendly</CardTitle>
                            <CardText>
                                Have a chemical sensitivity or want to help the planet? We have environmentally friendly cleaning products and techniques and can adjust to meet your needs.
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card className="card-why-us" >
                        <CardImg variant="top" src={eco} />
                        <CardBody>
                            <CardTitle>Environmentally Friendly</CardTitle>
                            <CardText>
                                Have a chemical sensitivity or want to help the planet? We have environmentally friendly cleaning products and techniques and can adjust to meet your needs.
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card className="card-why-us" >
                        <CardImg variant="top" src={eco} />
                        <CardBody>
                            <CardTitle>Environmentally Friendly</CardTitle>
                            <CardText>
                                Have a chemical sensitivity or want to help the planet? We have environmentally friendly cleaning products and techniques and can adjust to meet your needs.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
       
            <div className="div-img">
                <img className="room" src={room} alt="room" />
            </div>

            <div className="carousel"> 
                <h2>What our customers say</h2>
                <Carousel>
                    <Carousel.Item>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>
                        <h5>Andressa Henriques</h5>
                        <img
                        className="slider-name"
                        src={me}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>
                        <h5>Andressa Henriques</h5>
                        <img
                        className="slider-name"
                        src={me}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>
                        <h5>Andressa Henriques</h5>
                        <img
                        className="slider-name"
                        src={me}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    </Carousel>
            </div>

            <footer>
                <Nav className="navbar navbar-expand-lg navbarMenu">
                <NavItem>
                    <NavLink target="_blank" href="https://www.facebook.com/Port-Stephens-Cleaning-Services-100338908129015/"><LogoFacebook name="LogoFacebook"></LogoFacebook></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink target="_blank"  href="https://www.linkedin.com/in/andressalh/" ><LogoLinkedin name="logo-linkedin"></LogoLinkedin></NavLink>
                </NavItem>
                </Nav>
            </footer> 
        
        </Fragment>
    )
}