export const SET_AUTH_EMAIL = 'set_auth_email';
export const setEmail = (email) => ({
    type: SET_AUTH_EMAIL,
    payload: email
});

export const SET_AUTH_PASSWORD = 'set_auth_password';
export const setPassword = (password) => ({
    type: SET_AUTH_PASSWORD,
    payload: password
});

export const SET_AUTH_USER = 'set_auth_user';
export const setUser = (user) => ({
    type: SET_AUTH_USER,
    payload: user
});

export const SET_AUTH = 'set_auth';
export const setAuth = (email, password) => ({
    type: SET_AUTH,
    payload: {
        email,
        password
    }
});

export const UNSET_AUTH = 'unset_auth';
export const unsetAuth = () => ({
    type: UNSET_AUTH
});
