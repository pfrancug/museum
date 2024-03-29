import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from './../images/login-background.jpg'

class LoginPage extends React.Component {
    render() {
        return (
            <div className="login" >
                <div className="login__bg-image" style={{ backgroundImage: `url(${backgroundImage})` }} />
                <div className="login__panel">
                    <h1 className="login__header">YOUR<br />ART<br />MUSEUM</h1>
                    <p className="login__address">151rd St<br />San Francosco, CA 94103</p>
                    <div className="login__credentials">
                        <input className="login__email" type="email" placeholder="Email address" />
                        <input className="login__password" type="password" placeholder="Password" />
                    </div>
                    <Link className="login__reset-password" to='/account-recovery'>Forgot your password?</Link>
                    <Link className="login__button" to='/'>Log In</Link>
                    <Link className="login__create-account" to='/create-account'>Don't have an account?</Link>
                </div>
            </div>
        )
    }
}

export default LoginPage;
