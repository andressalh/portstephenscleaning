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
import room from '../../assets/room.jpg';
import cleaning from '../../assets/cleaning.jpg';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Book from '../../components/book';
/* <div className="div-img-header">
                <img className="cleaning" src={cleaning} alt="cleaning" />
            </div>*/

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
       
            <div className="div-book">
                <h3>Book your free consultation now!</h3>
                <Book/>
            </div>
           
            <div className="div-img">
                <img className="room" src={room} alt="room" />
            </div>

            <div className="div-carousel"> 
                <h2>What our customers say</h2>
                <Carousel>
                    <Carousel.Item>
                        <p>I came home from hospital with my 2nd baby to find our home absolutely spotless, dirty laundry washed and dried, cupboards sorted out.I felt so relaxed! Andrea is very thorough and is consistent every time. I will definitely continue to use her services and highly recommend her.
                        </p>
                        <h5>Laurinda Bartley</h5>
                        <img
                        className="slider-name"
                        src={me}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>These ladies will redefine what you consider clean and tidy to be!
                        </p>
                        <h5>Jack Davison</h5>
                        <img
                        className="slider-name"
                        src={me}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>Andrea and her team are very professional. They are always flexible with clean times and their rates are most reasonable in the port Stephens area. They do a beautiful and thorough job on my residence! My guests always compliment on how clean my house is. I can’t thank them enough for their professional service!
                        </p>
                        <h5>Liz Griffith</h5>
                        <img
                        className="slider-name"
                        src={me}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>I just wanted to let you know we're very happy with the clean at Shoal Beach House. Thank you for your attention to detail. Look forward to growing our businesses together.
                        </p>
                        <h5>Sharon</h5>
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