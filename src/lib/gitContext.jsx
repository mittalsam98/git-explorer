import { createContext, useContext, useReducer } from 'react';
import { gitReducer } from './gitReducer';

const initialState = { usersData: [], userDataFetching: false, searchQuery: 'mittalsam98' };

const GitContext = createContext();

export function useGitContext() {
  const context = useContext(GitContext);
  if (context === undefined) {
    throw new Error('Scope is outsde of the useGitContext hook');
  }

  return context;
}

export function GitContextProvider({ children }) {
  const [state, dispatch] = useReducer(gitReducer, initialState);
  return <GitContext.Provider value={{ state, dispatch }}>{children}</GitContext.Provider>;
}
