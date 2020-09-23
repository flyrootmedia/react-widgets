import './MenuItem.scss';

import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { closeMenu } from './menuActions';

const getMenuItemHeight = (subMenuHeight, isOpen) => {
  const baseMenuItemHeight = 44;
  const marginHeight = 20;
  return isOpen
    ? `${baseMenuItemHeight + marginHeight + subMenuHeight}px`
    : `${baseMenuItemHeight}px`;
};

/**
 * @description: a single menu item and its sub-menu if applicable.
 * @prop {string} label: the text of the menu item link or button
 * @prop {string} url: the URL of the menu item's link
 * @prop {Object[]} subMenuLinks: array of subment link objects
 * @prop {function} closeMenu: Redux action; closes the menu
 */
const MenuItem = ({ label, url, subMenuLinks, animateSubMenus, menuIsOpen, closeMenu }) => {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);
  const [subMenuHeight, setSubMenuHeight] = useState(
    animateSubMenus ? getMenuItemHeight(0, false) : 'auto'
  );
  const menuItemEl = useRef();
  const subMenuEl = useRef();

  const onMenuLinkClicked = (event, isSubMenuHeaderClick) => {
    if (isSubMenuHeaderClick) {
      event.preventDefault();

      if (animateSubMenus) {
        setSubMenuHeight(getMenuItemHeight(subMenuEl.current.clientHeight, !subMenuIsOpen));
      } else {
        setSubMenuHeight('auto');
      }
    }

    setSubMenuIsOpen(!subMenuIsOpen);

    if (!isSubMenuHeaderClick) {
      closeMenu();
    }
  };

  useEffect(() => {
    setSubMenuHeight(animateSubMenus ? getMenuItemHeight(0, false) : 'auto');
  }, [animateSubMenus, menuIsOpen]);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (menuItemEl.current && !menuItemEl.current.contains(event.target)) {
        setSubMenuIsOpen(false);
      }
    };
    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const hasSubMenu = subMenuLinks.length > 0;
  const menuItemClassName = hasSubMenu ? 'menu-item_button' : 'menu-item_link';

  let menuItem = (
    <NavLink
      exact
      className={menuItemClassName}
      to={url}
      onClick={(e) => onMenuLinkClicked(e, hasSubMenu)}>
      {label} <span className={hasSubMenu ? `arrow-down -small` : ''}></span>
    </NavLink>
  );

  let subMenuList = '';

  if (hasSubMenu) {
    const renderedsubMenuLinks = subMenuLinks.map((link) => {
      return (
        <li key={link.label}>
          <NavLink exact to={link.url} onClick={(e) => onMenuLinkClicked(e, false)}>
            {link.label}
          </NavLink>
        </li>
      );
    });

    subMenuList = (
      <ul ref={subMenuEl} className="menu-item_sub-menu">
        {renderedsubMenuLinks}
      </ul>
    );
  }

  return (
    <li
      ref={menuItemEl}
      className={`menu-item ${subMenuIsOpen ? '-open' : ''}`}
      style={{ height: subMenuHeight }}>
      {menuItem}
      {subMenuList}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    menuIsOpen: state.menu.menuIsOpen
  };
};

export default connect(mapStateToProps, { closeMenu })(MenuItem);
