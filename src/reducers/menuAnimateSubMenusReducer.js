export default (state = true, action) => {
  switch (action.type) {
    case 'SET_SUBMENU_ANIMATION':
      return action.payload;
    default:
      return state;
  }
};
