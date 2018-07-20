import React from 'react';
import createHistory from 'history/createBrowserHistory';
import renderPage from '../src/renderPage';
import configureStore from '../src/configureStore';
import IndexPage from './IndexPage';
import reducers from './reducers';

let history = createHistory();

let store = configureStore(reducers, null, history);

renderPage(IndexPage, { store, history });

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers').default)
  );
  module.hot.accept('./IndexPage', () => {
    renderPage(IndexPage, { store, history });
  });
}
