import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faClock } from '@fortawesome/pro-duotone-svg-icons'
import image from '../images/login-background.jpg'

class ExhibitionsPage extends React.Component {
    render() {
        return (
            <div className="exhibitions">
                <img className="exhibitions__image" src={image}></img>
                <div className="exhibitions__content">
                    <p className="exhibitions__alt">EXHIBITION</p>
                    <h1 className="exhibitions__header">MASTERS<br />OLD AND<br />NEW</h1>
                    <h2 className="exhibitions__date">APRIL 15 - SEPTEMBER 20</h2>
                    <p className="exhibitions__details">FLOOR 5</p>
                    <Link className="exhibitions__button" to='/Plan Your Visit'>Plan Your Visit</Link>
                    <div className="exhibitions__status-bar">
                        <div className="exhibitions__status">
                            <div className="exhibitions__status-icon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <p className="exhibitions__status-text">151 3rd St<br />San Francisco</p>
                        </div>
                        <div className="exhibitions__status">
                            <div className="exhibitions__status-icon">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <p className="exhibitions__status-text">Open today<br />10:00am - 5:30pm</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExhibitionsPage;
