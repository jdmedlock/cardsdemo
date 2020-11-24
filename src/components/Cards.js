import React from 'react';

const Cards = (props) => {    
  return <p>{ props.task.title }, { props.task.description }</p>
};

export default Cards