import React from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/pro-light-svg-icons'
import Menu from './Menu.jsx'

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
        return (
            <div>
                <div className="header">
                    <div className="header__logo">
                        <p>The<br />Art<br />Museum</p>
                    </div>
                    <p className="header__title">{this.props.location.pathname.slice(1)}</p>
                    <p className="header__menu-button" onClick={this.handleMenuButtonClick}>
                        <FontAwesomeIcon icon={faBars} />
                    </p>
                </div>
                <Menu
                    isSidebarOpen={this.state.isSidebarOpen}
                    handleMenuButtonClick={this.handleMenuButtonClick}
                />
            </div>
        )
    }
}

export default withRouter(Header)