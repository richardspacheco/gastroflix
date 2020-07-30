import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import NotFound from './pages/not-found';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/categoria" exact component={CadastroCategoria} />
      <Route path="/cadastro/video" exact component={CadastroVideo} />
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
