import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

import { FormattedMessage } from "react-intl";

export default class MenuExampleVerticalText extends Component {
  state = { activeItem: "closest" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    const locale = localStorage.getItem("locale");

    return (
      <Menu text vertical size="large">
        <Menu.Item header>
          <FormattedMessage id="filter_by" />
        </Menu.Item>
        <Menu.Item
          name={locale === "fr-FR" ? "CATÊGORIE" : "CATEGORY"}
          active={activeItem === "closest"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name={locale === "fr-FR" ? "COULEUR" : "COLOUR"}
          active={activeItem === "mostComments"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name={locale === "fr-FR" ? "GRANDEUR" : "SIZE"}
          active={activeItem === "mostPopular"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
