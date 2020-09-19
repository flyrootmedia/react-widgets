/*
 * NOTE: To keep all widgets compartmentalized and packaged together, all of their actions are defined in the 
 * individual widget components folders. If your project uses a single actions/index.js, feel free to 
 * instead copy the actions there.
 */

export const setMenuPosition = (position) => {
    return {
        type: 'SET_MENU_POSITION',
        payload: position
    };
};

export const setSubMenuAnimation = (isAnimated) => {
    return {
        type: 'SET_SUBMENU_ANIMATION',
        payload: isAnimated
    };
};
