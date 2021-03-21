import { IAction, IPlanet } from '../models/StarWars.types';

export const getPlanets = (planets: IPlanet[]): IAction => ({
  type: 'GET',
  payload: planets,
});
