import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import OR from '../src/Pics/OR.png'
import PR from '../src/Pics/PR.png'
import SR from '../src/Pics/SR.png'
import PLEF from '../src/Pics/PLEF.png'
import SLEF from '../src/Pics/SLEF.png'
import Vuln from '../src/Pics/Vuln.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
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
      <Container fluid="1">
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
        <Card className="derivation-row" style={{borderColor: 'transparent', elevation: 0}}>
            <Card style={{borderColor: 'transparent', elevation: 0}}>
              <Card.Img src={OR} className="DerivationTable"></Card.Img>
            </Card>
        </Card>
        <Card className="derivation-row" style={{borderColor: 'transparent', elevation: 0}}>
            <CardGroup>
              <Card style={{borderColor: 'transparent', elevation: 0}}>
                <Card.Img src = {PR} className="DerivationTable"></Card.Img> 
              </Card>
              <Card style={{borderColor: 'transparent', elevation: 0}}>
                <Card.Img src = {SR} className="DerivationTable"></Card.Img>   
              </Card>
            </CardGroup>
        </Card>
        <Card className="derivation-row" style={{borderColor: 'transparent', elevation: 0}}>
            <CardGroup>
              <Card style={{borderColor: 'transparent', elevation: 0}}>
                <Card.Img src = {PLEF} className="DerivationTable"></Card.Img> 
              </Card>
              <Card style={{borderColor: 'transparent', elevation: 0}}>
                <Card.Img src = {SLEF} className="DerivationTable"></Card.Img> 
              </Card>
              <Card style={{borderColor: 'transparent', elevation: 0}}>
                <Card.Img src = {Vuln} className="DerivationTable"></Card.Img> 
              </Card>
            </CardGroup>
        </Card>
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