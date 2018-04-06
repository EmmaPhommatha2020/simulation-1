import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.js';
import Product from './components/Product/Product.js';

export default (
  <Switch>

    <Route exact path="/" component={Dashboard} />
    <Route path="/product/:id" component={Product} />

  </Switch>
)