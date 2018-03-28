import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as APIUtils from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import {
  receiveAllPokemon,
  requestAllPokemon
} from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootEl);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.fetchAllPokemon = APIUtils.fetchAllPokemon;
});
