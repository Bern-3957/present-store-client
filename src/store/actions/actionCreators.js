import {
    DECREMENT_PRODUCT_COUNT,
    INCREMENT_PRODUCT_COUNT,
    SET_CURRENT_CATEGORY,
    SET_SORT_SELECT,
    SET_PACKAGES_CHECKBOX,
    SET_PRESENT_CONSISTS_CHECKBOX,
    SET_PURPOSES_CHECKBOX,
    CLOSE_MODAL,
    OPEN_MODAL,
    SET_USER_INFO,
    SET_USER_TOKEN,
    SET_IS_USER_AUTH,
    CHANGE_USER_INFO,
    SET_PRODUCTS,
    GET_PRODUCTS, SET_CARTS, SET_CARTS_PRODUCTS,
} from "./actionTypes";

export const setPresentConsistsCheckboxAC = (checkbox_id) => {
    return {type: SET_PRESENT_CONSISTS_CHECKBOX, checkbox_id}
}
export const setPurposesCheckboxAC = (checkbox_id) => {
    return {type: SET_PURPOSES_CHECKBOX, checkbox_id}
}
export const setPackagesCheckboxAC = (checkbox_id) => {
    return {type: SET_PACKAGES_CHECKBOX, checkbox_id}
}
export const setSortSelectAC = (select_item_id) => {
    return {type: SET_SORT_SELECT, select_item_id}
}
export const setCurrentCategoryAC = (category_id) => {
    return {type: SET_CURRENT_CATEGORY, category_id}
}
export const openModalAC = (currentModalID) => {
    return {type: OPEN_MODAL, currentModalID}
}

export const closeModalAC = () => {
    return {type: CLOSE_MODAL}
}
export const setUserTokenAC = (userToken) => {
    return {type: SET_USER_TOKEN, userToken}
}

export const setUserInfoAC = (userInfo) => {
    return {type: SET_USER_INFO, userInfo}
}
export const setIsUserAuthAC = (isUserAuth) => {
    return {type: SET_IS_USER_AUTH, isUserAuth}
}
export const changeUserInfoAC = (userInfo) => {
    return {type: CHANGE_USER_INFO, userInfo}
}


// ProductsReducer -----------------------------------------------------------------------

export const incrementProductCountAC = (product_id) => {
    return {type: INCREMENT_PRODUCT_COUNT, product_id}
}
export const decrementProductCountAC = (product_id) => {
    return {type: DECREMENT_PRODUCT_COUNT, product_id}
}
export const setProductsAC = (products) =>{
    return {type: SET_PRODUCTS, products}
}

// Cart

export const setCartsAC = (carts) => {
    return {type: SET_CARTS, carts}
}

export const setCartsProductsAC = (cartsProducts) => {
    return {type: SET_CARTS_PRODUCTS, cartsProducts}
}
