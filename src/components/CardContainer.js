import React from 'react';
import Cards from './Cards'

const CardContainer = (props) => { 
  return (
    <div>
      { props.tasks.map(task => {
          return (
            <Cards key={ task._id } task={ task } />
          )
        })
      }
    </div>
  )
}

export default CardContainer
