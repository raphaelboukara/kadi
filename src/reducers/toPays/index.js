import * as ToPaysActions from './../../actions/toPays';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ToPaysActions.SET_TOPAYS:
            return {
                ...action.payload
            };

        case ToPaysActions.CLEAR_TOPAYS:
            return {};

        default:
            return state;
    }
};

