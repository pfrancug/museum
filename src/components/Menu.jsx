import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-light-svg-icons'
import menuData from '../data/menu-data'

export default class Menu extends Component {
    render() {
        return (
            <div className={`menu ${this.props.isSidebarOpen && 'menu__show'}`}>
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
                                    <NavLink className="menu__link" to={item.url} onClick={this.props.handleMenuButtonClick}>
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        )
    }
}
