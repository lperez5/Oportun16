
import React, {useState} from 'react'
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
