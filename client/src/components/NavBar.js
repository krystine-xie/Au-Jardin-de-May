import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

import { logout } from "../actions/userActions";

import styles from "./NavBar.module.css";

function NavBar() {
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
      />
      <Menu.Item
        as={NavLink}
        to="/about"
        name="ABOUT"
        active={activeItem === "about"}
        onClick={() => handleItemClick("ABOUT")}
      />
      <Menu.Item
        as={NavLink}
        to="/store"
        name="STORE"
        active={activeItem === "store"}
        onClick={() => handleItemClick("STORE")}
      />
      <Menu.Item
        as={NavLink}
        to="/contact"
        name="CONTACT US"
        active={activeItem === "CONTACT"}
        onClick={() => handleItemClick("CONTACT")}
      />
      {userInfo && userInfo.isAdmin && (
        <Menu vertical borderless={true}>
          <Dropdown item text="ADMIN">
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/admin/userlist">
                User List
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/admin/productlist">
                Product List
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/admin/orderlist">
                Order List
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      )}

      <Menu.Menu position="right">
        <div className={styles.searchBar}>
          <SearchBar />
        </div>

        {userInfo ? (
          <Menu vertical>
            <Dropdown item text={userInfo.name.toUpperCase()}>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLogout()}>
                  Log Out
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
          />
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
}

export default NavBar;
