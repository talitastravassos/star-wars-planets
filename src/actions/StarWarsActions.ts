import { IAction, IFilter, IPlanet } from '../models/StarWars.types';

export const getPlanets = (planets: IPlanet[]): IAction => ({
  type: 'GET',
  payload: planets,
});

export const setFilter = (filter: IFilter): IAction => ({
  type: 'FILTER',
  payload: filter,
});
