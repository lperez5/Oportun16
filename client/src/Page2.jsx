import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Navbar.css'



export function Page2(props){
    const {active} = props;

    const [d1, setd1] = useState('');

    const handleSelect=(e)=>{
        console.log(e);
        setd1(e);
    }

    const [d2, setd2] = useState('');

    const handleSelect2=(e)=>{
        console.log(e);
        setd2(e);
    }

    return(
        <div hidden={!active}>
            <nav className="dropdown1">
                <DropdownButton title={d1} id = "dropdown" onSelect={handleSelect}>
                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                    <Dropdown.Item eventKey="3">3</Dropdown.Item>
                    <Dropdown.Item eventKey="4">3</Dropdown.Item>
                    <Dropdown.Item eventKey="5">3</Dropdown.Item>
                </DropdownButton>
            </nav>
            <nav className="dropdown2">
                <DropdownButton title={d2} id = "dropdown2" onSelect={handleSelect2}>
                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                    <Dropdown.Item eventKey="3">3</Dropdown.Item>
                    <Dropdown.Item eventKey="4">3</Dropdown.Item>
                    <Dropdown.Item eventKey="5">3</Dropdown.Item>
                </DropdownButton>
            </nav>
        </div>
    );
}
