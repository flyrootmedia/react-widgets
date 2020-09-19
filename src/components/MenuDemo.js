import React from 'react';
import { connect } from 'react-redux';
import { setMenuPosition, setSubMenuAnimation } from '../actions';

const MenuDemo = ({ menuPosition, setMenuPosition, animateSubMenus, setSubMenuAnimation }) => {
    
    const toggleMenuPosition = () => {
        const newMenuPos = menuPosition === 'left' ? 'right' : 'left'
        setMenuPosition(newMenuPos);
    };

    return (
        <div className="menu-demo max-width-wrapper -pad-top">
            <h1>Responsive Menu Widget</h1>

            <p>
                This is a simple, two-level menu which displays as a flyout from the side of the screen 
                at mobile widths, and an inline horizontal menu at desktop widths. The navigation of this 
                demo site uses the <strong>Menu</strong> Widget.
            </p>

            <h3>Features</h3>

            <ul>
                <li>
                    Uses class-based CSS transitions for animations.
                </li>
                <li>
                    Can be configured for left or right placement and to animate the sub-menus at mobile widths with <code>props</code>.
                </li>
                <li>
                    Sub-menus appear in an accordion style at mobile widths, and a dropdown 
                    at desktop widths.
                </li>
            </ul>

            <h3>Usage</h3>

            <p>
                Copy the files from <code><span className="string">'/src/components/Menu'</span></code> to 
                an appropriate location in your project, then import and configure as follows:
            </p>

            <code className="code-block">
                <span className="statement">import</span> <span className="element">Menu</span> <span className="statement">from</span> <span className="string">'./Menu/Menu'</span>;
            </code>

            <code className="code-block">
                &lt;<span className="tag">Menu</span><br />
                    <span className="element">    position</span>=<span className="string">"[right/left]"</span> <span className="comment">{`// if not passed, defaults to "left"`}</span><br />
                    <span className="element">    animateSubMenus</span>=<span className="keyword">{`{[true/false]}`}</span> <span className="comment">{`// if not passed, defaults to true`}</span><br />
                /&gt;
            </code>

            <p>
                If you'd like to use the pre-defined theme, copy the files from <code><span className="string">'/src/sass/widgetsThemeDefault'</span></code> to 
                an appropriate location in your project. If not, please be sure to update the values of all variables in the <strong>Menu</strong> .scss files. 
                Feel free to update any styles as necessary to fit your project.
            </p>

            <h3>Try the Options</h3>
            
            <p>
                Note that the below are only visible at mobile widths.
            </p>
            <p>
                <button 
                    className="btn -primary" 
                    onClick={toggleMenuPosition}>
                        {`Show menu on the ${menuPosition === 'left' ? 'right' : 'left'}`}
                </button>

                <button 
                    className="btn -primary" 
                    onClick={() => setSubMenuAnimation(!animateSubMenus)}>
                        {`${animateSubMenus ? 'Disable' : 'Enable'} animated sub-menus`}
                </button>
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        menuPosition: state.globalMenuPosition,
        animateSubMenus: state.globalMenuAnimateSubmenus
    };
};

export default connect(
    mapStateToProps,
    { setMenuPosition, setSubMenuAnimation }
)(MenuDemo);