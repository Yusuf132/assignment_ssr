import React from 'react';
import Home from './components/Home';
import NewsList, { loadData } from './components/newsList/newsList.component';

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/news',
    component: NewsList
  }
];