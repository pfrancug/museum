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
                        <div className="collections__element">
                            <p>{item.title}</p>
                        </div>
                    )) : (<div>collection is empty</div>)}


                </div>



            </div>
        )
    }

}

export default Collections
