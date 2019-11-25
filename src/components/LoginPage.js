import React from 'react'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="login">
                <h1 className="login__header">YOUR<br />ART<br />MUSEUM</h1>
                <p className="login__address">151rd St<br />San Francosco, CA 94103</p>
                <div className="login__credentials">
                    <input className="login__email" type="text" placeholder="Email address" />
                    <input className="login__password" type="password" placeholder="Password" />
                </div>
                <a className="login__reset-password">Forgot your password?</a>
                <button className="login__button">Log In</button>
                <a className="login__create-account">Don't have an account?</a>
            </div>
        )
    }

}

export default LoginPage;
