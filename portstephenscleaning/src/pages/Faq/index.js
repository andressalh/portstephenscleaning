import React, { Fragment, Component } from 'react';
import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import question from '../../assets/question.png';
import {MdKeyboardArrowDown} from 'react-icons/md';


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
   
                <div className="divFaq">
                    <h3>Questions? This might help…</h3>
                    <div onClick={()=>{this.setState({show:!this.state.show})}} className="divQuestion">
                    <h4>WHY SHOULD I CHOOSE YOU OVER ANOTHER CLEANING? <MdKeyboardArrowDown/></h4>
                        {
                            this.state.show? <div> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div> : null
                        } 
                    </div>
                    <div onClick={()=>{this.setState({show1:!this.state.show1})}} className="divQuestion">
                        <h4>WHAT IF I'M NOT SATISFIED WITH THE FINAL RESULT? <MdKeyboardArrowDown/></h4>
                        {
                            this.state.show1? <div> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div> : null
                        } 
                    </div>
                    <div onClick={()=>{this.setState({show2:!this.state.show2})}} className="divQuestion">
                        <h4>HOW DO I PAY? <MdKeyboardArrowDown/></h4>
                        {
                            this.state.show2? <div> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div> : null
                        } 
                    </div>
                </div>
                
                
                <div className="question-contact">
                    <div className="have-question">
                        <div className="have-question-img">
                            <img className="question" src={question} alt="question" />
                        </div>
                        <div>
                            <h5>You have a question?</h5>
                            <p>You need an answer and can not find it above?</p>
                            <p id="question-contact">Contact us via mail to contact@port.com.au</p>
                        </div>
                        
                    </div>
                    <div className="book">
                        <h5>Book your free consultation now!<a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=61406204408&text=Hey%20there"> Let's go!</a></h5>
                    </div>
                </div>
                
                
                

               <Footer/>
            
            </Fragment>
        )
    }
    
}
export default Faq;