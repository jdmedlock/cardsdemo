import React from 'react';
import Cards from './Cards'

const CardContainer = (props) => { 
  // An array of task objects is passed in `props`. Iterate over these
  // to create one `<Card>` component for each task. Note that the task
  // `key` attribute is required by React to uniquely identify each one.
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
