import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ToggleButton from 'react-bootstrap/ToggleButton'


export function Page1(props){
  return(
    <DropdownButton id="dropdown-item-button" title="Vuln">
      <Dropdown.ItemText> </Dropdown.ItemText>
      <Dropdown.Item as="button">1</Dropdown.Item>
      <Dropdown.Item as="button">2</Dropdown.Item>
      <Dropdown.Item as="button">3</Dropdown.Item>
      <Dropdown.Item as="button">4</Dropdown.Item>
      <Dropdown.Item as="button">5</Dropdown.Item>
    </DropdownButton>
  );
}