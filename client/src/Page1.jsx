
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {  Container, Row, Col } from 'react-bootstrap';


export function Page1(props){
    const {active} = props;


    const [padI, setpadI] = useState('');
    const [padR, setpadR] = useState('');
    const [cfaI, setcfaI] = useState('');
    const [cfaR, setcfaR] = useState('');
    const [rsI, setrsI] = useState('');
    const [rsR, setrsR] = useState('');
    const [plmrI, setplmrI] = useState('');
    const [plmrR, setplmrR] = useState('');
    const [slmrI, setslmrI] = useState('');
    const [slmrR, setslmrR] = useState('');
    const [tc, settc] = useState('');
    const [slp, setslp] = useState('');

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [buttonDisabled2, setButtonDisabled2] = useState(true);

    const handleSelectpadI=(e)=>{setpadI(e);setButtonDisabled(false);}
    const handleSelectpadR=(e)=>{setpadR(e);setButtonDisabled2(false);}
    const handleSelectcfaI=(e)=>{setcfaI(e);setButtonDisabled2(false);}
    const handleSelectcfaR=(e)=>{setcfaR(e);setButtonDisabled2(false);}
    const handleSelectrsI=(e)=>{setrsI(e);setButtonDisabled2(false);}
    const handleSelectrsR=(e)=>{setrsR(e);setButtonDisabled2(false);}
    const handleSelectplmrI=(e)=>{setplmrI(e);setButtonDisabled2(false);}
    const handleSelectplmrR=(e)=>{setplmrR(e);setButtonDisabled2(false);}
    const handleSelectslmrI=(e)=>{setslmrI(e);setButtonDisabled2(false);}
    const handleSelectslmrR=(e)=>{setslmrR(e);setButtonDisabled2(false);}
    const handleSelecttc=(e)=>{settc(e);setButtonDisabled2(false);}
    const handleSelectslp=(e)=>{setslp(e);setButtonDisabled2(false);}

    const handleClick=(e)=>{
        alert("You chose " + padI + " and " + padR);
    }

    return(
        <div hidden={!active}>
            <Button  onClick={handleClick} disabled={buttonDisabled, buttonDisabled2} style={{backgroundColor: '#0B0C10', borderColor: '#45A293', color: '#45A293', borderRadius: '100px'}} >Submit</Button>{' '}

            <DropdownButton title={padI} id = "PADInherent" onSelect={handleSelectpadI}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={padR} id = "PADResidual" onSelect={handleSelectpadR}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={cfaI} id = "CFAInherent" onSelect={handleSelectcfaI}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={cfaR} id = "CFAResidual" onSelect={handleSelectcfaR}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={rsI} id = "RSInherent" onSelect={handleSelectrsI}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={rsR} id = "RSResidual" onSelect={handleSelectrsR}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={plmrI} id = "PLMRInherent" onSelect={handleSelectplmrI}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={plmrR} id = "PLMRResidual" onSelect={handleSelectplmrR}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={slmrI} id = "SLMRInherent" onSelect={handleSelectslmrI}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={slmrR} id = "SLMRResidual" onSelect={handleSelectslmrR}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={tc} id = "TC" onSelect={handleSelecttc}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={slp} id = "SLP" onSelect={handleSelectslp}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>

            <h4>You selected {padI} and {padR}</h4>

            <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Search"/>
              </Form.Group>
            </Form>
          </Col>
          <Col>
          <Form>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select">
      <option>Date</option>
      <option>Date</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group> 
</Form>
</Col>
          <Col>
          <Form>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select">
      <option>Category</option>
      <option>Date</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group> 
</Form>
          </Col>
        </Row>
      </Container>

      <Container>
  <Row>
    <Col> NAME </Col>
    <Col>
      <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Text>
        date
        </Card.Text>
      </Card.Body>
      </Card>
    </Col>
     <Col>
      <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Text>
        category
        </Card.Text>
      </Card.Body>
      </Card>
     </Col>
      <Col>
       <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Text>
        data
        </Card.Text>
      </Card.Body>
      </Card>
      </Col>
       <Col>
         <Button variant="primary">
            Options
          </Button>
        </Col>
      <Col>
          <Button variant="primary">
            Details
          </Button>
      </Col>
   </Row>
  </Container>



        </div>
    );
}