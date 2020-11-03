import React, {useState} from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
//import page1 from asdfasdf
//import page2 from asdfasdfasdf

export function Navbar(props){
    const [active,setActive] = useState(1);
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
        <React.Fragment>
        <div>
            <Pagination size="lg">
                <PageItem key={1} active={1 === active} onClick={()=>setActive(1)}>risk tool</PageItem>
                <PageItem key={2} active={2 === active} onClick={()=>setActive(2)}>DB entires</PageItem>
                <PageItem key={3} active={3 === active} onClick={()=>setActive(3)}>Heatmap</PageItem>
                <PageItem key={4} active={4 === active} onClick={()=>setActive(4)}>4</PageItem>
                <PageItem key={5} active={5 === active} onClick={()=>setActive(5)}>5</PageItem>
            </Pagination>
        </div>
        <Pages >
            <Page key={1} active={1 === active}>

                <Button  onClick={handleClick} disabled={buttonDisabled, buttonDisabled2} style={{backgroundColor: '#0B0C10', borderColor: '#45A293', color: '#45A293', borderRadius: '100px'}} >Submit</Button>{' '}

                <DropdownButton title="values" id = "dropdown" onSelect={handleSelect}>
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

                <DropdownButton title="values2" id = "dropdown2" onSelect={handleSelect2}>
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

                <DropdownButton title="values2" id = "dropdown2" onSelect={handleSelect2}>
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

                <DropdownButton title="values2" id = "dropdown2" onSelect={handleSelect2}>
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
                
                <DropdownButton title="values2" id = "dropdown2" onSelect={handleSelect2}>
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

                <DropdownButton title="values2" id = "dropdown2" onSelect={handleSelect2}>
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

            </Page>
            <Page key={2} active={2 === active}>I am page 2</Page>
            <Page key={3} active={3 === active}>I am page 3</Page>
            <Page key={4} active={4 === active}>I am page 4</Page>
            <Page key={5} active={5 === active}>I am page 5</Page>
        </Pages>
        </React.Fragment>
    );
}

function Pages(props){
    return(
        props.children
    );
}

function Page(props){
    return(
    <p hidden={!props.active}>{props.children}</p>
    );
}