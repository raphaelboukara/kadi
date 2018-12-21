export const ADD_USER = 'add_user';
export const add = (user) => ({
    type: ADD_USER,
    payload: user
});

export const UPDATE_USER = 'update_user';
export const update = (id, key, value) => ({
    type: ADD_USER,
    payload: { id, key, value }
});

export const CLEAR_USERS = 'clear_users';
export const clear = () => ({
    type: CLEAR_USERS
});
