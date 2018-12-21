const getUsers = (state = {}) => {
    const { users } = state;

    if (!users) {
        return {};
    }

    return users;
};

export const getIds = (state) =>
    Object.keys(getUsers(state));

export const findById = (state, id) =>
    getUsers(state)[id] || {};

