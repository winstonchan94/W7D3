import React from 'react';
// import { requestPokemon } from '../../actions/pokemon_actions';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.requestPokemon(nextProps.match.params.id);
    }
  }

  render() {
    let { pokemon, items } = this.props;
    if (pokemon === undefined) {
      return ('loading...');
    }
    if (!items) {
      items = [];
    }
    let { name, poke_type, attack, defense, moves, image_url, item_ids } = pokemon;
    // debugger;
    return (
      <section className='details'>
        <figure></figure>
        <ul>
          <img className='poke-pic' src={image_url}></img>
          <li>{name}</li>
          <li>type: {poke_type}</li>
          <li>attack: {attack}</li>
          <li>defense: {defense}</li>
          <li>moves: {moves}</li>
        </ul>
        <section>
          <h3>Items</h3>
          <ul className='item-img'>
            {items.map((item) => <li key={item.id}><img src={item.image_url}></img></li>)}
          </ul>
        </section>
      </section>
    );
  }
}

export default PokemonDetail;
