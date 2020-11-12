import React from 'react';
import Cards from './Cards'

const CardContainer = (props) => {    
  console.log('CardContainer - props: ', props)
  return (
    <div>
      { props.team.map(teammember => {
          return (
            <Cards teammember={ teammember } />
          )
        })
      }
    </div>
  )
}

export default CardContainer
