import React, {Fragment} from 'react';
import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import products from '../../assets/products.png';

export default function Portfolio() {

    return (
      
        <Fragment>
            <Header/>

            <div className="services">
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

