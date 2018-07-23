// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Main from './components/Modules/Main/Main'
import Resumen from './components/Modules/Resumen/Resumen'
import Page404 from './components/Modules/Page404/Page404'

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/donationresumen" component={Resumen} />
            <Route exact component={Page404} />
        </Switch>
    </App>      

export default AppRoutes;
