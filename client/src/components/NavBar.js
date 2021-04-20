import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {

  constructor(props) {
      super(props);
      this.state = {
          activeItem: null
      }
  }

  
  // state = { activeItem: null }

  handleItemClick = (e, name) => {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary color="white">
        <Menu.Item
          as={NavLink} to="/" exact
          name='HOME'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          link
        />
        <Menu.Item
          as={NavLink} to="/about"
          name='ABOUT'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/store"
          name='STORE'
          active={activeItem === 'store'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/contact"
          name='CONTACT US'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            as={NavLink} to="/login"
            name='LOGIN'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink} to="/cart"
            icon='shopping bag'
            size='medium'
            active={activeItem === 'shopping bag'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}