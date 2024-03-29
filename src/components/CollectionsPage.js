import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-light-svg-icons'
import collectionsData from '../data/collections-data'

class Collections extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: ''
        }
        this.handleSetFilter = this.handleSetFilter.bind(this)
    }

    handleSetFilter(e) {
        const filter = e.target.value
        this.setState({ filter })
    }

    render() {
        const filterdCollections = collectionsData.filter(collection => collection.title.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
        return (
            <div className="collections" >
                <div className="collections__search">
                    <DebounceInput
                        minLength={2}
                        debounceTimeout={300}
                        className="collections__search-input"
                        type="text"
                        placeholder="Expore the Collection"
                        onChange={this.handleSetFilter}
                    />
                    <div className="collections__search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
                <p className="collections__advanced-search">Advanced Search</p>
                <div className="collections__elements">
                    {filterdCollections.length ? filterdCollections.map((item, index) => (
                        <div className="collections__element" key={index}>
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
