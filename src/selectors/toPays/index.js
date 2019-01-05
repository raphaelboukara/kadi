import * as UsersSelectors from './../users';

const getToPays = (state = {}) => {
    const { toPays } = state;

    if (!toPays) {
        return {};
    }

    return toPays;
};

export const getIds = (state) =>
    Object.keys(getToPays(state));

export const findById = (state, id) => {
    const toPay = getToPays(state)[id] || {};

    return {
        ...toPay,
        color: UsersSelectors.findById(state, toPay.userId).color
    };
};

export const totalAmountByUserId = (state, userId) =>
    Object.values(getToPays(state))
        .filter((toPay) => toPay.userId === userId)
        .reduce(
            (total, { amount }) => total + (parseFloat(amount) || 0),
            0
        );

export const totalAmount = (state) =>
    Object.values(getToPays(state))
        .reduce(
            (total, { amount }) => total + (parseFloat(amount) || 0),
            0
        );

const getDate = (n) => {
    const d = new Date(n);

    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
};

const groupBy = (arr, g) => {
    return arr.reduce((acc, item) => {
        const key = g(item);
        (acc[key] = acc[key] || []).push(item);
        return acc;
    }, {});
};

export const formatForSectionList = (state) => {
    const toPays = Object.values(getToPays(state));
    const toPaysGroupKey = ({ createdAt }) => getDate(createdAt);
    const toPaysGroupedByCreatedAt = groupBy(toPays, toPaysGroupKey);
    const toPaysGroupedByCreatedAtKeys = Object.keys(toPaysGroupedByCreatedAt);

    return toPaysGroupedByCreatedAtKeys.reduce(
        (acc, createdAt) => {
            const section = {
                title: createdAt,
                data: toPaysGroupedByCreatedAt[createdAt].map(({ id }) => id)
            };

            return Array.prototype.concat(acc, section);
        },
        []
    );
};
