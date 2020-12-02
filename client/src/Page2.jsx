import React, { useState } from 'react'
import { FormControl, InputGroup, Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {deleteEntry} from './utils/delete'

export function Page2(props){

    const {active, dbCacheArray, setdbCacheArray, setActive, setEntryToUpdate} = props;

    const [nameEntered, setNameEntered] = useState('');
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [categorySelected, setCategoryEntered] = useState('All');

    const [visibleIndicies, setVisibleIndicies] = useState('');

    const [hasFilteredDate, sethasFilteredDate] = useState(false);

    const handleName = event => {
        setNameEntered(event.target.value);
    }

    const handleDate1 = event => {
        setDate1(event.target.value);
    }

    const handleDate2 = event => {
        setDate2(event.target.value);
    }

    const handleCategory = event => {
        setCategoryEntered(event.target.value);
    }

    const handleDelete = props => {
        deleteEntry(props);
        //delete entry from dbCacheArray
    }

    const handleEdit = event => {
        console.log("edit me");
        console.log(event);
        setEntryToUpdate(event);
        setActive(5);
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
        if(!hasFilteredDate){
            return true;
        }
        else if(document.dateCreated >= date1 && document.dateCreated <= date2){
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
            //const tempVisible = [];
            while (i < dbCacheArray.length){
                if(nameFilter(dbCacheArray[i], nameEntered) === true &&
                categoryFilter(dbCacheArray[i], categorySelected) === true &&
                (dateFilter(dbCacheArray[i], date1, date2) === true)){
                    Rows.push(<DataRow key={i} {...dbCacheArray[i]}/>);
                    //tempVisible.push(i);
                }
                i++;
            }
            //setVisibleIndicies(tempVisible);
            Rows.length = 10;
            return(<> {Rows} </>)
        }
    }

    function DataRow(props){
        const {name, dateCreated, category, data} = props;
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
                    <Button variant="outline-success" size='lg' onClick={()=>handleEdit(props)} block>
                        View/Edit
                    </Button>
                </Col>
                <Col style={{justifyContent: 'stretch'}}>
                    <Button variant="outline-danger" size='lg' onClick={()=>handleDelete(props)} block>
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
                        <FormControl onChange={(event)=>{handleDate1(event); sethasFilteredDate(false); console.log("filter date false");}}/>
                        <FormControl onChange={(event)=>{handleDate2(event); sethasFilteredDate(false); console.log("filter date false");}}/>
                        <InputGroup.Prepend>
                            <Button variant="outline-secondary" onClick={()=>sethasFilteredDate(true)}>Filter</Button>
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
