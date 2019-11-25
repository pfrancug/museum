import React from 'react'

import menuData from './menu-data'
import HomePage from './HomePage'
import ExhibitionsPage from './ExhibitionsPage'

import 'normalize.css';
import '@fortawesome/fontawesome-free/js/all'
import '../styles/styles.css'

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isSidebarOpen: false
        }
        this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this)
    }

    handleMenuButtonClick() {
        this.setState(prevState => ({
            isSidebarOpen: !prevState.isSidebarOpen
        }))

    }

    render() {
        const { isSidebarOpen } = this.state
        return (
            <BrowserRouter>
                <div className="container">


                    <div className="menu-button" onClick={this.handleMenuButtonClick}>
                        <p>dupa</p>
                        <i className="fas fa-bars"></i>
                    </div>


                    {menuData.length && (
                        <nav className={`nav ${isSidebarOpen && 'show'}`}>
                            <ul className="menu-items">
                                <li className="menu-list" key={'search'}>
                                    <i className="fas fa-search" />
                                    <input className="search" type="text" placeholder="Search" />
                                </li>
                                {menuData.map((item, index) => (
                                    <li className="menu-list" key={index}>
                                        <i className={item.icon} />
                                        <NavLink className="menu-link" to={item.url} onClick={this.handleMenuButtonClick}>
                                            {item.label}
                                        </NavLink>

                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}



                    <Switch>
                        <Route path="/" component={HomePage} exact={true} />
                        <Route path="/exhibtions" component={ExhibitionsPage} exact={true} />

                    </Switch>

                </div>
            </BrowserRouter>

        )
    }
}

export default Header