import React, { Fragment } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "next";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle1 = this.toggle1.bind(this);
    
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen1: false,
    };
  }

  toggle1() {
    this.setState(prevState => ({
      dropdownOpen1: !prevState.dropdownOpen1
    }));
  }
  onMouseEnter() {
    this.setState({ dropdownOpen1: true });
  }
  onMouseLeave() {
    this.setState({ dropdownOpen1: false });
  }
  render() {
    return (
      <div>
        <Dropdown
          className="d-inline-block"
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          isOpen={this.state.dropdownOpen1}
          toggle={this.toggle1}
        >
          <DropdownToggle caret>Dropdown1</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Submenu 1</DropdownItem>
            <DropdownItem>Submenu 1.1</DropdownItem>
          </DropdownMenu>
          &nbsp;&nbsp;&nbsp;
        </Dropdown>
      </div>
    );
  }
}
