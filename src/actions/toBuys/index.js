export const SET_TOBUYS = 'set_tobuys';
export const set = (toBuys) => ({
    type: SET_TOBUYS,
    payload: toBuys
});

export const CLEAR_TOBUYS = 'clear_tobuys';
export const clear = () => ({
    type: CLEAR_TOBUYS
});

export const CREATE_TOBUY = 'create_tobuy';
export const create = (toBuy) => ({
    type: CREATE_TOBUY,
    payload: toBuy
});

export const REMOVE_TOBUY = 'remove_tobuy';
export const remove = (id) => ({
    type: REMOVE_TOBUY,
    payload: { id }
});

