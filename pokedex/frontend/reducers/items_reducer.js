import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POKEMON:
      if (!action.payload.items) {
        return null;
      }
      return action.payload.items;
    default:
      return state;
  }
};

export default itemsReducer;
