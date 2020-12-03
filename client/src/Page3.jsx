import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import OR from '../src/Pics/OR.png'
import PR from '../src/Pics/PR.png'
import SR from '../src/Pics/SR.png'
import PLEF from '../src/Pics/PLEF.png'
import SLEF from '../src/Pics/SLEF.png'
import Vuln from '../src/Pics/Vuln.png'
import '../src/derivation.css'

export function Page3(props){

  const {active, dbCacheArray} = props;
  let numVeryHighInherentOR = 0;

  for(let j=0; j<getTotalDocs(dbCacheArray); j++){
    if(dbCacheArray[j].data[2] === 4){
      numVeryHighInherentOR += 1;
    };
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

  return(
    <div hidden={!active}>
      <Container>
        <Row>
          <Col><Button variant="primary" onClick={()=>xRecent(dbCacheArray,5)}>xRecent</Button>
          </Col>
          <Col lg = {8}> Total Documents in Database: {`${getTotalDocs(dbCacheArray)}`}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary">button</Button>
          </Col>
          <Col lg={8}>
            {}
          </Col>
        </Row>
        <Row><Col><Col><Col>
        <img src={OR} className="DerivationTable" alt={''}/>
        </Col></Col></Col></Row>
        <Row>
          <Col><img src={PR} className="DerivationTable" alt={''} /></Col>
          <Col><img src={SR} className="DerivationTable" alt={''}/></Col>
        </Row>
        <Row>
          <Col><img src={PLEF} className="DerivationTable" alt={''} /></Col>
          <Col><img src={SLEF} className="DerivationTable" alt={''} /></Col>
          <Col><img src={Vuln} className="DerivationTable" alt={''} /></Col>
        </Row>
      </Container>
    </div>
  );
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
//     }
//     if(getYear(arr[i].date) === thisYear && getMonth(arr[i].date) === (thisMonth-1)){
//       counter2++;
//       lastMonthAvg += arr[i].data[0];
//     }
//   }
//   thisMonthAvg = thisMonthAvg/counter1;
//   lastMonthAvg = lastMonthAvg/counter2;
//   //for loop check every date after ^^ until we leave the month before this month
//   return (thisMonthAvg - lastMonthAvg);
// }