import { useContext, useEffect } from 'react';
import { getPlanets } from './actions/StarWarsActions';
import './App.scss';
import { StarWarsContext } from './context/StarWarsContext';
import { getPlanetsFromAPI } from './services/StarWarsService';

const App: React.FC = () => {
  const {
    state: { planets },
    dispatch,
  } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetsFromAPI().then(response => dispatch(getPlanets(response)));
  }, [dispatch]);

  useEffect(() => {
    console.log(planets);
  }, [planets]);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
