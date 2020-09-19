import { combineReducers } from 'redux';

// Accordion
import accordionReducer from '../components/Accordion/accordionReducer';

// Menu
import menuReducer from '../components/Menu/menuReducer';

// Global App state reducers
import menuPositionReducer from './menuPositionReducer';
import menuAnimateSubMenusReducer from './menuAnimateSubMenusReducer';

export default combineReducers({
    accordion: accordionReducer,
    menu: menuReducer,
    globalMenuPosition: menuPositionReducer,
    animateGlobalSubMenus: menuAnimateSubMenusReducer
});