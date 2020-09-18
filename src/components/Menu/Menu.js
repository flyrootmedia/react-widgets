import './Menu.scss';

import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { closeMenu } from './menuActions';

import MenuHamburger from './MenuHamburger';
import MenuItem from './MenuItem';

const Menu = ({ menuIsOpen, menuItems, closeMenu }) => {
    let navEl = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (navEl.current && !navEl.current.contains(event.target)) {
                closeMenu();
            }
        };
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, [closeMenu]);

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
        <nav ref={navEl} className={`menu ${menuIsOpen ? '-open' : ''}`}>
            <MenuHamburger />
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

export default connect(
    mapStateToProps,
    { closeMenu }
)(Menu);