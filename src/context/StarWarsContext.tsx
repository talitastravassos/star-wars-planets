import React, { useReducer } from 'react';
import { IContextModel, IState } from '../models/StarWars.types';
import { reducer } from '../reducers/StarsWarsReducer';

const defaultState: IState = {
  data: [],
};

export const StarWarsContext = React.createContext({} as IContextModel);

export const StarWarsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <StarWarsContext.Provider value={{ state, dispatch }}>
      {children}
    </StarWarsContext.Provider>
  );
};
