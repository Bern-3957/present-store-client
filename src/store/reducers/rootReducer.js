import { combineReducers } from 'redux';
import {filtersReducer} from './filtersReducer';
import {productsReducer} from './productsReducer';

const rootReducer = combineReducers({
    filters: filtersReducer,
    catalog: productsReducer,
});

export default rootReducer;
