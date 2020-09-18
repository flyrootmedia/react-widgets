import './GlobalHeader.scss';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu/Menu';

const GlobalHeader = () => {
    const[bodyIsScrolled, setBodyIsScrolled] = useState(false);

    useEffect(() => {
        const onWindowScroll = (event) => {
            if (window.pageYOffset > 100) {
                document.body.classList.add('-fixed-header');
                setBodyIsScrolled(true);
            } else {
                document.body.classList.remove('-fixed-header');
                setBodyIsScrolled(false);
            }
        };

        window.addEventListener('scroll', onWindowScroll);

        return () => {
            window.removeEventListener('scroll', onWindowScroll);
        };
    }, []);

    return (
        <div className={`global-header clearfix ${bodyIsScrolled ? '-fixed' : ''}`}>
            <div className="global-header_wrapper max-width-wrapper">
                <div className="global-header_menu-btn-col">
                </div>
                <div className="global-header_logo-col">
                    <Link to="/">
                        React Widgets <span>by FlyRootMedia</span>
                    </Link>
                </div>
                <div className="global-header_nav-col">
                    <Menu position="right" />
                </div>
            </div>
        </div>
    );
};

export default GlobalHeader;