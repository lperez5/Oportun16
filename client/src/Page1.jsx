import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';



export function Page1(props){
    const {active} = props; 

    
    const [d1, setd1] = useState('');
    const [d2, setd2] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [buttonDisabled2, setButtonDisabled2] = useState(true);

    const handleSelect=(e)=>{
        console.log(e);
        setd1(e);   
        setButtonDisabled(false); 
    }

    const handleSelect2=(e)=>{
        setd2(e);
        setButtonDisabled2(false);
    }

    const handleClick=(e)=>{
        alert("You chose " + d1 + " and " + d2);
    }

    return(
        <div hidden={!active}>
            <Button  onClick={handleClick} disabled={buttonDisabled, buttonDisabled2} style={{backgroundColor: '#0B0C10', borderColor: '#45A293', color: '#45A293', borderRadius: '100px'}} >Submit</Button>{' '}

            <DropdownButton title={d1} id = "dropdown" onSelect={handleSelect}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>  

            <DropdownButton title="values2" id = "dropdown2" onSelect={handleSelect2}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton> 

            <h4>You selected {d1} and {d2}</h4>

        </div>
    );
}