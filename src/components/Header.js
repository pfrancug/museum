import React from 'react'
import menuData from './menu-data'
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSidebarOpen: false,
            page: ''
        }
        this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this)
    }

    handleMenuButtonClick() {
        this.setState(prevState => ({ isSidebarOpen: !prevState.isSidebarOpen }))
    }

    componentDidUpdate() {

    }

    render() {
        const { isSidebarOpen } = this.state
        return (
            <div>

                <div className="header">
                    <p className="header__logo">
                        <i className="fas fa-signature" />
                    </p>
                    <p className="header__title">Exhibitions & Events</p>
                    <p className="header__menu-button" onClick={this.handleMenuButtonClick}>
                        <i className="fas fa-bars" />
                    </p>
                </div>

                <div className={`menu ${isSidebarOpen && 'menu__show'}`}>
                    {menuData.length && (
                        <nav>
                            <ul className="menu__items">
                                <li className="menu__list" key={'search'}>
                                    <i className="fas fa-search" />
                                    <input className="menu__search" type="text" placeholder="Search" />
                                </li>
                                {menuData.map((item, index) => (
                                    <li className="menu__list" key={index}>
                                        <i className={item.icon} />
                                        <NavLink className="menu__link" to={item.url} onClick={this.handleMenuButtonClick}>
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>


            </div>

        )
    }
}

export default Header