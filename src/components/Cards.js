import React from 'react';

const Cards = (props) => {    
  console.log('Cards - props: ', props)
  return <p>{ props.teammember.lastName }, { props.teammember.firstName }</p>
};

export default Cards