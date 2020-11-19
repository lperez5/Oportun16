
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
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="Name">
                                <Form.Control type="NameSearch" placeholder="Name"/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="Date">
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
                            <Form.Group controlId="Category">
                                <Form.Control as="select">
                                <option>Category1</option>
                                <option>Category2</option>
                                <option>Category3</option>
                                <option>Category4</option>
                                <option>Category5</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col> NAME returned </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    date returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    category returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    data returned
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
                <Row>
                    <Col> NAME returned </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    date returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    category returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    data returned
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
                <Row>
                    <Col> NAME returned </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    date returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    category returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    data returned
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
                <Row>
                    <Col> NAME returned </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    date returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    category returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    data returned
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
                <Row>
                    <Col> NAME returned </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    date returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    category returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    data returned
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
                <Row>
                    <Col> NAME returned </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    date returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    category returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    data returned
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
                <Row>
                    <Col> NAME returned </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    date returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    category returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    data returned
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
                <Row>
                    <Col> NAME returned </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    date returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    category returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    data returned
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
                <Row>
                    <Col> NAME returned </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    date returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    category returned
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    data returned
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
