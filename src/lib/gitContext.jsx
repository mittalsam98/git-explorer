import { gitReducer } from './gitReducer';
import { createContext, useContext, useReducer } from 'react';

const initialState = { usersData: [], userProfileData: {} };

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
