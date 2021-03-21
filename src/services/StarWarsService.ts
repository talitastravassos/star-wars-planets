import axios from 'axios';
import { IPlanet } from '../models/StarWars.types';

const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanetsFromAPI = async (): Promise<IPlanet[]> => {
  const response = await axios.get(URL_API);
  // console.log(response);

  return response.data.results;
};
