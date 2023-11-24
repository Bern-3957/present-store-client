import {
    DECREMENT_PRODUCT_COUNT,
    INCREMENT_PRODUCT_COUNT,
    SET_CURRENT_CATEGORY,
    SET_CURRENT_SORT_SELECT,
    SET_PACKAGES_CHECKBOX,
    SET_PRESENT_CONSISTS_CHECKBOX,
    SET_PURPOSES_CHECKBOX
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
export const setCurrentSortSelectAC = (select_item_id) => {
    return {type: SET_CURRENT_SORT_SELECT, select_item_id}
}
export const incrementProductCountAC = (product_id) => {
    return {type: INCREMENT_PRODUCT_COUNT, product_id}
}
export const decrementProductCountAC = (product_id) => {
    return {type: DECREMENT_PRODUCT_COUNT, product_id}
}
export const setCurrentCategoryAC = (category_id) => {
    return {type: SET_CURRENT_CATEGORY, category_id}
}