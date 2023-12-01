import {CLOSE_MODAL, OPEN_MODAL} from "../actions/actionTypes";


let InitialState = {
    isModalActive: false,
};

export const modalsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isModalActive: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                isModalActive: false
            }
        default:
            return state
    }
}
