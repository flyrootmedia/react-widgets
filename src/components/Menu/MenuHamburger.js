import './MenuHamburger.scss';

import React from 'react';
import { connect } from 'react-redux';
import { openMenu, closeMenu } from './menuActions';

const MenuHamburger = ({ menuIsOpen, openMenu, closeMenu }) => {

    const toggleMenu = () => {
        menuIsOpen ? closeMenu() : openMenu();
    };

    return (
        <button 
            type="button" 
            className={`menu-hamburger ${menuIsOpen ? '-open' : ''}`}
            onClick={toggleMenu}>
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