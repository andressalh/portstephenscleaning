import React, { Fragment } from 'react';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';
import logo7 from '../../assets/logo7.png';
import './styles.css';

export default function Logos (){
    return(
        <Fragment>

            <div className="logo">
                <img src={logo} alt="cleaning" />
                <img src={logo2} alt="cleaning" />
                <img src={logo3} alt="cleaning" />
                <img src={logo4} alt="cleaning" />
                <img src={logo5} alt="cleaning" />
                <img src={logo6} alt="cleaning" />
                <img src={logo7} alt="cleaning" />
            </div>
            
        
        </Fragment>
    )
}