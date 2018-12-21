import * as UsersActions from './../../actions/users';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UsersActions.ADD_USER:
            return {
                ...state,
                [action.payload.id]: action.payload
            };

        case UsersActions.CLEAR_USERS:
            return {};

        default:
            return state;
    }
};

