const INITIAL_STATE = {
  isAllOpen: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_ALL':
      return { ...state, isAllOpen: true };
    case 'CLOSE_ALL':
      return { ...state, isAllOpen: false };
    default:
      return state;
  }
};
