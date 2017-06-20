import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    // createLogger(),
    thunkMiddleware
  )
);

export default store;