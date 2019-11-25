import React from 'react'
import { NavLink } from 'react-router-dom'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
    }

    // routeChange() {
    //     const path 
    // }

    render() {
        return (
            <div className="login">
                <h1 className="login__header">YOUR<br />ART<br />MUSEUM</h1>
                <p className="login__address">151rd St<br />San Francosco, CA 94103</p>
                <div className="login__credentials">
                    <input className="login__email" type="email" placeholder="Email address" />
                    <input className="login__password" type="password" placeholder="Password" />
                </div>
                <NavLink className="login__reset-password" to='/account-recovery'>Forgot your password?</NavLink>
                <NavLink className="login__button" to='/'>Log In</NavLink>
                <NavLink className="login__create-account" to='/create-account'>Don't have an account?</NavLink>
            </div>
        )
    }

}

export default LoginPage;