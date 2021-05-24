import React from 'react';
import Login from './login';

export default async () => [{
  path: '',
  action: async () => ({
    component: <Login />,
  }),
}];
