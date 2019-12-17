import { combineReducers } from 'redux';
import users from './Users';
import tabs from './Tabs';

const rootReducer = combineReducers({ users, tabs });

export default rootReducer;
