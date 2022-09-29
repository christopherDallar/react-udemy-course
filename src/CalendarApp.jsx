import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { store } from './store';

export const CalendarApp = () => {
  // Added # to route //{' '}
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <HashRouter> */}
        <AppRouter />
        {/* </HashRouter> */}
      </BrowserRouter>
    </Provider>
  );
};
