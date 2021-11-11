import React from 'react'

import Card  from '../card/card-component'

// Style
import './card-list-styles.css'

const CardList = (props) => {

    return (
        <div className='card-list'>
            {props.resources.map(function(resource){
            return (
            <Card key={resource.id} resource={resource}/>
            )
          })}
        </div>
    )
}

export default CardList