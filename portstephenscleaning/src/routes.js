import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import FAQ from './pages/Faq';
import Services from './pages/Services'
import Logos from './pages/logos'
const Routes = () => {
    return(
        <BrowserRouter>
            <Route path='/' exact component={Home}/>
            <Route path='/FAQ' exact component={FAQ}/>
            <Route path='/Services' exact component={Services}/>
            <Route path='/logos' exact component={Logos}/>
        </BrowserRouter>
    )
}
export default Routes;

