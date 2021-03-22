import axios from 'axios';
import { IFilter, IPlanet } from '../models/StarWars.types';

const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets';

export const getPlanetsFromAPI = async (): Promise<IPlanet[]> => {
  const response = await axios.get(URL_API);

  return response.data.results;
};

export const searchPlanetsFromAPI = async (
  search: string,
): Promise<IPlanet[]> => {
  const response = await axios.get(`${URL_API}/?search=${search}`);

  return response.data.results;
};

export const buildFilter = (filter: string): IFilter => {
  return {
    filterByName: {
      name: filter,
    },
  };
};
