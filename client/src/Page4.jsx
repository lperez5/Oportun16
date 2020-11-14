
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {  Container, Row, Col } from 'react-bootstrap';
import Tree from '../src/tree.png'
import Methodology1 from '../src/methodologyp1.png'
import Methodology2 from '../src/methodologyp2.png'

export function Page4(props){
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

            <Container fluid="md">
                <Row>
                    <Col><img src={Tree} /></Col>
                </Row>
                <Row>
                    <Col><img src={Methodology1} /></Col>
                </Row>
                <Row>
                    <Col><img src={Methodology2} /></Col>
                </Row>
            </Container>

        </div>
    );
}
