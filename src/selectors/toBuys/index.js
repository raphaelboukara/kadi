import * as UsersSelectors from './../users';

const getToBuys = (state = {}) => {
    const { toBuys } = state;

    if (!toBuys) {
        return {};
    }

    return toBuys;
};

export const getIds = (state) =>
    Object.keys(getToBuys(state));

export const findById = (state, id) => {
    const toBuy = getToBuys(state)[id] || {};

    return {
        ...toBuy,
        color: UsersSelectors.findById(state, toBuy.userId).color
    };
};
