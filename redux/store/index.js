import {createStore} from 'redux';
import reducer from '../reducers';
import middleware from '../middleware';

const reducersConfig = (state, action) => {
  return reducer(state, action);
};

const store = createStore(reducersConfig, middleware);

export default store;
