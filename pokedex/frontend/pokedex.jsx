import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as APIUtils from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import {
  receiveAllPokemon, requestAllPokemon, receivePokemon, requestPokemon, requestNewPokemon
} from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootEl);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.receivePokemon = receivePokemon;
  window.requestPokemon = requestPokemon;
  window.requestNewPokemon = requestNewPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.fetchAllPokemon = APIUtils.fetchAllPokemon;
});
