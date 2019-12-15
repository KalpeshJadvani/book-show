const userReducers = (state = { user: [] }, action) => {
  switch (action.type) {
    case 'ADD_USER_DATA':
      let user = state.user.concat(action.payload);
      return { user };

    case 'UPDATE_USER_DATA':
      const currentUserToUpdate = [...state.user];

      const indexToDelete = currentUserToUpdate.findIndex(function(
        user,
        index
      ) {
        return index === action.payload.id;
      });

      const newuserToUpdate = {
        name: action.payload.data.name,
        email: action.payload.data.email
      };

      console.log('newuserToUpdate', newuserToUpdate);

      return {
        user: [
          ...currentUserToUpdate.slice(0, indexToDelete),
          newuserToUpdate,
          ...currentUserToUpdate.slice(indexToDelete + 1)
        ]
      };

    case 'DELETE_USER_DATA':
      return {
        user: [
          ...state.user.slice(0, action.payload),
          ...state.user.slice(action.payload + 1)
        ]
      };
    case 'TABS':
      return {
        tabs: action.payload
      };
    default:
      return state;
  }
};

export default userReducers;
