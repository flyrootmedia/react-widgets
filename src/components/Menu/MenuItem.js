import './MenuItem.scss';

import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { closeMenu } from './menuActions';

/**
 * @description: a single menu item and its sub-menu if applicable. 
 * @prop {string} label: the text of the menu item link or button
 * @prop {string} url: the URL of the menu item's link
 * @prop {Object[]} subMenuLinks: array of subment link objects
 * @prop {function} closeMenu: Redux action; closes the menu
 */
const MenuItem = ({ label, url, subMenuLinks, closeMenu }) => {
    const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);
    const menuItemEl = useRef();

    const onMenuLinkClicked = () => {
        setSubMenuIsOpen(false);
        closeMenu();
    };

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
    
    let menuItem = (
        <NavLink exact className="menu-item_link" to={url} onClick={onMenuLinkClicked}>
            {label}
        </NavLink>
    );

    let subMenuList = '';

    if (subMenuLinks.length > 0) {
        menuItem = (
            <button 
                className="menu-item_button" 
                type="button"
                onClick={() => setSubMenuIsOpen(!subMenuIsOpen)}>
                {label} <span className="arrow-down -small"></span>
            </button>
        );

        const renderedsubMenuLinks = subMenuLinks.map(link => {
            return (
                <li key={link.label}>
                    <NavLink exact to={link.url} onClick={onMenuLinkClicked}>
                        {link.label}
                    </NavLink>
                </li>
            );
        });

        subMenuList = (
            <ul className="menu-item_sub-menu">
                {renderedsubMenuLinks}
            </ul>
        );
    }

    return (
        <li ref={menuItemEl} className={`menu-item ${subMenuIsOpen ? '-open' : ''}`}>
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

export default connect(
    mapStateToProps,
    { closeMenu }
)(MenuItem);