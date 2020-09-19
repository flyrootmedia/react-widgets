import './GlobalHeader.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from './Menu/Menu';

const GlobalHeader = ({ menuPosition, animateSubMenus }) => {
    return (
        <div className={`global-header clearfix -fixed`}>
            <div className="global-header_wrapper max-width-wrapper">
                <div className="global-header_menu-btn-col">
                </div>
                <div className="global-header_logo-col">
                    <Link to="/">
                        React Widgets <span>by FlyRootMedia</span>
                    </Link>
                </div>
                <div className="global-header_nav-col">
                    <Menu position={menuPosition} animateSubMenus={animateSubMenus} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        menuPosition: state.globalMenuPosition,
        animateSubMenus: state.animateGlobalSubMenus
    };
};

export default connect(
    mapStateToProps
)(GlobalHeader);