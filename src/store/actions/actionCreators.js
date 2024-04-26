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
    SET_PRODUCTS,
    SET_CARTS_PRODUCTS,
    SET_IS_AUTHENTICATED,
    SET_CART_ITEMS,
    DELETE_CART_ITEM,
    CHANGE_CART_QUANTITY,
    CHANGE_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    DECREMENT_CART_ITEM_QUANTITY,
    SET_CURRENT_PRODUCT,
    SET_CURRENT_PRODUCT_IMAGES,
    SET_COST,
    SET_DISCOUNT,
    CHANGE_USER_INFO, LOGOUT_USER,
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
export const setIsAuthenticatedAC = (isUserAuth) => {
    return {type: SET_IS_AUTHENTICATED, isUserAuth}
}
export const changeUserInfoAC = (userInfo) => {
    return {type: CHANGE_USER_INFO, userInfo}
}

export const logoutUserAC = () => {
    return {type: LOGOUT_USER};
};

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

export const setCurrentProductAC = (product) =>{
    return {type: SET_CURRENT_PRODUCT, product}
}



// Cart

export const setCartItemsAC = (cartItems) => {
    return {type: SET_CART_ITEMS, cartItems}
}

export const setCartsProductsAC = (cartsProducts) => {
    return {type: SET_CARTS_PRODUCTS, cartsProducts}
}
export const deleteCartItemAC = (cartItemId) => {
    return {type: DELETE_CART_ITEM, cartItemId}
}
export const changeCartItemQuantityAC = (cartItemId, quantity) => {
    return {type: CHANGE_CART_ITEM_QUANTITY, cartItemId, quantity}
}
export const setCostAC = () => {
    return {type: SET_COST}
}
export const setDiscountAC = (discount) => {
    return {type: SET_DISCOUNT, discount}
}
