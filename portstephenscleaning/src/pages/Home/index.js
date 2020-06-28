import React, { Fragment, Component } from 'react';
import {
    CardImg,
    Card,
    CardBody,
    CardText,
    CardTitle,

} from 'reactstrap';
import ourFocus from '../../assets/ourFocus.webp';
import cleaning from '../../assets/cleaning.webp';
import highQuality from '../../assets/highQuality.webp';
import fastCommunication from '../../assets/fastCommunication.webp';
import services from '../../assets/services.webp';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Book from '../../components/book';
import customerSatisfaction from '../../assets/customerSatisfaction.webp';
class Home extends Component{

    render (){
        return(
            <Fragment>
                <Header/>
                
                <div id="about">
                    <h2>About Us</h2>
                    <p>We're a small family-owned and -operated business located in Nelson Bay-Corlette, and are proud to be relied upon by local and out-of-town property owners to provide detailed, committed and reliable home, AirBnB and commercial cleaning and laundry services in the Port Stephens area. We happily go the extra mile with any number of supplementary tasks that most don't even consider! If you need someone to take care of all the things you can't (or just don't have time to), call us today for a chat, and we can arrange to arrive at your location weekly, fortnightly or monthly.</p>
                </div>
    
                                
                <div id="why-us">
                    <h2>Why us</h2>
                    <div className="row row-why-us ">
                        <Card className="card-why-us" >
                            <CardImg variant="top" src={ourFocus} alt="Port Stephens Cleaning Services Icon"/>
                            <CardBody>
                                <CardTitle>Our focus</CardTitle>
                                <CardText>
                                The number one priority for our business is you, our customer! We have built and grown our business around 3 pillars – reliability, consistency and attention to detail. We provide a cleaning service to our clients that always meets their expectations and often exceeds them.                           
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card className="card-why-us" >
                            <CardImg variant="top" src={customerSatisfaction} alt="Port Stephens Cleaning Services Icon" />
                            <CardBody>
                                <CardTitle>Customer satisfaction</CardTitle>
                                <CardText>
                                Our goal is to make the cleaning of your home or business something that no longer requires your attention or effort, letting you get on with more important things in your life, while enjoying the positive atmosphere left by our caring touch.                            
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card className="card-why-us" >
                            <CardImg variant="top" src={highQuality} alt="Port Stephens Cleaning Services Icon"/>
                            <CardBody>
                                <CardTitle>High quality service</CardTitle>
                                <CardText>
                                We live by our reputation, a fact which is displayed in the amount of business we have as a result of customer referrals and the proportion of our customers with whom we have ongoing relationships – 100%! We are extremely proud of these figures, and feel they are a reflection of our values and extremely high cleaning and service standards.                            
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card className="card-why-us" >
                            <CardImg variant="top" src={fastCommunication} alt="Port Stephens Cleaning Services Icon"/>
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
                    <div  className="services-home-left">
                        <img
                            className=""
                            src={cleaning}
                            alt="Port Stephens Cleaning Services"
                            />
                    </div>
                    <div className="services-home-right">
                        <h3>Reduce Headaches.</h3>
                        <h3>Increase Happiness.</h3>
                        <p>Port Stephens Cleaning Services makes it easy to book a cleaning. <strong>Anywhere, anytime.</strong></p>

                        <span className="text-underline text-colon">See our services</span>
                        
                        <div className="right-services">
                            <div className="right-services-h5">
                                <img
                                src={services}
                                alt="Port Stephens Cleaning Services icon"
                                />
                                <h5>Residential Cleaning</h5>
                            </div>

                            <div className="right-services-h5">
                                <img
                                src={services}
                                alt="Port Stephens Cleaning Services icon"
                                />
                                <h5>Commercial cleaning</h5>
                            </div>

                            <div className="right-services-h5">
                                <img
                                src={services}
                                alt="Port Stephens Cleaning Services icon"
                                />
                                <h5>Spring cleaning</h5>
                            </div>
                           

                        </div>
                        <div className="right-services">
                            <div className="right-services-h5">
                                <img
                                src={services}
                                alt="Port Stephens Cleaning Services icon"
                                />
                                <h5>End of lease</h5>
                            </div>

                            <div className="right-services-h5">
                                <img
                                src={services}
                                alt="Port Stephens Cleaning Services icon"
                                />
                                <h5>Airbnb & Laundry</h5>
                            </div>

                        </div>
                    </div>
                    
                  
                    
                </div>
    
                <div className="div-carousel"> 
                    <h2>What our customers say</h2>
                    <Carousel>
                        <Carousel.Item>
                            <p>I came home from hospital with my 2nd baby to find our home absolutely spotless, dirty laundry washed and dried, cupboards sorted out.I felt so relaxed! Andrea is very thorough and is consistent every time. I will definitely continue to use her services and highly recommend her.
                            </p>
                            <h5>Laurinda - Anna Bay</h5>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p>These ladies will redefine what you consider clean and tidy to be!
                            </p>
                            <h5>Jack - Corlette</h5>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p>Andrea and her team are very professional. They are always flexible with clean times and their rates are most reasonable in the port Stephens area. They do a beautiful and thorough job on my residence! My guests always compliment on how clean my house is. I can’t thank them enough for their professional service!
                            </p>
                            <h5>Liz - Corlette</h5>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p>I just wanted to let you know we're very happy with the clean at Shoal Beach House. Thank you for your attention to detail. Look forward to growing our businesses together.
                            </p>
                            <h5>Sharon - Nelson bay</h5>
                        </Carousel.Item>
                        </Carousel>
                </div>
               <Footer/>
            
            </Fragment>
        )
    }
    
}
export default  Home;