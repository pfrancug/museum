import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faClock } from '@fortawesome/pro-duotone-svg-icons'
import image from '../images/login-background.jpg'

class ExhibitionsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="exhibitions">

                <img src={image}></img>

                <p>some text</p>
                <h1>some header</h1>
                <h2>some details</h2>
                <p>some other text</p>
                <button>plan a visit</button>
                <div>

                    <div>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        <p>some text</p>
                        <p>some details</p>
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faClock}/>
                    <p>some text</p>
                        <p>some details</p>
                    </div>

                </div>


            </div>
        )
    }

}

export default ExhibitionsPage;
