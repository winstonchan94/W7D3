import React from 'react';
import {
  receiveAllPokemon,
  requestAllPokemon
} from '../../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemonItems = this.props.pokemon.map(poke =>
      <PokemonIndexItem key={poke.id} pokemon={poke} />);

    return (
      <div className='pokemon-list'>
        <ul>
          {pokemonItems}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
