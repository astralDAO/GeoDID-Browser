import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import loadable from '@loadable/component';
import MainLayout from 'layouts';

const routes = [
  // Home
  {
    path: '/main',
    component: loadable(() => import('pages/Main')),
    exact: true,
  },
];

const Router = (props) => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <MainLayout>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/main" />} />
          {routes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
              exact={route.exact}
            />
          ))}
        </Switch>
      </MainLayout>
    </ConnectedRouter>
  );
};

export default Router;
