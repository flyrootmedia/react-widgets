export default (state = 'left', action) => {
  switch (action.type) {
    case 'SET_MENU_POSITION':
      return action.payload;
    default:
      return state;
  }
};
