import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

export function Page3(props){

  const {active, dbCacheArray, setdbCacheArray} = props;

  return(
    <div hidden={!active}>
      <Container>
        <Row>
          <Col><Button variant="primary">Button</Button>{' '}
          <Button variant="primary">Button</Button>{' '}</Col>
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
