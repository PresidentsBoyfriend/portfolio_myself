import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../../settings/routes.js';
import MainPage from '../../page/main-page';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.home} component={MainPage} exact />
    </Switch>
  </BrowserRouter>
);

export default App;
