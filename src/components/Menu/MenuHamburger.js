import './MenuHamburger.scss';

import React from 'react';
import { connect } from 'react-redux';
import { openMenu, closeMenu } from './menuActions';

/**
 * @description: the hamburger button to toggle the menu at mobile widths 
 * @prop {bool} menuIsOpen: Redux state; whether or not the menu is currently open
 * @prop {function} openMenu: Redux action; opens the menu
 * @prop {function} closeMenu: Redux action; closes the menu
 */
const MenuHamburger = ({ menuIsOpen, openMenu, closeMenu }) => {

    const toggleMenu = () => {
        menuIsOpen ? closeMenu() : openMenu();
    };

    return (
        <button 
            type="button" 
            className={`menu-hamburger ${menuIsOpen ? '-open' : ''}`}
            onClick={toggleMenu}>
                <span className="menu-hamburger_overlay" data-menu-hamburger></span>
                <span className="menu-hamburger_bar -bar-1"></span>
                <span className="menu-hamburger_bar -bar-2"></span>
                <span className="menu-hamburger_bar -bar-3"></span>
                <span className="screen-reader-only">Menu</span>
        </button>
    );
};

const mapStateToProps = (state) => {
    return {
        menuIsOpen: state.menu.menuIsOpen
    };
};

export default connect(
    mapStateToProps,
    { openMenu, closeMenu }
)(MenuHamburger);