import { connect } from 'react-redux';
import { selectPokemon, selectItems } from '../../reducers/selectors';
import {
  receivePokemon,
  requestPokemon
} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => ({
  pokemon: selectPokemon(state, ownProps.match.params.id),
  items: selectItems(state)
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
