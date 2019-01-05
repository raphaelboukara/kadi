export const ADD_USER = 'add_user';
export const add = (user) => ({
    type: ADD_USER,
    payload: user
});

export const FETCH_USER = 'fetch_user';
export const fetch = ({ email }) => ({
    type: FETCH_USER,
    payload: { email }
});

export const UPDATE_USER = 'update_user';
export const update = (user) => ({
    type: UPDATE_USER,
    payload: user
});

export const CLEAR_USERS = 'clear_users';
export const clear = () => ({
    type: CLEAR_USERS
});
