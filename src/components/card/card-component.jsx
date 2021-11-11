import React from 'react'

// Style
import './card-styles.css'

        const Card = (props) => {
        return (
            <div className="card-container">
              <h2>{props.resource.name}</h2> 
              <a className="card-link" href={props.resource.link} target="_blank"><p>Click Here</p></a>
            </div>
        
        )
    }

    export default Card

  