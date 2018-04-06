import React, { Component } from 'react';
import routes from './routes.js';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard.js';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.js';
import Product from './components/Product/Product.js';


class App extends Component {
  render() {
    return (
      <div>
    
        <Header/>

        <Switch>

          <Route exact path="/" component={Dashboard} />
          <Route path="/product/:id" component={Product} />

        </Switch>
        
        {routes}
      </div>
    )
  }
}

export default App;