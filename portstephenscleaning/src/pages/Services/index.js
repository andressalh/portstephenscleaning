import React, {Fragment} from 'react';
import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {
    CardImg,
    Card,
    CardBody,
    CardTitle,

} from 'reactstrap';

/*ICONS*/
import fridge from '../../assets/fridge.png';
import tidying from '../../assets/tidying-beds.png';
import watering from '../../assets/watering-flowers.png';
import washing from '../../assets/washing.png';
import dusting from '../../assets/dusting.png';
import rubbish from '../../assets/rubbish.png';
import mopping from '../../assets/mopping.png';
import vacuuming from '../../assets/vaccuming.png';

/*IMAGES*/
import airbnb from '../../assets/airbnb.png';
import residencial from '../../assets/residencial.png';
import commercial from '../../assets/commercial.png';
import endOfLease from '../../assets/end-of-lease.png';
import laundry from '../../assets/laundry.png';
import springCleaning from '../../assets/Spring-cleaning.png';

export default function Portfolio() {

    return (
      
        <Fragment>
            <Header/>

            <div className="services">

                <div className="div-services-types">
                    <h2>Cleaning Package</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. </p>
                    
                    <div className="div-services-types-background">
                        <div className="services-types-size">
                            <div className="card-columns">
                                <Card className="card-services" >
                                    <CardImg variant="top" src={vacuuming} />
                                    <CardBody>
                                        <CardTitle>Vacuuming</CardTitle>
                                    </CardBody>
                                </Card>
                                <Card className="card-services" >
                                    <CardImg variant="top" src={mopping} />
                                    <CardBody>
                                        <CardTitle>Mopping</CardTitle>
                                    </CardBody>
                                </Card>
                                            
                            </div>

                            <div className="card-columns">
                            
                                <Card className="card-services" >
                                    <CardImg variant="top" src={tidying} />
                                    <CardBody>
                                        <CardTitle>Tidying beds</CardTitle>
                                    </CardBody>
                                </Card>
                                <Card className="card-services" >
                                    <CardImg variant="top" src={fridge} />
                                    <CardBody>
                                        <CardTitle>Tidying beds</CardTitle>
                                    </CardBody>
                                </Card>
                                            
                            </div>
                            <div className="card-columns">
                                
                                
                                <Card className="card-services" >
                                    <CardImg variant="top" src={dusting} />
                                    <CardBody>
                                        <CardTitle>Dusting</CardTitle>
                                    </CardBody>
                                </Card>
                                <Card className="card-services" >
                                    <CardImg variant="top" src={rubbish} />
                                    <CardBody>
                                        <CardTitle>Rubbish disposal</CardTitle>
                                    </CardBody>
                                </Card>                  
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    

                    <div className="additional-services">
                        <h2>Additional Services</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. </p>
                        <div className="card-columns row-additional-services">
                            
                            <Card className="card-services" >
                                <CardImg variant="top" src={washing} />
                                <CardBody>
                                    <CardTitle>Washing bed linen</CardTitle>
                                </CardBody>
                            </Card>
                            <Card className="card-services" >
                                <CardImg variant="top" src={watering} />
                                <CardBody>
                                    <CardTitle>Water plants</CardTitle>
                                </CardBody>
                            </Card>
                            <Card className="card-services" >
                                <CardImg variant="top" src={rubbish} />
                                <CardBody>
                                    <CardTitle>Rubbish disposal weekly</CardTitle>
                                </CardBody>
                            </Card>
                            <Card className="card-services" >
                                <CardImg variant="top" src={fridge} />
                                <CardBody>
                                    <CardTitle>Water plants</CardTitle>
                                </CardBody>
                            </Card>

                        </div>   
                    </div>
                </div>
            </div>    

            <div className="div-service">
                <h2>Services</h2>
                <div className="service service-right "> 
                
                    <div className="div-img-service">
                        <img src={residencial} alt="residencial cleaning" />
                    </div>
                    <div>
                        <h4>RESIDENTIAL CLEANING</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="service service-left "> 
                    
                    <div>
                        <h4>Commercial CLEANING</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="div-img-service">
                        <img src={commercial} alt="commercial cleaning" />
                    </div>
                </div>

                <div className="service service-right "> 
                    <div className="div-img-service">
                        <img src={springCleaning} alt="spring cleaning" />
                    </div>
                    <div>
                        <h4>Spring cleaning</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="service service-right "> 
                    <div className="div-img-service">
                        <img src={endOfLease} alt="endOfLease" />
                    </div>
                    <div>
                        <h4>End of lease</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="service service-right "> 
                    <div className="div-img-service">
                        <img src={airbnb} alt="airbnb" />
                    </div>
                    <div>
                        <h4>Airbnb</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="service service-right "> 
                    <div className="div-img-service">
                        <img src={laundry} alt="laundry" />
                    </div>
                    <div>
                        <h4>Laundry</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
                
                
            
            
            <Footer/>
            
        </Fragment>
    );
   
  }

