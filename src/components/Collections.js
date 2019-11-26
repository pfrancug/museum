import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-light-svg-icons'
import collectionsData from './collections-data'

class Collections extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="collections" >
                <div className="collections__search">
                    <input className="collections__search-input" type="text" placeholder="Expore the Collection" />
                    <div className="collections__search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
                <p className="collections__advanced-search">Advanced Search</p>
                <div className="collections__elements">
                    {collectionsData.length ? collectionsData.map((item) => (
                        <div className="collections__element" >
                            <img className="collections__image" src={item.image} />
                            <p className="collections__text">{item.title}</p>
                        </div>
                    )) : (
                            <h1 className="collections__no-elements">Collection is empty :(</h1>
                        )
                    }
                </div>
            </div>
        )
    }

}

export default Collections
