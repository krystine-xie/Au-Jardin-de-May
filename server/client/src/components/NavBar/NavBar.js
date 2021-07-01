import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";

import { logout } from "../../actions/userActions";

import styles from "./NavBar.module.css";

// react-intl
import { LOCALES } from "../../i18n/locales";
import { FormattedMessage, useIntl } from "react-intl";

const NavBar = (props) => {
  const intl = useIntl();

  const languages = [
    { name: "EN", code: LOCALES.ENGLISH },
    { name: "FR", code: LOCALES.FRENCH },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Menu secondary>
      <Menu.Item
        as={NavLink}
        to="/"
        exact
        name="HOME"
        active={activeItem === "home"}
        onClick={() => handleItemClick("HOME")}
        link
      >
        <FormattedMessage id="home_page" />
      </Menu.Item>
      <Menu.Item
        as={NavLink}
        to="/about"
        name="ABOUT"
        active={activeItem === "about"}
        onClick={() => handleItemClick("ABOUT")}
      >
        <FormattedMessage id="about_page" />
      </Menu.Item>
      <Menu.Item
        as={NavLink}
        to="/store"
        name="STORE"
        active={activeItem === "store"}
        onClick={() => handleItemClick("STORE")}
      >
        <FormattedMessage id="store_page" />
      </Menu.Item>
      <Menu.Item
        as={NavLink}
        to="/contact"
        name="CONTACT US"
        active={activeItem === "CONTACT"}
        onClick={() => handleItemClick("CONTACT")}
      >
        <FormattedMessage id="contact_us" />
      </Menu.Item>
      {userInfo && userInfo.isAdmin && (
        <Menu vertical borderless={true}>
          <Dropdown item text={intl.formatMessage({ id: "admin_user" })}>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/admin/userlist">
                <FormattedMessage id="user_list" />
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/admin/productlist">
                <FormattedMessage id="product_list" />
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/admin/orderlist">
                <FormattedMessage id="order_list" />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      )}

      <Menu.Menu position="right">
        <div className="switcher">
          <select
            onChange={props.handleLanguageChange}
            className={styles.switcher}
            value={props.currentLocale}
          >
            {languages.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.searchBar}>
          <SearchBar />
        </div>

        {userInfo ? (
          <Menu vertical>
            <Dropdown item text={userInfo.name.toUpperCase()}>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/profile">
                  <FormattedMessage id="profile" />
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLogout()}>
                  <FormattedMessage id="log_out" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        ) : (
          <Menu.Item
            as={NavLink}
            to="/login"
            name="LOGIN"
            active={activeItem === "login"}
            onClick={() => handleItemClick("LOGIN")}
          >
            <FormattedMessage id="login" />
          </Menu.Item>
        )}

        <Menu.Item
          as={NavLink}
          to="/cart"
          icon="shopping bag"
          size="medium"
          active={activeItem === "shopping bag"}
          onClick={() => handleItemClick("SHOPPING BAG")}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
