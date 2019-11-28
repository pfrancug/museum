import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import LoginPage from '../components/LoginPage'
import ExhibitionsPage from '../components/ExhibitionsPage'
import VisitPlannerPage from '../components/VisitPlannerPage'
import CollectionsPage from '../components/CollectionsPage'
import NotFoundPage from '../components/NotFoundPage'
import ShopPage from '../components/ShopPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExhibitionsPage} exact={true} />
                <Route path="/Log In" component={LoginPage} />
                <Route path="/Collections" component={CollectionsPage} />
                <Route path="/Plan Your Visit" component={VisitPlannerPage} />
                <Route path="/Shop" component={ShopPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
