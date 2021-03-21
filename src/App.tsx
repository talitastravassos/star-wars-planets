import { useContext, useEffect } from 'react';
import { getPlanets } from './actions/StarWarsActions';
import './App.scss';
import Table from './components/Table';
import { StarWarsContext } from './context/StarWarsContext';
import { getPlanetsFromAPI } from './services/StarWarsService';

const App: React.FC = () => {
  const {
    state: { data },
    dispatch,
  } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetsFromAPI().then(response => dispatch(getPlanets(response)));
  }, [dispatch]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Table rows={data} />
    </div>
  );
};

export default App;
