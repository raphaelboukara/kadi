export const toBuyIds = (state = {}) => {
    const toBuys = state.toBuys || {};

    return Object.keys(toBuys);
};

export const toBuyById = (state = {}, id) => {
    if (!id) {
        return {};
    }

    const toBuys = state.toBuys || {};

    return toBuys[id];
};