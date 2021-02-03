import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class AccountBar extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text vertical size="large">
        <Menu.Item
          name='MY ACCOUNT'
          active={activeItem === 'myAccount'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='PAST ORDERS'
          active={activeItem === 'pastOrders'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='ADDRESSES'
          active={activeItem === 'addresses'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}