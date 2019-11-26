import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/pro-light-svg-icons'

class VisitPlanner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="visit">
                <h1 className="visit__header">Skip the Line.<br />Purchase Tickets.</h1>
                <p className="visit__text">All exhibitions, audio tours, and films included in the price of admission.</p>

                <div className="visit__date">
                    <div className="visit__date-day">
                        <p className="visit__date-text">Today</p>
                        <p className="visit__date-text active">Tomorrow</p>
                        <p className="visit__date-text">Other</p>
                    </div>

                    <p className="visit__date-info">March 22, 2016</p>
                    <p className="visit__date-info">Open 10:30am-530pm</p>
                </div>

                <div className="visit__tickets">

                    <div className="visit__option">
                        <div className="visit__option-name">
                            <p className="visit__option-name--text">Adults</p>
                            <p className="visit__option-name--details"></p>
                        </div>
                        <div className="visit__howmany">
                            <FontAwesomeIcon className="visit__howmany--icon" icon={faMinusSquare} />
                            <p className="visit__howmany--number active">2</p>
                            <FontAwesomeIcon className="visit__howmany--icon" icon={faPlusSquare} />
                        </div>
                    </div>

                    <div className="visit__option">
                        <div className="visit__option-name">
                            <p className="visit__option-name--text">Seniors</p>
                            <p className="visit__option-name--details">65+ with ID</p>
                        </div>
                        <div className="visit__howmany">
                            <FontAwesomeIcon className="visit__howmany--icon" icon={faMinusSquare} />
                            <p className="visit__howmany--number">0</p>
                            <FontAwesomeIcon className="visit__howmany--icon" icon={faPlusSquare} />
                        </div>
                    </div>

                    <div className="visit__option">
                        <div className="visit__option-name">
                            <p className="visit__option-name--text">Adults</p>
                            <p className="visit__option-name--details">withID</p>
                        </div>
                        <div className="visit__howmany">
                            <FontAwesomeIcon className="visit__howmany--icon" icon={faMinusSquare} />
                            <p className="visit__howmany--number">0</p>
                            <FontAwesomeIcon className="visit__howmany--icon" icon={faPlusSquare} />
                        </div>
                    </div>

                    <div className="visit__total">
                        <p className="visit__price">Total</p>
                        <p className="visit__price">$16</p>
                    </div>

                    <button className="visit__button">Continues to Payment</button>

                </div>

            </div>
        )
    }

}

export default VisitPlanner;
