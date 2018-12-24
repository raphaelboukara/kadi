export const SET_TOPAYS = 'set_topays';
export const set = (toPays) => ({
    type: SET_TOPAYS,
    payload: toPays
});

export const CLEAR_TOPAYS = 'clear_topays';
export const clear = () => ({
    type: CLEAR_TOPAYS
});

export const CREATE_TOPAY = 'create_topay';
export const create = (toPay) => ({
    type: CREATE_TOPAY,
    payload: toPay
});

export const REMOVE_TOPAY = 'remove_topay';
export const remove = (id) => ({
    type: REMOVE_TOPAY,
    payload: { id }
});

