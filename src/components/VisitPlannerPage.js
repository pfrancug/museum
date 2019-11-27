import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/pro-light-svg-icons'
import visitData from './visit-data'

class VisitPlanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets: {},
            totalPrice: 0
        }
        this.handleManageTickets = this.handleManageTickets.bind(this)
    }

    handleManageTickets(action, ticketFor, price) {
        this.setState(prevState => {
            if (action === 'add') {
                return ({
                    tickets: {
                        ...prevState.tickets,
                        [ticketFor]: ticketFor in prevState.tickets ? prevState.tickets[ticketFor] + 1 : 1
                    },
                    totalPrice: prevState.totalPrice + price
                })
            } else if (action === 'substract' && prevState.tickets[ticketFor] > 0) {
                return ({
                    tickets: {
                        ...prevState.tickets,
                        [ticketFor]: prevState.tickets[ticketFor] - 1
                    },
                    totalPrice: prevState.totalPrice - price
                })
            }
        })
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
                    {visitData.length && visitData.map(({ ticketFor, details, price } = ticket, index) => (
                        <div className="visit__option" key={index}>
                            <div className="visit__option-name">
                                <p className="visit__option-name--text">{ticketFor}</p>
                                {details && (
                                    <p className="visit__option-name--details">{details}</p>
                                )}
                            </div>
                            <div className="visit__howmany">
                                <div onClick={() => this.handleManageTickets('substract', ticketFor, price)} >
                                    <FontAwesomeIcon className="visit__howmany--icon" icon={faMinusSquare} />
                                </div>
                                <p className={`visit__howmany--number ${this.state.tickets[ticketFor] > 0 && 'active'}`}>
                                    {this.state.tickets[ticketFor] ? this.state.tickets[ticketFor] : 0}
                                </p>
                                <div onClick={() => this.handleManageTickets('add', ticketFor, price)} >
                                    <FontAwesomeIcon className="visit__howmany--icon" icon={faPlusSquare} />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="visit__total">
                        <p className="visit__price">Total</p>
                        <p className="visit__price">${this.state.totalPrice}</p>
                    </div>
                    <button className="visit__button">Continues to Payment</button>
                </div>
            </div>
        )
    }
}

export default VisitPlanner;
