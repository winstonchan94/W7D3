import { values } from 'lodash';

export const selectAllPokemon = (state) => (
  values(state.entities.pokemon)
);

export const selectPokemon = (state, id) => (
  state.entities.pokemon[id]
);

export const selectItems = (state) => (
  values(state.entities.items)
);
