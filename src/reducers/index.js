import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import toBuys from './toBuys';

export default combineReducers({
    auth,
    users,
    toBuys
});