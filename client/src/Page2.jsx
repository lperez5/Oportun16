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
        setDate2(event.target.value);
    }

    const handleCategory = event => {
        setCategoryEntered(event.target.value);
    }

    const handleDelete = event => {
        console.log(event);
        //get ID of document and delete from DB
        //delete from dbCacheArray using setdbCacheArray()
    }

    const nameFilter = (document, nameEntered) => {
        if(document.name.toLowerCase().includes(nameEntered.toLowerCase())){
            return true;
        }
        else{
            return false;
        }
    }

    const dateFilter = (document, date1, date2) => {
        if(document.dateCreated >= date1 && document.dateCreated <= date2){
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

    const DataRows = () => {
        if(dbCacheArray.length === 0){
            return(<p> "No results" </p>)
        }
        else{
            const Rows = [];
            let i = 0;
            while (i < dbCacheArray.length){
                if(nameFilter(dbCacheArray[i], nameEntered) === true &&
                categoryFilter(dbCacheArray[i], categorySelected) === true){
                    Rows.push(<DataRow key={i} {...dbCacheArray[i]}/>);
                }
                i++;
            }
            Rows.length = 10;
            return(<> {Rows} </>)
        }
    }

    function DataRow(props){
        const{name, dateCreated, category, data, _id} = props;
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
                                {dateCreated}
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
                                {data[0]}, {data[1]}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Button variant="outline-success" size='lg' block>
                        View/Edit
                    </Button>
                </Col>
                <Col style={{justifyContent: 'stretch'}}>
                    <Button variant="outline-danger" size='lg' onClick={()=>handleDelete(_id)} block>
                        Delete
                    </Button>
                </Col>
            </Row>
        )
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
                        <FormControl onChange={handleDate1} />
                        <FormControl onChange={handleDate2}/>
                        <InputGroup.Prepend>
                        <Button variant="outline-secondary"
                        // onClick={dbCacheArray.filter(document => dateFilter(document, date1, date2))}
                        >Filter</Button>
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
                <DataRows/>
            </Container>
        </div>
    );
}
