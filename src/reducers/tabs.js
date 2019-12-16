const tabsReducers = (state = { tabs: 'user' }, action) => {
  console.log(action.payload);
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
