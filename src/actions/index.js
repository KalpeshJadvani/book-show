const sendUserData = userData => {
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
  return {
    type: 'TABS',
    payload: current
  };
};
const allActions = {
  Tabs,
  editUserData,
  deleteUser,
  sendUserData
};

export default allActions;
