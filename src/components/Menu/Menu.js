import './Menu.scss';

import React from 'react';
import { connect } from 'react-redux';

import MenuItem from './MenuItem';

const Menu = ({ menuIsOpen, menuItems }) => {
    const renderedMenuItems = menuItems.map(menuItem => {
        return (
            <MenuItem 
                key={menuItem.label}
                label={menuItem.label} 
                url={menuItem.url}
                subMenuLinks={menuItem.subMenuLinks}
            />
        );
    });

    return (
        <nav className={`menu ${menuIsOpen ? '-open' : ''}`}>
            <ul className="menu_level-one">
                {renderedMenuItems}
            </ul>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu.menuItems,
        menuIsOpen: state.menu.menuIsOpen
    };
};

export default connect(mapStateToProps)(Menu);