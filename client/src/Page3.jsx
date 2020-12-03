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
          <Col lg = {8}> Monthly Change Overall Risk Inherent: {`${monthlyChange(dbCacheArray, 0)}`}</Col>
          <Col lg = {8}> Monthly Change Primary Risk Inherent: {`${monthlyChange(dbCacheArray,2)}`}</Col>
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

function getYear(DBobjectDate){
  const year = new Date(DBobjectDate).getFullYear();
  return year;
}

function getThisMonth(DBobjectDate){
  const month = new Date(DBobjectDate).getMonth();
  return month;
}

function monthlyChange(arr, x){
  let thisMonthAvg = 0;
  let lastMonthAvg = 0;
  let thisMonth = new Date().getMonth();
  let thisYear = new Date().getFullYear();
  let counter1 = 0;
  let counter2 = 0;

  for(let i=0; i < arr.length; i++){
    if(getYear(arr[i].dateCreated) === thisYear && getThisMonth(arr[i].dateCreated) === thisMonth){
      counter1++;
      thisMonthAvg += arr[i].data[x];
    }
    if(getYear(arr[i].dateCreated) === thisYear && getThisMonth(arr[i].dateCreated) === (thisMonth-1)){
      counter2++;
      lastMonthAvg += arr[i].data[x];
    }
  }

  if(counter1 === 0){
    thisMonthAvg = 0;
  }
  else{
    thisMonthAvg = thisMonthAvg/counter1;
  }

  if(counter2 === 0){
    lastMonthAvg = 0;
  }
  else{
    lastMonthAvg = lastMonthAvg/counter2;
  }

  return (thisMonthAvg - lastMonthAvg);
}
