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
  for(let i=0; i < x; i++){
    newArr.push(arr[i]);
  }
  return newArr;
}

function getTotalDocs(arr){
  return arr.length;
}

// function monthlyChangeORInherent(arr){
//   let thisMonthAvg = 0;
//   let lastMonthAvg = 0;
//   let thisMonth = 0;
//   let thisYear = 0;
//   let counter1 = 0;
//   let counter2 = 0;
//   //for loop check every date until we leave this month
//   for(let i=0; i < arr.length; i++){
//     if(getYear(arr[i].date) === thisYear && getMonth(arr[i].date) === thisMonth){
//       counter1++;
//       thisMonthAvg += arr[i].data[0];
//       thisMonthAvg = thisMonthAvg/counter1;
//     }
//     if(getYear(arr[i].date) === thisYear && getMonth(arr[i].date) === (thisMonth-1)){
//       counter2++;
//       lastMonthAvg += arr[i].data[0];
//       lastMonthAvg = lastMonthAvg/counter2;
//     }
//   }
//   //for loop check every date after ^^ until we leave the month before this month
//   return (thisMonthAvg - lastMonthAvg);
// }