import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink, withRouter, Link } from 'react-router-dom';

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, name) => {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary color="white">
        <Menu.Item
          as={NavLink} to="/"
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
            as={Link} to="/login"
            name='LOGIN'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} to="/shoppingbag"
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