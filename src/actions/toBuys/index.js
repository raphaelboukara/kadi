export const CREATE_TOBUY = 'create_tobuy';
export const create = (toBuy) => ({
    type: CREATE_TOBUY,
    payload: toBuy
});

export const ADD_TOBUYS = 'add_tobuys';
export const add = (toBuys) => ({
    type: ADD_TOBUYS,
    payload: toBuys
});

export const CLEAR_TOBUYS = 'clear_tobuys';
export const clear = () => ({
    type: CLEAR_TOBUYS
});

