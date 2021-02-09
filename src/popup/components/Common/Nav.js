'use strict';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import NavIcon from './NavIcon';

const StyledNav = styled.nav`
  width: 100%;
  min-height: 19px;
  padding-top: 11px;
  padding-bottom: 11px;
`;

const Menu = styled.div`
  position: relative;
  float: right;
`;

const IconWrapper = styled.div`
  min-height: 19px;
  padding: 0 3px;
  cursor: pointer;
`;

const MenuList = styled.ul`
  position: absolute;
  right: 0;
  z-index: 200;
  margin-top: 2px;
  margin-left: 0;
  margin-right: -1px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  text-transform: capitalize;
  border-radius: 5px;
  font-size: 12px;
  color: #ffffff;
  background-color: ${(props) => props.theme.menu.main};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
`;

const MenuItem = styled.li`
  margin: 2px;
  padding: 5px 10px;

  &:hover {
    border-radius: 5px;
    background-color: ${(props) => props.theme.menu.alt};
  }
`;

const Nav = ({ navigate }) => {
  const [open, setOpen] = useState(false);
  const iconRef = useRef();
  const listRef = useRef();

  useEffect(() => {
    if (open) document.addEventListener('mousedown', handleOutsideClick);
    else document.removeEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [open]);

  const toggleMenu = () => setOpen((open) => !open);

  const navigateTo = (input) => {
    navigate(input);
    setOpen(false);
  };

  const handleOutsideClick = (e) => {
    const clickOnIcon = iconRef.current.contains(e.target);
    const clickOnList = listRef.current.contains(e.target);

    if (clickOnIcon || clickOnList) return;
    else setOpen(false);
  };

  return (
    <StyledNav>
      <Menu>
        <IconWrapper ref={iconRef} onClick={toggleMenu}>
          <NavIcon />
        </IconWrapper>
        {open && (
          <MenuList ref={listRef}>
            <MenuItem onClick={() => navigateTo('timer')}>Timer</MenuItem>
            <MenuItem onClick={() => navigateTo('settings')}>Settings</MenuItem>
          </MenuList>
        )}
      </Menu>
    </StyledNav>
  );
};

export default Nav;