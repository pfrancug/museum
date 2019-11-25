import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import menuData from './menu-data'
import { faSignature, faBars, faSearch } from '@fortawesome/pro-light-svg-icons'

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

    render() {
        const { isSidebarOpen } = this.state
        return (
            <div>

                <div className="header">
                    <p className="header__logo">
                        <FontAwesomeIcon icon={faSignature} />
                    </p>
                    <p className="header__title">Exhibitions & Events</p>
                    <p className="header__menu-button" onClick={this.handleMenuButtonClick}>
                        <FontAwesomeIcon icon={faBars} />
                    </p>
                </div>

                <div className={`menu ${isSidebarOpen && 'menu__show'}`}>
                    {menuData.length && (
                        <nav>
                            <ul className="menu__items">
                                <li className="menu__list" key={'search'}>
                                    <FontAwesomeIcon icon={faSearch} />
                                    <input className="menu__search" type="text" placeholder="Search" />
                                </li>
                                {menuData.map((item, index) => (
                                    <li className="menu__list" key={index}>
                                        <i className={item.icon} />
                                        <FontAwesomeIcon icon={item.icon} />

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