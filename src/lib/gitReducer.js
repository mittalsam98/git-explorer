export const gitReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS_DATA':
      return { ...state, usersData: action.payload };
    case 'SET_USER_PROFILE_DATA':
      return { ...state, userProfileData: action.payload };

    default:
      return state;
  }
};
