import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary color="white">
        <Menu.Item
          name='HOME'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='ABOUT US'
          active={activeItem === 'about us'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='STORE'
          active={activeItem === 'store'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='CONTACT US'
          active={activeItem === 'contact us'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='LOGIN'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            icon='shopping bag'
            size='medium'
          />
        </Menu.Menu>
      </Menu>
    )
  }
}