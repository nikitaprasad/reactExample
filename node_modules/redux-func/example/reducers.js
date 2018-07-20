import { combineReducers } from 'redux';
import * as ActionTypes from './actions';

function info(state = {}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_INFO.QUERY:
      return { query: true };

    case ActionTypes.FETCH_INFO.SUCCESS:
      return { query: false, info: action.data };

    case ActionTypes.FETCH_INFO.ERROR:
      return { query: false, error: action.data };

    default:
      return state;
  }
}

function sum(state = 0, action) {
  switch (action.type) {
    case ActionTypes.COUNTER_PLUS:
      return state + 1;

    case ActionTypes.COUNTER_MINUS:
      return state - 1;

    default:
      return state;
  }
}

export default {
  info,
  sum,
};
