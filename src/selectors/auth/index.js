import * as AuthConstants from './../../constants/auth';

const getAuth = (state = {}) => {
    const { auth } = state;

    if (!auth) {
        return {};
    }

    return auth;
};

export const getEmail = (state) => {
    const { email } = getAuth(state);

    return email || '';
};

export const getPassword = (state) => {
    const { password } = getAuth(state);

    return password || '';
};

export const getStatus = (state) => {
    const { user } = getAuth(state);

    if (user === null) {
        return AuthConstants.DISCONNECTED;
    }

    if (user) {
        return AuthConstants.CONNECTED;
    }

    return AuthConstants.LOADING;
};