import React from 'react'

const NameCard = ({ suggestedName }) => {
    return (
        <div className='result-name-card'>
            <p className='result-name'>{suggestedName}</p>
        </div>
    )
}

export default NameCard