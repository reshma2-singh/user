import React from 'react'

function InfoBox({id,title,image}) {
    return (
        <div className="box">
            <h5>{id}</h5>
            <img src = {image}/>
            <h2>{title}</h2>
            
            
        </div>
    )
}

export default InfoBox
