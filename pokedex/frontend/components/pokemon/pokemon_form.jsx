import React from 'react';
const types = [
  'fire',
  'electric',
  'normal',
  'ghost',
  'psychic',
  'water',
  'bug',
  'dragon',
  'grass',
  'fighting',
  'ice',
  'flying',
  'poison',
  'ground',
  'rock',
  'steel'
];
const initialState =
{
  name: "",
  attack: "",
  defense: "",
  poke_type: "",
  moves: [],
  image_url: "",
};

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const pokemon = Object.assign({}, this.state);
    pokemon.poke_type = "water";
    this.props.requestNewPokemon({ pokemon })
      .then(() => this.setState(initialState));
  }

  render() {
    return (<form className="pokemon-form" onSubmit={ this.handleSubmit }>
       <label>Name:
         <input
           className="input"
           value={ this.state.name }
           onChange={ this.update('name') }
           />
       </label>
       <label>Attack:
         <input
           className="input"
           value={ this.state.attack }
           onChange={ this.update('attack') }
           />
       </label>
       <label>Defense:
         <input
           className="input"
           value={ this.state.defense }
           onChange={ this.update('defense') }
           />
       </label>
       <label>image_url:
         <input
           className="input"
           value={ this.state.image_url }
           onChange={ this.update('image_url') }
           />
       </label>
       <label>Moves:
         <input
           className="input"
           value={ ['hello'] }
           />
       </label>
       <button className="create-button">Create Pokemon!</button>
     </form>
   );
  }
}

export default PokemonForm;
