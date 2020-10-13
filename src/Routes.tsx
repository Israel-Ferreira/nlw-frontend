import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LandingPage from './pages/LandingPage';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/orphanages-map" component={OrphanagesMap} />
        </Switch>
    </BrowserRouter>
)

export default Routes