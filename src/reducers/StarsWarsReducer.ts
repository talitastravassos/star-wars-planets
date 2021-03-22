import { IAction, IState } from '../models/StarWars.types';

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'GET':
      return {
        ...state,
        data: [...action.payload],
      };

    case 'FILTER':
      return {
        ...state,
        filters: { ...action.payload },
      };

    default:
      return state;
  }
};
