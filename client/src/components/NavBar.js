import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Input, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import { logout } from '../actions/userActions';

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);
  const userLogin = useSelector(state => state.userLogin); 
  const { userInfo } = userLogin

  const handleItemClick = (name) => {
    setActiveItem(name);
  }

  return (
    <Menu secondary color="white">
        <Menu.Item
          as={NavLink} to="/" exact
          name='HOME'
          active={activeItem === 'home'}
          onClick={() => handleItemClick('HOME')}
          link
        />
        <Menu.Item
          as={NavLink} to="/about"
          name='ABOUT'
          active={activeItem === 'about'}
          onClick={() => handleItemClick('ABOUT')}
        />
        <Menu.Item
          as={NavLink} to="/store"
          name='STORE'
          active={activeItem === 'store'}
          onClick={() => handleItemClick('STORE')}
        />
        <Menu.Item
          as={NavLink} to="/contact"
          name='CONTACT US'
          active={activeItem === 'CONTACT'}
          onClick={() => handleItemClick('CONTACT')}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>

          {userInfo ? (
            <Menu.Item
              as={NavLink} to="/profile"
              name={userInfo.name.toUpperCase()}
              active={activeItem === userInfo.name.toString()}
              onClick={() => handleItemClick(userInfo.name.toString())}
              />
          ) : (

            <Menu.Item
              as={NavLink} to="/login"
              name='LOGIN'
              active={activeItem === 'login'}
              onClick={() => handleItemClick('LOGIN')}
            />

          )}

          <Menu.Item
            as={NavLink} to="/cart"
            icon='shopping bag'
            size='medium'
            active={activeItem === 'shopping bag'}
            onClick={() => handleItemClick('SHOPPING BAG')}
          />
        </Menu.Menu>
      </Menu>
  )
}

export default NavBar
