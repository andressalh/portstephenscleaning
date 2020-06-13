import React, {Fragment} from 'react';
import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import products from '../../assets/products.png';
import {
    CardImg,
    Card,
    CardBody,
    CardTitle,

} from 'reactstrap';
import fridge from '../../assets/fridge.svg';

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
                                    <CardImg variant="top" src={fridge} />
                                    <CardBody>
                                        <CardTitle>Vacuuming</CardTitle>
                                    </CardBody>
                                </Card>
                                <Card className="card-services" >
                                    <CardImg variant="top" src={fridge} />
                                    <CardBody>
                                        <CardTitle>Mopping</CardTitle>
                                    </CardBody>
                                </Card>
                                            
                            </div>

                            <div className="card-columns">
                            
                                <Card className="card-services" >
                                    <CardImg variant="top" src={fridge} />
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
                                    <CardImg variant="top" src={fridge} />
                                    <CardBody>
                                        <CardTitle>Dusting</CardTitle>
                                    </CardBody>
                                </Card>
                                <Card className="card-services" >
                                    <CardImg variant="top" src={fridge} />
                                    <CardBody>
                                        <CardTitle>Rubbidh disposal</CardTitle>
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
                                <CardImg variant="top" src={fridge} />
                                <CardBody>
                                    <CardTitle>Washing bed linen</CardTitle>
                                </CardBody>
                            </Card>
                            <Card className="card-services" >
                                <CardImg variant="top" src={fridge} />
                                <CardBody>
                                    <CardTitle>Rubbish disposal weekly</CardTitle>
                                </CardBody>
                            </Card>
                            <Card className="card-services" >
                                <CardImg variant="top" src={fridge} />
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
                        <img src={products} alt="products" />
                    </div>
                    <div>
                        <h4>RESIDENTIAL CLEANING</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="service service-left "> 
                    
                    <div>
                        <h4>RESIDENTIAL CLEANING</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="div-img-service">
                        <img src={products} alt="products" />
                    </div>
                </div>

                <div className="service service-right "> 
                    <div className="div-img-service">
                        <img src={products} alt="products" />
                    </div>
                    <div>
                        <h4>RESIDENTIAL CLEANING</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
                
                
            
            
            <Footer/>
            
        </Fragment>
    );
   
  }

