import './Menu.scss';

import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { closeMenu } from './menuActions';

import MenuHamburger from './MenuHamburger';
import MenuItem from './MenuItem';

/**
 * @description: configurable responsive menu with simple 2-level accordion/dropdown behavior
 * @prop {string} [position]: controls whether the menu is on the right or left (at mobile sizes)
 *      - valid values are "left" or "right"
 *      - defaults to left
 *  * @prop {boolean} [animateSubMenus]: controls whether or not to animate the sub-menu accordions
 *      - valid values are true or false
 *      - defaults to true
 * @prop {boolean} menuIsOpen: Redux state; controls whether the menu is open or closed (at mobile sizes)
 * @prop {Object[]} menuItems: Redux state; array of the item objects in the menu
 *      - currently hardcoded in menuReducer.js
 * @prop {function} closeMenu: Redux action; closes the menu
 */
const Menu = ({ position = 'left', animateSubMenus = true, menuIsOpen, menuItems, closeMenu }) => {
  let navEl = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (
        menuIsOpen &&
        navEl.current &&
        !navEl.current.contains(event.target) &&
        event.target.getAttribute('data-menu-hamburger') === null
      ) {
        closeMenu();
      }
    };
    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, [closeMenu, menuIsOpen]);

  const renderedMenuItems = menuItems.map((menuItem) => {
    return (
      <MenuItem
        key={menuItem.label}
        label={menuItem.label}
        url={menuItem.url}
        subMenuLinks={menuItem.subMenuLinks}
        animateSubMenus={animateSubMenus}
      />
    );
  });

  return (
    <React.Fragment>
      <div className={`menu-overlay ${menuIsOpen ? '-open' : ''}`}></div>
      <nav
        ref={navEl}
        className={`menu ${menuIsOpen ? '-open' : ''} -${position} ${
          animateSubMenus ? '-animatedSubMenus' : ''
        }`}>
        <MenuHamburger />
        <ul className="menu_level-one">{renderedMenuItems}</ul>
      </nav>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu.menuItems,
    menuIsOpen: state.menu.menuIsOpen
  };
};

export default connect(mapStateToProps, { closeMenu })(Menu);
