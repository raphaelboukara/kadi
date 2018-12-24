const getToPays = (state = {}) => {
    const { toPays } = state;

    if (!toPays) {
        return {};
    }

    return toPays;
};

export const getIds = (state) =>
    Object.keys(getToPays(state));

export const findById = (state, id) =>
    getToPays(state)[id] || {};

export const totalAmount = (state) =>
    Object.values(getToPays(state))
        .reduce(
            (total, { amount }) => total + (parseFloat(amount) || 0),
            0
        );
