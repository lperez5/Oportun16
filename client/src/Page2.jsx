import React, { useState } from 'react'
import { FormControl, InputGroup, Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

export function Page2(props){
    const {active, dbCacheArray, setdbCacheArray} = props;

    const [nameEntered, setNameEntered] = useState('');
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [categorySelected, setCategoryEntered] = useState('All');

    const handleName = event => {
        setNameEntered(event.target.value);
    }

    const handleDate1 = event => {              //on button press in text field, do the sorting
        setDate1(event.target.value);           //for date1 and date 2
    }
    const handleDate2 = event => {
        setDate1(event.target.value);
    }

    const handleCategory = event => {
        setCategoryEntered(event.target.value);
    }

    const nameFilter = (document, nameEntered) => {
        if(document.name.includes(nameEntered)){
            return true;
        }
        else{
            return false;
        }
    }

    const dateFilter = (document, date1, date2) => {
        if(document.date >= date1 && document.date <= date2){
            return true;
        }
        else{
            return false;
        }
    }

    const categoryFilter = (document, categorySelected) => {
        if(categorySelected === 'All' || document.category === (categorySelected)){
            return true;
        }
        else{
            return false;
        }
    }

    return(
        <div hidden={!active}>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="Name">
                                <Form.Control onChange={handleName} autoComplete="off" type="NameSearch" placeholder="Name"/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Dates</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl />
                        <FormControl />
                        <InputGroup.Prepend>
                        <Button variant="outline-secondary">Filter</Button>
                        </InputGroup.Prepend>
                    </InputGroup>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="Category">
                                <Form.Control as="select" onChange={handleCategory}>
                                <option>All</option>
                                <option>Availability</option>
                                <option>Confidentiality</option>
                                <option>Integrity</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                {
                    dbCacheArray.length === 0 ? <p> "No results" </p> : dbCacheArray
                                                                            .filter(document => nameFilter(document, nameEntered))
                                                                            //.filter(document => dateFilter(document, date1, date2))
                                                                            .filter(document => categoryFilter(document, categorySelected))
                                                                            .map((document,index) => <DataRow key={index} {...document}/>)
                }
            </Container>
        </div>
    );
}

function DataRow(props){
    const{name, date, category, data} = props;
    return(
        <Row style={{ height: '8vh' }}>
            <Col>
                <Card style={{ width: '12rem', borderColor: 'white' }}>
                    <Card.Body>
                        <Card.Text style={{ textAlign: 'center' }}>
                            {name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '12rem' }}>
                    <Card.Body>
                        <Card.Text>
                            {date}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '12rem' }}>
                    <Card.Body>
                        <Card.Text>
                            {category}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '12rem' }}>
                    <Card.Body>
                        <Card.Text>
                            {data}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Button variant="outline-success" size='lg' block>
                    Options
                </Button>
            </Col>
            <Col style={{justifyContent: 'stretch'}}>
                <Button variant="outline-success" size='lg' block>
                    Details
                </Button>
            </Col>
        </Row>
    )
}

function NumRows({size}){
    return(
        new Array(size).fill(0).map( (_,index) => {
            const props = {
                name: "Namegoeshere",
                date: "date?",
                category: "test",
                data: "test2"
            }
            return <DataRow key={index} {...props}/>;
        })
    )
}