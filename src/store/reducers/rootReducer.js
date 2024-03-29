import { combineReducers } from 'redux';
import {filtersReducer} from './filtersReducer';
import {productsReducer} from './productsReducer';
import {modalsReducer} from "./modalsReducer";
import {userReducer} from "./userReducer";
import {cartReducer} from "./cartReducer";

const rootReducer = combineReducers({
    filters: filtersReducer,
    catalog: productsReducer,
    modal: modalsReducer,
    user: userReducer,
    cart: cartReducer,
});

export default rootReducer;
