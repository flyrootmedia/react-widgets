import { combineReducers } from 'redux';

// Accordion
import accordionReducer from '../components/Accordion/accordionReducer';

// Menu
import menuReducer from '../components/Menu/menuReducer';

export default combineReducers({
    accordion: accordionReducer,
    menu: menuReducer
});