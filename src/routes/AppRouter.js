import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import LoginPage from '../components/LoginPage'
import ExhibitionsPage from '../components/ExhibitionsPage'
import VisitPlannerPlanner from '../components/VisitPlannerpage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExhibitionsPage} exact={true} />
                <Route path="/login" component={LoginPage} />
                <Route path="/visitplanner" component={VisitPlannerPlanner} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
