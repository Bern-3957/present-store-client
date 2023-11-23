import React from "react";
import {connect} from "react-redux";
import Product from "./Product";
import {decrementProductCountAC, incrementProductCountAC} from "../../../../redux/prCatalogReducer";
import {getFilteredProducts} from './../../../../redux/Selectors/filterSelector';


const mapStateToProps = (state) => {
    console.log('getFilteredProducts', )
    return {
        // filteredProducts: state.prCatalogPage.filteredProducts,
        products: getFilteredProducts(state),
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        increment: (select_item_id) => {
            dispatch(incrementProductCountAC(select_item_id))
        },
        decrement: (select_item_id) => {
            dispatch(decrementProductCountAC(select_item_id))
        }
    }
}

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);
export default ProductContainer;
