import * as Actions from './actions';
import configureStore from './configureStore';
import withRedux from './withRedux';
import renderPage from './renderPage';

export default {
  ...Actions,
  configureStore,
  withRedux,
  renderPage,
}
