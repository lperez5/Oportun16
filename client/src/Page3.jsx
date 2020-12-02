import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

export function Page3(props){

  const {active, dbCacheArray} = props;
  let numVeryHighInherentOR = 0;

  for(let j=0; j<getTotalDocs(dbCacheArray); j++){
    if(dbCacheArray[j].data[2] === 4){
      numVeryHighInherentOR += 1;
    };
  }

  console.log(numVeryHighInherentOR);

  return(
    <div hidden={!active}>
      <Container>
        <Row>
          <Col><Button variant="primary" onClick={()=>xRecent(dbCacheArray,5)}>xRecent</Button>{' '}
          <Button variant="primary" onClick={()=>getTotalDocs(dbCacheArray)}>Total Docs</Button>{' '}</Col>
          <Col lg = {8}> HEAT MAP</Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary">button</Button>{' '}
          </Col>
          <Col lg={8}>HEAT MAP</Col>
        </Row>
      </Container>
    </div>
  );
}

function xRecent(arr, x){
  const newArr = [];
  for(let i=arr.length-1; i>=(arr.length-5); i--){
    newArr.push(arr[i]);
  }
  console.log(newArr);
  return newArr;
}

function getTotalDocs(arr){
  console.log(arr.length);
  return arr.length;
}

function monthlyChangePRInherent(arr){
  let thisMonthAvg = 0;
  let lastMonthAvg = 0;
  let difference = 0;
  //for loop check every date until we leave this month
  //for loop check every date after ^^ until we leave the month before this month
  //this month avg - [last month avg]
  difference = thisMonthAvg - lastMonthAvg;
  return difference;
}