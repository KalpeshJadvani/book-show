export function sendUserData(userData) {
  console.log('data', userData);
  return { type: 'ADD_USER_DATA', payload: userData };
}

export function deleteUser(indexById) {
  return { type: 'DELETE_USER_DATA', payload: indexById };
}

export function editUserData(updatedData, indexById) {
  return {
    type: 'UPDATE_USER_DATA',
    payload: { data: updatedData, id: indexById }
  };
}

export function tabs(current) {
  return {
    type: 'TABS',
    payload: { tabs: current }
  };
}
