import React, { useEffect, useReducer } from 'react';
import { getPlanets } from '../actions/StarWarsActions';
import { IContextModel, IState } from '../models/StarWars.types';
import { reducer } from '../reducers/StarsWarsReducer';
import { searchPlanetsFromAPI } from '../services/StarWarsService';

export const defaultState: IState = {
  data: [],
  filters: null,
};

export const StarWarsContext = React.createContext({} as IContextModel);

export const StarWarsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    if (state.filters) {
      const { name } = state.filters.filterByName;
      searchPlanetsFromAPI(name).then(response =>
        dispatch(getPlanets(response)),
      );
    }
  }, [state.filters]);

  return (
    <StarWarsContext.Provider value={{ state, dispatch }}>
      {children}
    </StarWarsContext.Provider>
  );
};
