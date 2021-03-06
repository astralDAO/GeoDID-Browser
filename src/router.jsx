import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import MainLayout from 'layouts';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: loadable(() => import('pages/Landing')),
    exact: true,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: loadable(() => import('pages/Dashboard')),
    exact: true,
  },
  {
    path: '/browse',
    name: 'Browse',
    component: loadable(() => import('pages/Dashboard')),
    exact: true,
  },
  {
    path: '/create',
    name: 'Create',
    component: loadable(() => import('pages/Create')),
    exact: true,
  },
  {
    path: '/create/collection',
    name: 'CreateCollection',
    component: loadable(() => import('pages/Create/Collection')),
    exact: true,
  },
  {
    path: '/create/item',
    name: 'CreateItem',
    component: loadable(() => import('pages/Create/Item')),
    exact: true,
  },
  {
    path: '/browse/:geoDIDID',
    name: 'Browse',
    component: loadable(() => import('pages/GeoDIDView')),
    exact: true,
  },
  {
    path: '/account',
    name: 'Account',
    component: loadable(() => import('pages/AccountArea')),
    exact: true,
  },
];

function Router() {
  return (
    <MainLayout>
      <Switch>
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
