import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalText extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text vertical size="large">
        <Menu.Item header >FILTER BY</Menu.Item>
        <Menu.Item
          name='CATEGORY'
          active={activeItem === 'closest'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='COLOUR'
          active={activeItem === 'mostComments'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='SIZE'
          active={activeItem === 'mostPopular'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}