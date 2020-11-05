import React from 'react'






export function Page2(props){
    const {active} = props;             //const active = props.active
    console.log(active);
    return(
      <div hidden={!active}>
        hello I am page 2
      </div>
    );
  }