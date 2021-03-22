import { IPlanet } from './StarWars.types';

export interface Column {
  title: string;
  field: keyof IPlanet;
  type?: 'boolean' | 'numeric' | 'date' | 'datetime' | 'time' | 'currency';
}
