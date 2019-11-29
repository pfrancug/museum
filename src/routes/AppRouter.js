import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CollectionsPage from '../components/CollectionsPage'
import ExhibitionsPage from '../components/ExhibitionsPage'
import ExhibitionPreviewPage from '../components/ExhibitionPreviewPage'
import Header from '../components/Header'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'
import ShopPage from '../components/ShopPage'
import VisitPlannerPage from '../components/VisitPlannerPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExhibitionsPage} exact={true} />
                <Route path="/Collections" component={CollectionsPage} />
                <Route path="/Exhibition Preview" component={ExhibitionPreviewPage} />
                <Route path="/Log In" component={LoginPage} />
                <Route path="/Plan Your Visit" component={VisitPlannerPage} />
                <Route path="/Shop" component={ShopPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
