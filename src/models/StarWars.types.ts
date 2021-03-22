/* eslint-disable camelcase */
import React from 'react';

export interface IPlanet {
  name: string;
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface IFilterByName {
  name: string;
}

export interface IFilter {
  filterByName: IFilterByName;
}
export interface IState {
  data: IPlanet[];
  filters: IFilter | null;
}

export interface IContextModel {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export type IAction =
  | { type: 'GET'; payload: IPlanet[] }
  | { type: 'FILTER'; payload: IFilter };
