const routes = [
  {
    path: '/account',
    chunks: ['account'],
    requireAuth: true,
    load: () => import(/* webpackChunkName: 'account' */ 'modules/account'),
  },

  {
    path: '/personal',
    chunks: ['personal'],
    requireAuth: true,
    load: () => import(/* webpackChunkName: 'personal' */ 'modules/personal'),
  },

  {
    path: '/table',
    chunks: ['table'],
    requireAuth: true,
    load: () => import(/* webpackChunkName: 'personal' */ 'modules/table'),
  },

  {
    path: '/',
    chunks: ['auth'],
    load: () => import(/* webpackChunkName: 'auth' */ 'modules/auth'),
  },

  {
    path: '/(.*)',
    chunks: ['not-found'],
    requireAuth: true,
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
