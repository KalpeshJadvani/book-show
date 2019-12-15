const tabsReducers = (state = { tabs: 'user' }, action) => {
  switch (action.type) {
    case 'TABS':
      return {
        tabs: action.payload
      };
    default:
      return state;
  }
};

export default tabsReducers;
