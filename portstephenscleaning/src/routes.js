import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/index';
import FAQ from './pages/Faq/index';
import Services from './pages/Services'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/FAQ' exact component={FAQ}/>
                <Route path='/Services' exact component={Services}/>
            </Switch>
        </BrowserRouter>
    )
}