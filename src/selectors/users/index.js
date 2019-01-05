const stringToColor = (str = '') => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    let colour = '#';
    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }

    return colour;
};

const getUsers = (state = {}) => {
    const { users } = state;

    if (!users) {
        return {};
    }

    return users;
};

export const getIds = (state) =>
    Object.keys(getUsers(state));

export const findById = (state, id) => {
    const user = getUsers(state)[id] || {};

    return {
        ...user,
        color: stringToColor(user.id)
    };
};


