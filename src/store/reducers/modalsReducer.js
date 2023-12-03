import {CLOSE_MODAL, OPEN_MODAL} from "../actions/actionTypes";


let InitialState = {
    isModalActive: false,
    currentModalID: null,
};

export const modalsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isModalActive: true,
                currentModalID: action.currentModalID
            }
        case CLOSE_MODAL:
            return {
                ...state,
                isModalActive: false,
                currentModalID: null,
            }
        default:
            return state
    }
}
