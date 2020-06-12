import React from 'react';
import './styles.css';

import {
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Card,
    NavLink,
  } from 'reactstrap';


export default function Portfolio() {

    return (
      
        <div className="services"> 

            <Card className="cardServices" >
              <div className="divImg">
                <CardImg variant="top" src="" />    
              </div>
              <CardBody className="cardBodyServices">
                <CardTitle>Pokedex</CardTitle>
                <CardText>
                  Design  / react / api
                </CardText>
              </CardBody>
            </Card>

           
        </div>
    );
   
  }

