const tabsReducers = (state = { tabs: 'users' }, action) => {
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
