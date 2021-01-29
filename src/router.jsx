import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import MainLayout from 'layouts';
import { useWallet } from './wallet';

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: loadable(() => import('pages/Landing')),
    exact: true,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: loadable(() => import('pages/Map')),
    exact: true,
  },
];

function Router() {
  const { account } = useWallet();
  console.log(account);
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/Landing" />} />
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
  );
}

export default Router;
