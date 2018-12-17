import * as AuthActions from './../../actions/auth';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: undefined
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthActions.SET_AUTH_EMAIL:
            return {
                ...state,
                email: action.payload
            };

        case AuthActions.SET_AUTH_PASSWORD:
            return {
                ...state,
                password: action.payload
            };

        case AuthActions.SET_AUTH_USER:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
};
