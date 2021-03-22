import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StarWarsProvider } from './context/StarWarsContext';
import './index.scss';

ReactDOM.render(
  <StarWarsProvider>
    <App />
  </StarWarsProvider>,
  document.getElementById('root'),
);
