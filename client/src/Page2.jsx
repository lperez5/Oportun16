
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {  Container, Row, Col } from 'react-bootstrap';

export function Page2(props){
    const {active} = props;

    const [d1, setd1] = useState('');

    const handleSelect=(e)=>{
        console.log(e);
        setd1(e);
    }

    return(
        <div hidden={!active}>
            <DropdownButton title={d1} id = "dropdown" onSelect={handleSelect}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>


            <Container>
                <Row>
                 <Col>1 of 2</Col>
                 <Col>2 of 2</Col>
                 <Col>2 of 2</Col>
                </Row>
                <Row>
                <Col lg={8}>1 of 3</Col>
                <Col><Button variant="primary">Button</Button>{' '}</Col>
                </Row>
                </Container>
        </div>
    );
}
