import React from 'react'
import {  Table, Container, Row, Col } from 'react-bootstrap';
import Tree from '../src/Pics/tree.png'

export function Page4(props){
    const {active} = props;

    return(
        <div hidden={!active}>
            <Container fluid="md">
                <Row>
                    <Col><img src={Tree} alt={''}/></Col>
                </Row>
                <Row>
                <Table striped bordered>
  <thead>
    <tr>
      <th colSpan="6">FAIR RISK ANALYSIS METHODOLOGY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan="2">Stage 1</td>
      <td colSpan="2">Definition </td>
      <td colSpan="2">Notes</td>
    </tr>
    <tr>
      <td colSpan="2">Identify the Asset at Risk</td>
      <td colSpan="2">Anything that may be affected in a manner whereby
      its value is diminished or the act introduces liability to the owner. Examples include
      systems, data, people, facilities, cash, etc.</td>
      <td colSpan="2"></td>
    </tr>
    <tr>
      <td colSpan="2">Identify the Threat Community</td>
      <td colSpan="2">A threat agent (e.g., object, substance, human, etc.) is
      anything capable of acting against an asset in a manner that can result in harm. The Threat Community is a subset of the overall agent poppulation that shares key
      characteristics.</td>
      <td colSpan="2"></td>
    </tr>
    <tr>
      <td colSpan="2">Identify the Loss Event</td>
      <td colSpan="2">Occurs when a threat agent's action(threat event) is successful in negatively
      affecting an asset.</td>
      <td colSpan="2"></td>
    </tr>
    <tr>
      <td colSpan="2">Stage 2</td>
      <td colSpan="2">Definition </td>
      <td colSpan="2">Notes</td>
    </tr>
    <tr>
      <td colSpan="2">Estimate the Threat Capability</td>
      <td colSpan="2"> The probable level of force that a threat
      agent is capable of applying against an asset.</td>
      <td colSpan="2">Utilize OWASP classifications</td>
    </tr>
    <tr>
      <td colSpan="2">Determine Contact Frequency</td>
      <td colSpan="2"> The probable frequency, within a given timeframe, that a threat agent will come
      into contact with an asset.</td>
      <td colSpan="2">Impacted by CIS Controls Assesment (Avoidance Controls)</td>
    </tr>
    <tr>
      <td colSpan="2">Determine Probability of Action</td>
      <td colSpan="2"> The probability that a threat agent will act against an asset once contact occurs.</td>
      <td colSpan="2">Impacted by CIS Controls Assesment (Deterrence Controls)</td>
    </tr>
    <tr>
      <td colSpan="2">Determine Resistance Strength (Difficulty)</td>
      <td colSpan="2">The strength of a control as compared to a
      standard measure of force. Also labeled 'Difficulty' </td>
      <td colSpan="2">Impacted by CIS Controls Assesment (Difficulty Controls)</td>
    </tr>
    <tr>
      <td colSpan="2">Derive Threat Event Frequency</td>
      <td colSpan="2">The probable frequency, wihtin a given timeframe,
      that a threat agent will act against an asset.</td>
      <td colSpan="2">Calculated from Contact Frequency and Probabilty of Action</td>
    </tr>
    <tr>
      <td colSpan="2">Derive Vulnerability</td>
      <td colSpan="2">The probabilty that an asset will be unable to resist
      the actions of a threat agent. </td>
      <td colSpan="2">Calculated from Threat Capabilty
      and Resistance Strength</td>
    </tr>
    <tr>
      <td colSpan="2">Derive Primary Loss Event Frequency</td>
      <td colSpan="2">The probable frequency, within a given timeframe,
      that a threat agent will inflict harm upon an asset.</td>
      <td colSpan="2">Calculated from Threat Event
      Frequency and Vulnerabilty</td>
    </tr>
    <tr>
      <td colSpan="2">Stage 3</td>
      <td colSpan="2">Definition </td>
      <td colSpan="2">Notes</td>
    </tr>
    <tr>
      <td colSpan="2">Estimate Primary Loss Magnitude</td>
      <td colSpan="2">Losses resulting from decreased
      productivity, response effort, and/or replacement of asset at risk. </td>
      <td colSpan="2">Impacted by CIS Controls Assessment (Responsive Controls)</td>
    </tr>
    <tr>
      <td colSpan="2">Estimate Secondary Loss Probabilty </td>
      <td colSpan="2">The probabilty that a secondary loss event may occur. </td>
      <td colSpan="2"></td>
    </tr>
    <tr>
      <td colSpan="2">Derive Secondary Loss Event Frequency</td>
      <td colSpan="2">The probable frequency, wihtin a given timeframe, that
      a secondary loss event will occur.</td>
      <td colSpan="2"></td>
    </tr>
    <tr>
      <td colSpan="2">Estimate Secondary Loss Magnitude</td>
      <td colSpan="2">Losses resulting from fines and judgement;
      competitive advantage; and/or reputational damage </td>
      <td colSpan="2"></td>
    </tr>
    <tr>
      <td colSpan="2">Stage 4</td>
      <td colSpan="2">Definition </td>
      <td colSpan="2">Notes</td>
    </tr>
    <tr>
      <td colSpan="2">Derive Primary Risk</td>
      <td colSpan="2">Calculated based on Loss Event Frequency and Primary Loss Magnitude</td>
      <td colSpan="2"></td>
    </tr>
    <tr>
      <td colSpan="2">Derive Secondary Risk</td>
      <td colSpan="2">Calculated based on Secondary Loss Event Frequency and Secondary Loss Magnitude  </td>
      <td colSpan="2"> </td>
    </tr>
    <tr>
      <td colSpan="2">Derive Overall Risk</td>
      <td colSpan="2">Calculated based on Primary Risk and Secondary Risk </td>
      <td colSpan="2"></td>
    </tr>
  </tbody>

</Table>
</Row>
</Container>

</div>
    );
}