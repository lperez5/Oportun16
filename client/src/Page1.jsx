import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import {getInstance} from './utils/ToolCalcs';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



export function Page1(props){

    const Tool = getInstance();

    const {active} = props;



    const [padI, setpadI] = useState('');
    const [padC, setpadC] = useState('');
    const [cfaI, setcfaI] = useState('');
    const [cfaC, setcfaR] = useState('');
    const [rsI, setrsI] = useState('');
    const [rsC, setrsR] = useState('');
    const [plmrI, setplmrI] = useState('');
    const [plmrC, setplmrR] = useState('');
    const [slmrI, setslmrI] = useState('');
    const [slmrC, setslmrR] = useState('');
    const [tc, settc] = useState('');
    const [slp, setslp] = useState('');
    const [backgroundcolor, setbackgroundcolor] = useState('');

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [buttonDisabled2, setButtonDisabled2] = useState(true);
    const [buttonDisabled3, setButtonDisabled3] = useState(true);
    const [buttonDisabled4, setButtonDisabled4] = useState(true);
    const [buttonDisabled5, setButtonDisabled5] = useState(true);
    const [buttonDisabled6, setButtonDisabled6] = useState(true);
    const [buttonDisabled7, setButtonDisabled7] = useState(true);
    const [buttonDisabled8, setButtonDisabled8] = useState(true);
    const [buttonDisabled9, setButtonDisabled9] = useState(true);
    const [buttonDisabled10, setButtonDisabled10] = useState(true);
    const [buttonDisabled11, setButtonDisabled11] = useState(true);
    const [buttonDisabled12, setButtonDisabled12] = useState(true);

    const handleSelectpadI=(value)=>{
        Tool.setPADInherent(value-1);
        Tool.calculateTreeInherents();
        //get potentially changed values of calculated variables
        Tool.getState();
        //update visuals of those variables
        setpadI(value);
        setButtonDisabled(false);
    }
    const handleSelectpadC=(value)=>{
        Tool.setPADControls(value-1);
        Tool.calculateTreeResiduals();
        setpadC(value);
        setButtonDisabled2(false);
    }
    const handleSelectcfaI=(value)=>{
        Tool.setCFAInherent(value-1);
        Tool.calculateTreeInherents();
        setcfaI(value);
        setButtonDisabled3(false);
        if(value == '1') {   /* seems to work but would need more as it only affects one value*/
            setbackgroundcolor('#32CD32')
        } else if (value == '2') {
            setbackgroundcolor('#7CFC00')
        } else if (value == '3') {
            setbackgroundcolor('#FFFF00')
        } else if (value == '4') {
            setbackgroundcolor('#FF0000')
        } else if (value == '5') {
            setbackgroundcolor('#B22222')
        }
    }
    const handleSelectcfaC=(value)=>{
        Tool.setCFAControls(value-1);
        Tool.calculateTreeResiduals();
        setcfaR(value);
        setButtonDisabled4(false);
    }
    const handleSelectrsI=(value)=>{
        Tool.setRSInherent(value-1);
        Tool.calculateTreeInherents();
        setrsI(value);
        setButtonDisabled5(false);
    }
    const handleSelectrsC=(value)=>{
        Tool.setRSControls(value-1);
        Tool.calculateTreeResiduals();
        setrsR(value);
        setButtonDisabled6(false);
    }
    const handleSelectplmrI=(value)=>{
        Tool.setPLMRInherent(value-1);
        Tool.calculateTreeInherents();
        setplmrI(value);
        setButtonDisabled7(false);
    }
    const handleSelectplmrC=(value)=>{
        Tool.setPLMRControls(value-1);
        Tool.calculateTreeResiduals();
        setplmrR(value);
        setButtonDisabled8(false);
    }
    const handleSelectslmrI=(value)=>{
        Tool.setSLMRInherent(value-1);
        Tool.calculateTreeInherents();
        setslmrI(value);
        setButtonDisabled9(false);
    }
    const handleSelectslmrC=(value)=>{
        Tool.setSLMRControls(value-1);
        Tool.calculateTreeResiduals();
        setslmrR(value);
        setButtonDisabled10(false);
    }
    const handleSelecttc=(value)=>{
        Tool.setTC(value-1);
        Tool.calculateTree();
        settc(value);
        setButtonDisabled11(false);}
    const handleSelectslp=(value)=>{
        Tool.setSLP(value-1);
        Tool.calculateTree();
        setslp(value);
        setButtonDisabled12(false);
    }

    const handleClick=(e)=>{
        alert("You chose " + padI + " and " + padC);
    }

    const handleColor=()=>{
        if(cfaI == '1') {   /* first try at colors, but it updates one click late */
            setbackgroundcolor('#32CD32')
        } else if (cfaI == '2') {
            setbackgroundcolor('#7CFC00')
        } else if (cfaI == '3') {
            setbackgroundcolor('#FFFF00')
        } else if (cfaI == '4') {
            setbackgroundcolor('#FF0000')
        } else if (cfaI == '5') {
            setbackgroundcolor('#B22222')
        }


    }

    return(
        <div hidden={!active}>
              
            

            <Card className="unindented-row" style={{borderColor: 'transparent', elevation: 0}}>
                <Card.Body >
                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                    <Card.Header as="h5" style={{fontSize: 17}}>Overall Risk</Card.Header>
                    <Card.Body>
                        <CardGroup>
                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                    {cfaI}
                                </Card.Text>
                            </Card>
                            <Card style={{borderColor: 'transparent', elevation: 0}}>
                                
                            </Card>
                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                <Card.Text style={{ fontSize: 25 }}>
                                    {cfaC}
                                </Card.Text>
                            </Card>
                        </CardGroup>
                    </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
            <Card className="unindented-row" style={{borderColor: 'transparent', elevation: 0}}>
                <CardGroup>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                            <Card.Header as="h5" style={{fontSize: 17}}>Primary Risk</Card.Header>
                            <Card.Body>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                        <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                            {cfaI}
                                        </Card.Text>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>
                                        
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                        <Card.Text style={{ fontSize: 25 }}>
                                            {cfaC}
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                            <Card.Header as="h5" style={{fontSize: 17}}>Secondary Risk</Card.Header>
                            <Card.Body>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                        <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                            {cfaI}
                                        </Card.Text>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>
                                        
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                        <Card.Text style={{ fontSize: 25 }}>
                                            {cfaC}
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Card>
            <Card className="unindented-row" style={{borderColor: 'transparent', elevation: 0}}>
                <CardGroup>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }} >
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                            <Card.Header as="h5" style={{fontSize: 17}}>Primary Loss Event Frequency</Card.Header>
                            <Card.Body>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                        <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                            {cfaI}
                                        </Card.Text>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>
                                        
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                        <Card.Text style={{ fontSize: 25 }}>
                                            {cfaC}
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                            <Card.Header as="h5" style={{fontSize:14}}>Primary Loss Magnitude Responsive</Card.Header>
                            <Card.Body>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                    <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                    <DropdownButton title={plmrI} id = "PLMRInherent">
                                        <Dropdown.Item eventKey="1" onSelect={()=>handleSelectplmrI(1)}>1</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" onSelect={()=>handleSelectplmrI(2)}>2</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" onSelect={()=>handleSelectplmrI(3)}>3</Dropdown.Item>
                                        <Dropdown.Item eventKey="4" onSelect={()=>handleSelectplmrI(4)}>4</Dropdown.Item>
                                        <Dropdown.Item eventKey="5" onSelect={()=>handleSelectplmrI(5)}>5</Dropdown.Item>
                                    </DropdownButton>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Controls</Card.Title>
                                        <DropdownButton title={plmrC} id = "PLMRControls">
                                            <Dropdown.Item eventKey="1" onSelect={()=>handleSelectplmrC(1)}>1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2" onSelect={()=>handleSelectplmrC(2)}>2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" onSelect={()=>handleSelectplmrC(3)}>3</Dropdown.Item>
                                            <Dropdown.Item eventKey="4" onSelect={()=>handleSelectplmrC(4)}>4</Dropdown.Item>
                                            <Dropdown.Item eventKey="5" onSelect={()=>handleSelectplmrC(5)}>5</Dropdown.Item>
                                        </DropdownButton>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>
                                        <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                        <Card.Text style={{ fontSize: 25 }}>
                                            {padI}  
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                            <Card.Header as="h5" style={{fontSize:13.5}}>Secondary Loss Magnitude Responsive</Card.Header>
                            <Card.Body>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                    <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                    <DropdownButton title={slmrI} id = "SLMRInherent">
                                        <Dropdown.Item eventKey="1" onSelect={()=>handleSelectslmrI(1)}>1</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" onSelect={()=>handleSelectslmrI(2)}>2</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" onSelect={()=>handleSelectslmrI(3)}>3</Dropdown.Item>
                                        <Dropdown.Item eventKey="4" onSelect={()=>handleSelectslmrI(4)}>4</Dropdown.Item>
                                        <Dropdown.Item eventKey="5" onSelect={()=>handleSelectslmrI(5)}>5</Dropdown.Item>
                                    </DropdownButton> 
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Controls</Card.Title>
                                        <DropdownButton title={slmrC} id = "SLMRControls">
                                            <Dropdown.Item eventKey="1" onSelect={()=>handleSelectslmrC(5)}>1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2" onSelect={()=>handleSelectslmrC(5)}>2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" onSelect={()=>handleSelectslmrC(5)}>3</Dropdown.Item>
                                            <Dropdown.Item eventKey="4" onSelect={()=>handleSelectslmrC(5)}>4</Dropdown.Item>
                                            <Dropdown.Item eventKey="5" onSelect={()=>handleSelectslmrC(5)}>5</Dropdown.Item>
                                        </DropdownButton>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>
                                        <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                        <Card.Text style={{ fontSize: 25 }}>
                                            {padI}  
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                            <Card.Header as="h5" style={{fontSize: 17}}>Secondary LEF</Card.Header>
                            <Card.Body>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                        <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                            {cfaI}
                                        </Card.Text>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>
                                        
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                        <Card.Text style={{ fontSize: 25 }}>
                                            {cfaC}
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Card>
            <Card className="unindented-row" style={{borderColor: 'transparent', elevation: 0}}>
                <CardGroup>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                            <Card.Header as="h5" style={{fontSize: 17}}>Threat Event Frequency</Card.Header>
                            <Card.Body>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                        <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                            {cfaI}
                                        </Card.Text>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>
                                        
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                        <Card.Text style={{ fontSize: 25 }}>
                                            {cfaC}
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                            <Card.Header as="h5" style={{fontSize: 17}}>Vulnerability</Card.Header>
                            <Card.Body>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                        <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                            {tc}
                                        </Card.Text>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>
                                        
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                        <Card.Text style={{ fontSize: 25 }}>
                                            {cfaC}
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}> 
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                            <Card.Header as="h5" style={{fontSize: 17}}>Secondary Loss Proabability</Card.Header>
                            <Card.Body>
                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                <Card.Title style={{fontSize: 17}}>%</Card.Title>
                                <DropdownButton title={slp} id = "SLP">
                                    <Dropdown.Item eventKey="1" onSelect={()=>handleSelectslp(1)}>1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2" onSelect={()=>handleSelectslp(2)}>2</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" onSelect={()=>handleSelectslp(3)}>3</Dropdown.Item>
                                    <Dropdown.Item eventKey="4" onSelect={()=>handleSelectslp(4)}>4</Dropdown.Item>
                                    <Dropdown.Item eventKey="5" onSelect={()=>handleSelectslp(5)}>5</Dropdown.Item>
                                </DropdownButton>
                                </Card>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Card>
            <Card className="indented-row" style={{borderColor: 'transparent', elevation: 0}}>
                <CardGroup>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center">
                            <Card.Header as="h5" style={{fontSize:17}}>Control Frequency Avoidance</Card.Header>
                            <Card.Body>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                    <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                    <DropdownButton title={cfaI} id = "CFAInherent" className='button'>
                                        <Dropdown.Item eventKey="1" onSelect={()=>handleSelectcfaI(1)}>1</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" onSelect={()=>handleSelectcfaI(2)}>2</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" onSelect={()=>handleSelectcfaI(3)}>3</Dropdown.Item>
                                        <Dropdown.Item eventKey="4" onSelect={()=>handleSelectcfaI(4)}>4</Dropdown.Item>
                                        <Dropdown.Item eventKey="5" onSelect={()=>handleSelectcfaI(5)}>5</Dropdown.Item>
                                    </DropdownButton> 
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Controls</Card.Title>
                                        <DropdownButton title={cfaC} id = "CFAControls">
                                            <Dropdown.Item eventKey="1" onSelect={()=>handleSelectcfaC(1)}>1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2" onSelect={()=>handleSelectcfaC(2)}>2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" onSelect={()=>handleSelectcfaC(3)}>3</Dropdown.Item>
                                            <Dropdown.Item eventKey="4" onSelect={()=>handleSelectcfaC(4)}>4</Dropdown.Item>
                                            <Dropdown.Item eventKey="5" onSelect={()=>handleSelectcfaC(5)}>5</Dropdown.Item>
                                        </DropdownButton>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>
                                        <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                        <Card.Text style={{ fontSize: 25 }}>
                                            {cfaI}  
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center">
                            <Card.Header as="h5" style={{fontSize: 17}}>Threat Capability</Card.Header>
                            <Card.Body>
                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                <Card.Title style={{fontSize: 15}}>OWASP</Card.Title>
                                <DropdownButton title={tc} id = "TC">
                                    <Dropdown.Item eventKey="1" onSelect={()=>handleSelecttc(1)}>1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2" onSelect={()=>handleSelecttc(2)}>2</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" onSelect={()=>handleSelecttc(3)}>3</Dropdown.Item>
                                    <Dropdown.Item eventKey="4" onSelect={()=>handleSelecttc(4)}>4</Dropdown.Item>
                                    <Dropdown.Item eventKey="5" onSelect={()=>handleSelecttc(5)}>5</Dropdown.Item>
                                </DropdownButton>
                                </Card>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                            <Card.Header as="h5" style={{fontSize: 17}}>Primary Loss Event Frequency</Card.Header>
                            <Card.Body>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                        <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                            {slp}
                                        </Card.Text>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>
                                        
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                        <Card.Text style={{ fontSize: 25 }}>
                                            {tc}
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Card>
            <Card className="indented-row" style={{borderColor: 'transparent', elevation: 0}}>
                <CardGroup>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center">
                                <Card.Header as="h5" style={{fontSize:14}}>Probability of Action Deterrence</Card.Header>
                                <Card.Body>
                                    <CardGroup>
                                        <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                            <DropdownButton title={padI} id = "PADInherent" >
                                                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectpadI(1)}>1</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectpadI(2)}>2</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectpadI(3)}>3</Dropdown.Item>
                                                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectpadI(4)}>4</Dropdown.Item>
                                                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectpadI(5)}>5</Dropdown.Item>
                                            </DropdownButton>   
                                        </Card>
                                        <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                            <Card.Title style={{fontSize: 15}}>Controls</Card.Title>
                                            <DropdownButton title={padC} id = "PADControls" >
                                                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectpadC(1)}>1</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectpadC(2)}>2</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectpadC(3)}>3</Dropdown.Item>
                                                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectpadC(4)}>4</Dropdown.Item>
                                                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectpadC(5)}>5</Dropdown.Item>`
                                            </DropdownButton>
                                        </Card>
                                        <Card style={{borderColor: 'transparent', elevation: 0}}>
                                            <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                            <Card.Text style={{ fontSize: 25 }}>
                                                {padI}  
                                            </Card.Text>
                                        </Card>
                                    </CardGroup>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                            <Card.Header as="h5" style={{fontSize:14}}>Resistance Strength Vulnerability</Card.Header>
                                <Card.Body>
                                    <CardGroup>
                                        <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                        <DropdownButton title={rsI} id = "RSInherent">
                                            <Dropdown.Item eventKey="1" onSelect={()=>handleSelectrsI(1)}>1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2" onSelect={()=>handleSelectrsI(2)}>2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" onSelect={()=>handleSelectrsI(3)}>3</Dropdown.Item>
                                            <Dropdown.Item eventKey="4" onSelect={()=>handleSelectrsI(4)}>4</Dropdown.Item>
                                            <Dropdown.Item eventKey="5" onSelect={()=>handleSelectrsI(5)}>5</Dropdown.Item>
                                        </DropdownButton>   
                                        </Card>
                                        <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                            <Card.Title style={{fontSize: 15}}>Controls</Card.Title>
                                            <DropdownButton title={rsC} id = "RSControls">
                                                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectrsC(1)}>1</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectrsC(2)}>2</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectrsC(3)}>3</Dropdown.Item>
                                                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectrsC(4)}>4</Dropdown.Item>
                                                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectrsC(5)}>5</Dropdown.Item>
                                            </DropdownButton>
                                        </Card>
                                        <Card style={{borderColor: 'transparent', elevation: 0}}>
                                            <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                            <Card.Text style={{ fontSize: 25 }}>
                                                {rsI}  
                                            </Card.Text>
                                        </Card>
                                    </CardGroup>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                        <Card.Body>
                            <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" >
                            <Button  onClick={handleClick} disabled={buttonDisabled || buttonDisabled2 || buttonDisabled3 || buttonDisabled4 || buttonDisabled5 || buttonDisabled6 || buttonDisabled7 || buttonDisabled8 || buttonDisabled9 || buttonDisabled10 || buttonDisabled11 || buttonDisabled12} style={{width: '21rem', height: '9rem'}} >Submit</Button>
                            </Card>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Card> 
        </div>
    );
}