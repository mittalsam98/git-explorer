export const gitReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS_DATA':
      return { ...state, usersData: action.payload };
    case 'SET_USERS_DATA_FETCHING':
      return { ...state, userDataFetching: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_USERS_DATA_TOTAL_COUNT':
      return { ...state, usersDataTotlCount: action.payload };

    default:
      return state;
  }
};
