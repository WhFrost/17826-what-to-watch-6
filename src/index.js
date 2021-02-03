import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {FILMS} from '/src/mock/films';

ReactDOM.render(<App FILMS={FILMS}/>, document.querySelector(`#root`));
