import { combineReducers } from 'redux';
import users from './users';

import empData from './emp';
import tabs from './tabs';

const rootReducer = combineReducers({ empData, users, tabs });

export default rootReducer;
