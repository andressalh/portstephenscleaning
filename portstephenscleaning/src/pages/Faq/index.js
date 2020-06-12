import React, { Fragment, useState, Component } from 'react';
import room from '../../assets/room.jpg';
import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

class Faq extends Component{

    constructor(){
        super();
        this.state={
            show:false,
            show1:false,
            show2:false,
        }
    }

    render(){
        return(
        
            <Fragment>
                <Header/>
                <div className="div-img">
                    <img className="room" src={room} alt="room" />
                </div>

              
                <div className="divFaq">
                    <h3>Questions? This might help…</h3>
                    <div onClick={()=>{this.setState({show:!this.state.show})}} className="divQuestion">
                        <h4>WHY SHOULD I CHOOSE YOU OVER ANOTHER CLEANING?</h4>
                        {
                            this.state.show? <div> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div> : null
                        } 
                    </div>
                    <div onClick={()=>{this.setState({show1:!this.state.show1})}} className="divQuestion">
                        <h4>WHAT IF I'M NOT SATISFIED WITH THE FINAL RESULT?</h4>
                        {
                            this.state.show1? <div> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div> : null
                        } 
                    </div>
                    <div onClick={()=>{this.setState({show2:!this.state.show2})}} className="divQuestion">
                        <h4>WHAT IS THE PAYMENT PLAN AND HOW DO I PAY?</h4>
                        {
                            this.state.show2? <div> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div> : null
                        } 
                    </div>
                   
                    
                   
                    
                </div>
                
               <Footer/>
            
            </Fragment>
        )
    }
    
}
export default Faq;