
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {  Container, Row, Col } from 'react-bootstrap';

export function Page2(props){
    const {active} = props;

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
        if(categorySelected == 'All' || document.category == (categorySelected)){
            return true;
        }
        else{
            return false;
        }
    }

    const documentArray=[
        {
            name: "sarah",
            date: "today",
            category: "Confidentiality",
            data: "[1,3]"
        },
        {
            name: "mat",
            date: "today",
            category: "Integrity",
            data: "[3,4,5]"
        },
        {
            name: "david",
            date: "yesterday",
            category: "Availability",
            data: "[3,4,5]"
        },
        {
            name: "daniel",
            date: "last year",
            category: "Availability",
            data: "[3,4,5]"
        },
        {
            name: "daniel",
            date: "today",
            category: "Availability",
            data: "[3,4,5]"
        },
        {
            name: "daniel",
            date: " last week",
            category: "Availability",
            data: "[3,4,5]"
        },
        {
            name: "daniel",
            date: "some day",
            category: "Availability",
            data: "[3,4,5]"
        },
    ];

    return(
        <div hidden={!active}>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="Name">
                                <Form.Control onChange={handleName} autocomplete="off" type="NameSearch" placeholder="Name"/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="Date">
                                <Form.Control type="DateSearch" placeholder="Date Range"/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="Category">
                                <Form.Control as="select" onChange={handleCategory}>
                                <option>All</option>
                                <option>Confidentiality</option>
                                <option>Integrity</option>
                                <option>Availability</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                {
                    documentArray.length === 0 ? <p> "No results" </p> : documentArray
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