<<<<<<< HEAD
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ToggleButton from 'react-bootstrap/ToggleButton'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Button, Container, Row, Col } from 'react-bootstrap';

export function Page1(props){
  const {active} = props;             //const active = props.active
  return(
    <div hidden={!active}>
      <DropdownButton id="dropdown-item-button" title="Vuln">
        <Dropdown.ItemText> </Dropdown.ItemText>
        <Dropdown.Item as="button">1</Dropdown.Item>
        <Dropdown.Item as="button">2</Dropdown.Item>
        <Dropdown.Item as="button">3</Dropdown.Item>
        <Dropdown.Item as="button">4</Dropdown.Item>
        <Dropdown.Item as="button">5</Dropdown.Item>
      </DropdownButton>

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
=======
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ToggleButton from 'react-bootstrap/ToggleButton'


export function Page1(props){
  return(
    <DropdownButton id="dropdown-item-button" title="Vuln">
      <Dropdown.ItemText> </Dropdown.ItemText>
      <Dropdown.Item as="button">771</Dropdown.Item>
      <Dropdown.Item as="button">2</Dropdown.Item>
      <Dropdown.Item as="button">3</Dropdown.Item>
      <Dropdown.Item as="button">4</Dropdown.Item>
      <Dropdown.Item as="button">5</Dropdown.Item>
    </DropdownButton>
  );
>>>>>>> 171eef8c39a204349be392a761d479069bef82c4
}