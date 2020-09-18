import './MenuItem.scss';

import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { closeMenu } from './menuActions';

const MenuItem = ({label, url, subMenuLinks, closeMenu}) => {
    const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);
    let menuItemEl = useRef();
    
    let menuItem = (
        <NavLink exact className="menu-item_link" to={url} onClick={closeMenu}>
            {label}
        </NavLink>
    );

    let subMenuList = '';

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
                    <NavLink exact to={link.url} onClick={closeMenu}>
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