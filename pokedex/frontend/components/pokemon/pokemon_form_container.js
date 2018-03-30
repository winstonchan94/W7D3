import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';

import {
  receivePokemon,
  requestNewPokemon
} from '../../actions/pokemon_actions';

const mapStateToProps = ({ ui }) => ({
  stuff: ''
});

const mapDispatchToProps = dispatch => ({
  requestNewPokemon: (pokemon) => dispatch(requestNewPokemon(pokemon))
});

export default connect(mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
