import {CHANGE_USER_INFO, SET_IS_USER_AUTH, SET_USER_INFO, SET_USER_TOKEN} from "../actions/actionTypes";


let InitialState = {
    userToken: null,
    isUserAuth: false,
    userInfo:{
        id: null,
        username: null,
        email: null,
        first_name: null,
        last_name: null,
        address: null,
        consentPersonalData: null,
        consentReceiveNews: null,
    }

};

export const userReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_USER_TOKEN:
            return {
                ...state,
                userToken: action.userToken,
            }

        case SET_IS_USER_AUTH:
            return {
                ...state,
                isUserAuth: action.isUserAuth
            }
        case SET_USER_INFO:

            return {
                ...state,
                userInfo: {...state.userInfo,...action.userInfo},

            }
        case CHANGE_USER_INFO:
            return {
                ...state,
                userInfo: {...state.userInfo,...action.userInfo}
            }
        default:
            return state
    }
}
