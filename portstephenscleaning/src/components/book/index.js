import React, { Fragment } from 'react';
import './styles.css';

export default function Book (){
    return(
        <Fragment>
            <button className="button-whatsapp"><a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=61406204408&text=Hi,%20thanks%20for%20contacting%20Port%20Stephens%20Cleaning%20Services.%20Andrea%20will%20get%20in%20touch%20with%20you%20shortly.">Let's go!</a></button>
        </Fragment>
    )
}