import React from 'react'






export function Page4(props){
    const {active} = props;             //const active = props.active
    console.log(active);
    return(
      <div hidden={!active}>
        hello I am page 4
      </div>
    );
  }