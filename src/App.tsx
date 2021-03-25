import { useContext, useEffect } from 'react';
import { getPlanets, setFilter } from './actions/StarWarsActions';
import './App.scss';
import Table from './components/Table';
import { StarWarsContext } from './context/StarWarsContext';
import { buildFilter, getPlanetsFromAPI } from './services/StarWarsService';

const App: React.FC = () => {
  const {
    state: { data },
    dispatch,
  } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetsFromAPI().then(response => dispatch(getPlanets(response)));
  }, [dispatch]);

  const onSearch = (search: string) => dispatch(setFilter(buildFilter(search)));

  return (
    <div className="App">
      <h1>Star Wars</h1>
      <Table
        onSearch={onSearch}
        rows={data}
        columns={[
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
        ]}
        title="Planetas"
      />
    </div>
  );
};

export default App;
