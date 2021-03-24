import { getPlanets, setFilter } from '../actions/StarWarsActions';
import { defaultState } from '../context/StarWarsContext';
import { buildFilter } from '../services/StarWarsService';
import { reducer } from './StarsWarsReducer';

describe('reducer', () => {
  it('should dispatch getPlanets action', () => {
    const state = reducer(
      defaultState,
      getPlanets([
        {
          name: 'Tatooine',
          rotation_period: '23',
          orbital_period: '304',
          diameter: '10465',
          climate: 'arid',
          gravity: '1 standard',
          terrain: 'desert',
          surface_water: '1',
          population: '200000',
          residents: [
            'https://swapi-trybe.herokuapp.com/api/people/1/',
            'https://swapi-trybe.herokuapp.com/api/people/2/',
            'https://swapi-trybe.herokuapp.com/api/people/4/',
            'https://swapi-trybe.herokuapp.com/api/people/6/',
            'https://swapi-trybe.herokuapp.com/api/people/7/',
            'https://swapi-trybe.herokuapp.com/api/people/8/',
            'https://swapi-trybe.herokuapp.com/api/people/9/',
            'https://swapi-trybe.herokuapp.com/api/people/11/',
            'https://swapi-trybe.herokuapp.com/api/people/43/',
            'https://swapi-trybe.herokuapp.com/api/people/62/',
          ],
          films: [
            'https://swapi-trybe.herokuapp.com/api/films/1/',
            'https://swapi-trybe.herokuapp.com/api/films/3/',
            'https://swapi-trybe.herokuapp.com/api/films/4/',
            'https://swapi-trybe.herokuapp.com/api/films/5/',
            'https://swapi-trybe.herokuapp.com/api/films/6/',
          ],
          created: '2014-12-09T13:50:49.641000Z',
          edited: '2014-12-20T20:58:18.411000Z',
          url: 'https://swapi-trybe.herokuapp.com/api/planets/1/',
        },
      ]),
    );

    expect(state.data.length).toBeGreaterThan(0);
    expect(state.data[0].name).toBe('Tatooine');
  });

  it('should dispatch setFilter action', () => {
    const state = reducer(defaultState, setFilter(buildFilter('Tatooine')));

    expect(state.filters?.filterByName).not.toBeNull();
    expect(state.filters?.filterByName.name).toBe('Tatooine');
  });
});
