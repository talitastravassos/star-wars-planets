import { IAction, IState } from '../models/StarWars.types';

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'GET':
      return {
        ...state,
        data: [...action.payload],
      };

    default:
      return state;
  }
};
