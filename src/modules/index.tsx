import { combineReducers } from 'redux';
import starbucks from './starbucks';

const rootReducer = combineReducers({
  starbucks,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
