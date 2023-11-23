import {prCatalogReducer} from "./prCatalogReducer";
import {configureStore} from "@reduxjs/toolkit";


let store = configureStore({
    reducer:{
        prCatalogPage: prCatalogReducer,
    }
})

export default store;

window.store = store;

