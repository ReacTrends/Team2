import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    NavbarText,
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';
  import "./MainNavbar.css";
class MainNavbar extends Component{
constructor(props){
    super(props);
    this.state={
        isOpen:false,
        isDropdownOpen:false,
    }
}
toggle=()=>{
    let {isOpen}=this.state;
    this.setState({ isOpen: !isOpen });
}
toggleDropDown=()=>{
  let {isDropdownOpen}=this.state;
  this.setState({ isDropdownOpen: !isDropdownOpen });
}
render(){
    let {
isOpen,
isDropdownOpen
    }=this.state
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className="font-weight-bold ">
            <h3 className="dash">Dashboard</h3>
            </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            </Nav>
            <ButtonDropdown  isOpen={isDropdownOpen} toggle={this.toggleDropDown}>
      <DropdownToggle caret>
        This Month
      </DropdownToggle>
      <DropdownMenu>
       
        <DropdownItem >Jan</DropdownItem>
        <DropdownItem>Feb</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Months</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
          </Collapse>
        </Navbar>
      </div>
    );
  
}
}
export default MainNavbar;