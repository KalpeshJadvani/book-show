const sendUserData = userData => {
  console.log('data', userData);
  return { type: 'ADD_USER_DATA', payload: userData };
};

const deleteUser = indexById => {
  return { type: 'DELETE_USER_DATA', payload: indexById };
};

const editUserData = (updatedData, indexById) => {
  return {
    type: 'UPDATE_USER_DATA',
    payload: { data: updatedData, id: indexById }
  };
};

const Tabs = current => {
  console.log('action payload', current);
  return {
    type: 'TABS',
    payload: { tabs: current }
  };
};
const allActions = {
  Tabs,
  editUserData,
  deleteUser,
  sendUserData
};

export default allActions;
