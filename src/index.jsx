import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/home';
import MyList from './pages/my-list';
import NotFound from './pages/not-found';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/my-list" exact component={MyList} />
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
