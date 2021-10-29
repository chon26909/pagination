import React from 'react'

const Food = ({image_url,name}) => {
    return (
        <div className="card">
            <div className="card-title">{name}</div>
            <div className="card-body">
                <div className="card-image">
                    <img src={image_url} alt={name} />
                </div>
            </div>
        </div>
    )
}

export default Food
