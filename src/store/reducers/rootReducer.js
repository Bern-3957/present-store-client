import { combineReducers } from 'redux';
import {filtersReducer} from './filtersReducer';
import {productsReducer} from './productsReducer';
import {modalsReducer} from "./modalsReducer";

const rootReducer = combineReducers({
    filters: filtersReducer,
    catalog: productsReducer,
    modal: modalsReducer,
});

export default rootReducer;
