import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import toBuys from './toBuys';
import toPays from './toPays';

export default combineReducers({
    auth,
    users,
    toBuys,
    toPays
});