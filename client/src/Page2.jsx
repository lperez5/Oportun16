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
        //delete entry from database
        deleteEntry(props);
        //delete entry from dbCacheArray
        const temp = new Array(dbCacheArray.length);
        let currentIndex = 0;
        for(let i = 0; i < dbCacheArray.length; i++){
            if(props._id !== dbCacheArray[i]._id){
                temp[currentIndex] = dbCacheArray[i];
                currentIndex++;
            }
        }
        setdbCacheArray(temp.slice(0,dbCacheArray.length-1));
    }

    const handleEdit = event => {
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

    const DataRows = ({start,end}) => {
        if(dbCacheArray.length === 0){
            return(<p> "No results" </p>)
        }
        else{
            const Rows = [];
            let i = 0;
            while (i < dbCacheArray.length){
                if(nameFilter(dbCacheArray[i], nameEntered) === true &&
                categoryFilter(dbCacheArray[i], categorySelected) === true &&
                (dateFilter(dbCacheArray[i], date1, date2) === true)){
                    Rows.push(<DataRow key={i} {...dbCacheArray[i]}/>);
                }
                i++;
            }
            return(<> {Rows.slice(start,end)} </>)
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
                                Inherent: {data[0]+1} Residual: {data[1]+1}
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
                    <Button variant="outline-danger" size='lg' onClick={()=>{if(window.confirm('Are you sure you want to delete?')) handleDelete(props)}} block>
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
                        <FormControl onChange={(event)=>{handleDate1(event); sethasFilteredDate(false);}}/>
                        <FormControl onChange={(event)=>{handleDate2(event); sethasFilteredDate(false);}}/>
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
                <DataRows start={0} end={10}/>
            </Container>
        </div>
    );
}
