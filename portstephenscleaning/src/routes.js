import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import FAQ from './pages/Faq';
import Services from './pages/Services'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path='/' exact component={Home}/>
            <Route path='/FAQ' exact component={FAQ}/>
            <Route path='/Services' exact component={Services}/>
        </BrowserRouter>
    )
}
export default Routes;

