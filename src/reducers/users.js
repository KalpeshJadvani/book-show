const userReducers = (state = { user: [] }, action) => {
  switch (action.type) {
    case 'ADD_USER_DATA':
      let user = state.user.concat(action.payload);
      return { user };

    case 'UPDATE_USER_DATA':
      const currentUserToUpdate = [...state.user];
      let indexToDelete = currentUserToUpdate.findIndex(
        x => x.key === action.payload.id
      );

      const newuserToUpdate = {
        key: action.payload.data.key,
        name: action.payload.data.name,
        email: action.payload.data.email
      };

      return {
        user: [
          ...currentUserToUpdate.slice(0, indexToDelete),
          newuserToUpdate,
          ...currentUserToUpdate.slice(indexToDelete + 1)
        ]
      };

    case 'DELETE_USER_DATA':
      let index = state.user.findIndex(x => x.id === action.payload);
      state.user.splice(index, 1);
      return {
        user: state.user
      };

    default:
      return state;
  }
};

export default userReducers;
