import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPawClaws } from '@fortawesome/pro-duotone-svg-icons'

const NotFoundPage = () => (
    <div className="notfound">
        <h1 className="notfound__header">404</h1>
        <p className="notfound__text">It seems you got lost.</p>
        <div className="notfound__icon">
            <FontAwesomeIcon icon={faPawClaws} />
        </div>
        <p className="notfound__text">Watch out for bears!</p>
    </div>
)

export default NotFoundPage