import React from 'react';
import { Provider } from 'react-redux';
import PokemonContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div className='main'>
        <Switch>
          <Route exact path="/pokemon/new" component={ PokemonFormContainer } />
          <Route path="/pokemon/:id" component={ PokemonDetailContainer } />
        </Switch>
        <Route path ="/" component={ PokemonContainer } />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
