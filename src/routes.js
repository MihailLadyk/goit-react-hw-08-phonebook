import { lazy } from 'react';

export const urls = {
  home: '/',
  register: '/register',
  login: '/login',
  contacts: '/contacts',
};

export const routes = [
  {
    path: urls.home,
    exact: true,
    component: lazy(() => import('./views/HomeView')),
    private: false,
    restricted: false
  },
  {
    path: urls.contacts,
    exact: true,
    component: lazy(() => import('./views/ContactsView')),
    private: true,
    restricted: false
  },
  {
    path: urls.register,
    exact: true,
    component: lazy(() => import('./views/RegisterView')),
    private: false,
    restricted: true
  },
  {
    path: urls.login,
    exact: true,
    component: lazy(() => import('./views/LoginView')),
    private: false,
    restricted: true
  },
];
