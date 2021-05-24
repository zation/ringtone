import React from 'react';
import Ringtone from './ringtone';

const routes = [
  {
    path: '/ringtone',
    chunks: ['modules'],
    requireAuth: true,
    component: <Ringtone />,
  },

  {
    path: '/',
    chunks: ['auth'],
    load: () => import(/* webpackChunkName: 'auth' */ 'modules/auth'),
  },

  {
    path: '/auth/login',
    chunks: ['auth'],
    load: () => import(/* webpackChunkName: 'auth' */ 'modules/auth'),
  },

  {
    path: '/(.*)',
    chunks: ['not-found'],
    load: () => import(/* webpackChunkName: 'not-found' */ 'modules/not-found'),
  },
];

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.unshift({
    path: '/error',
    // eslint-disable-next-line global-require
    action: require('./error').default,
  });
}

export default routes;
