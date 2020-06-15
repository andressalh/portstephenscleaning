import React, { Fragment } from 'react';
import {
    CardImg,
    Card,
    CardBody,
    CardText,
    CardTitle,

} from 'reactstrap';
import eco from '../../assets/eco.png';
import me from '../../assets/me.jpg';

import './styles.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Book from '../../components/book';
import { Link } from 'react-router-dom';


export default function Home (){
    return(
        <Fragment>
            <Header/>

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
                            <CardTitle>Our focus</CardTitle>
                            <CardText>
                            The number one priority for our business is you, our customer! We have built and grown our business around 3 pillars – reliability, consistency and attention to detail. We provide a cleaning service to our clients that always meets their expectations and often exceeds them.                           
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card className="card-why-us" >
                        <CardImg variant="top" src={eco} />
                        <CardBody>
                            <CardTitle>Customer satisfaction</CardTitle>
                            <CardText>
                            Our goal is to make the cleaning of your home or business something that no longer requires your attention or effort, letting you get on with more important things in your life, while enjoying the positive atmosphere left by our caring touch.                            
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card className="card-why-us" >
                        <CardImg variant="top" src={eco} />
                        <CardBody>
                            <CardTitle>High quality service</CardTitle>
                            <CardText>
                            We live by our reputation, a fact which is displayed in the amount of business we have as a result of customer referrals and the proportion of our customers with whom we have ongoing relationships – 100%! We are extremely proud of these figures, and feel they are a reflection of our values and extremely high cleaning and service standards.                            
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card className="card-why-us" >
                        <CardImg variant="top" src={eco} />
                        <CardBody>
                            <CardTitle>Easy, fast communication</CardTitle>
                            <CardText>
                                We pride ourselves on being a responsive and responsible service and consider prompt and accurate communication with our customers to be of the utmost importance. Many of our customers live in other cities, and we encourage them to consider us their local “eyes and ears” for their investments. As such, we are available by phone or email 24/7, all year round                        
                            </CardText>
                        </CardBody>

                    </Card>
                </div>
            </div>
       
            <div className="div-book">
                <h3>Book your free consultation now!</h3>
                <Book/>
            </div>
           

            <div id="services-home">
                <h2>Our services</h2>
                <div className="row services-home">
                   
                    <Link to="/services">
                        <div id="div-services-home" className="first-services-home">
                            <ul>
                                <li>Residential Cleaning</li>
                                <li>Commercial cleaning</li>
                                <li>Spring cleaning</li>
                            </ul>

                        </div>
                    </Link>
                    <Link to="/services">
                        <div id="div-services-home">
                            <ul>
                                <li>End of lease</li>
                                <li>Airbnb</li>
                                <li>Laundry</li>
                            </ul>
                        </div>
                        </Link>
                </div>
                
            </div>

            <div className="div-carousel"> 
                <h2>What our customers say</h2>
                <Carousel>
                    <Carousel.Item>
                        <p>I came home from hospital with my 2nd baby to find our home absolutely spotless, dirty laundry washed and dried, cupboards sorted out.I felt so relaxed! Andrea is very thorough and is consistent every time. I will definitely continue to use her services and highly recommend her.
                        </p>
                        <h5>Laurinda - Anna Bay</h5>
                        <img
                        className="slider-name"
                        src={me}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>These ladies will redefine what you consider clean and tidy to be!
                        </p>
                        <h5>Jack - Corlette</h5>
                        <img
                        className="slider-name"
                        src={me}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>Andrea and her team are very professional. They are always flexible with clean times and their rates are most reasonable in the port Stephens area. They do a beautiful and thorough job on my residence! My guests always compliment on how clean my house is. I can’t thank them enough for their professional service!
                        </p>
                        <h5>Liz - Corlette</h5>
                        <img
                        className="slider-name"
                        src={me}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>I just wanted to let you know we're very happy with the clean at Shoal Beach House. Thank you for your attention to detail. Look forward to growing our businesses together.
                        </p>
                        <h5>Sharon - Nelson bay</h5>
                        <img
                        className="slider-name"
                        src={me}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    </Carousel>
            </div>
           <Footer/>
        
        </Fragment>
    )
}