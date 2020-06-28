import React, { Fragment } from 'react';
import './styles.css';

export default function Book (){
    return(
        <Fragment>
            <button className="button-whatsapp"><a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=61406204408&text=">Let's go!</a></button>
        </Fragment>
    )
}