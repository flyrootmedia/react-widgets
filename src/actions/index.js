/*
 * To keep all widgets compartmentalized and packaged together, all actions are defined in the 
 * individual widget components folders and simply imported/exported here for use by the main
 * reducers/index.js. If your project uses a single actions/index.js, feel free to instead copy the 
 * actions there.
 */

import accordionActions from '../components/Accordion/accordionActions';
export const accoridionActions = accordionActions;

import menuActions from '../components/Menu/menuActions';
export const menuActions = menuActions;