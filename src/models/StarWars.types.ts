/* eslint-disable camelcase */
import React from 'react';

export interface IPlanet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface IState {
  planets: IPlanet[];
}

export interface IContextModel {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export type IAction = { type: 'GET'; payload: IPlanet[] };
