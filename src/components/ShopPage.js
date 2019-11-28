import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/pro-light-svg-icons'
import { faCircle } from '@fortawesome/pro-solid-svg-icons'
import watch from '../images/shop/watch.jpg'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="shop">
                <img className="shop__image" src={watch}></img>
                <div className="shop__navigation">
                    <FontAwesomeIcon className="shop__navigation__dot" icon={faCircle} />
                    <FontAwesomeIcon className="shop__navigation__dot active" icon={faCircle} />
                    <FontAwesomeIcon className="shop__navigation__dot" icon={faCircle} />
                </div>
                <h1 className="shop__title">Braun Classic Watch</h1>
                <p className="shop__description">This Braun watch is a reissue of the original 1970's design from renowned design team Dietrich Lubs and Dieter Rams, both of whom have work featured in the Museum’s collection. The large watch features a numbered face, and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, a three-hand quartz movement, and a leather band. Water-resistant.</p>
                <div className="shop__element">
                    <div className="shop__price">
                        <p className="shop__price--standard">$160.00</p>
                        <p className="shop__price--exclusive">$140.00 Member price</p>
                    </div>
                    <div className="shop__howmany">
                        <div>
                            <FontAwesomeIcon className="shop__howmany--icon" icon={faMinusSquare} />
                        </div>
                        <p className="shop__howmany--count">{0}</p>
                        <div>
                            <FontAwesomeIcon className="shop__howmany--icon" icon={faPlusSquare} />
                        </div>
                    </div>
                </div>
                <button className="shop__button">Add to Cart</button>
            </div>
        )
    }
}

export default ShopPage;
