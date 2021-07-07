import React from 'react'
import PropTypes from 'prop-types'
export const Alert = ({message}) => {
    return (
        <div className="alert alert-primary p-2 m-2 text-center rounded-0">
            <p>{message}</p>
        </div>
    )
}

Alert.propTypes ={
    message: PropTypes.string.isRequired
}

