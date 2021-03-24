import { render, screen } from '@testing-library/react';
import React from 'react';
import Table from '.';
import { Column } from '../../models/Table.types';

it('should render Table Component', () => {
  const cols: Column[] = [
    {
      field: 'name',
      title: 'Nome',
    },
    { field: 'climate', title: 'Clima' },
    { field: 'created', title: 'Criação', type: 'date' },
    { field: 'diameter', title: 'Diâmetro', type: 'numeric' },
    { field: 'edited', title: 'Edição', type: 'date' },
    { field: 'films', title: 'Filmes' },
    { field: 'gravity', title: 'Gravidade' },
    {
      field: 'orbital_period',
      title: 'Período Orbital',
      type: 'numeric',
    },
    {
      field: 'population',
      title: 'População',
      type: 'numeric',
    },
    {
      field: 'rotation_period',
      title: 'Rotação',
      type: 'numeric',
    },
    { field: 'surface_water', title: 'Água', type: 'numeric' },
    { field: 'terrain', title: 'Terreno' },
    { field: 'url', title: 'URL' },
  ];
  const data = [
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
  ];

  render(
    <Table onSearch={() => null} rows={data} columns={cols} title="Planetas" />,
  );
  const table = screen.getAllByRole('table');
  expect(table).not.toBeNull();
  const thead = table[0].querySelector('thead');
  expect(thead).not.toBeNull();
  const headers = thead?.querySelectorAll('th');
  expect(headers).toHaveLength(cols.length);
});
