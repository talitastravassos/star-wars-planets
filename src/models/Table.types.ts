import { IPlanet } from './StarWars.types';

export type Order = 'asc' | 'desc';

export interface HeadCell {
  id: keyof IPlanet;
  label: string;
}
