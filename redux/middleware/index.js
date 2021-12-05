import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {applyMiddleware} from 'redux';

const logger = createLogger();

export default applyMiddleware(thunk, logger);
