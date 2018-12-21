const getToBuys = (state = {}) => {
    const { toBuys } = state;

    if (!toBuys) {
        return {};
    }

    return toBuys;
};

export const getIds = (state) =>
    Object.keys(getToBuys(state));

export const findById = (state, id) =>
    getToBuys(state)[id] || {};
