import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

export default function configureStore(rootReducer, initialState) {
  const middleware = routerMiddleware(history);

  const store = createStore(
    combineReducers({
      ...rootReducer,
      router: routerReducer
    }),
    initialState || undefined,
    applyMiddleware(middleware)
  );

  return store;
}
