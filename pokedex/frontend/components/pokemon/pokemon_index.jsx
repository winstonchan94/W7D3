import React from 'react';
import {
  receiveAllPokemon,
  requestAllPokemon
} from '../../actions/pokemon_actions';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div className='pokemon-list'>
        <ul>
          {this.props.pokemon.map((pokemon) => (<li key={pokemon.id}><img src={pokemon.image_url}></img><strong>{pokemon.name}</strong></li>))}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
