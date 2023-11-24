import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Product from "./Product";
import {decrementProductCountAC, incrementProductCountAC} from "../../../../store/actions/actionCreators";
import {getFilteredProducts} from "../../../../store/selectors/filterSelectors";

const ProductContainer = () => {
    const dispatch = useDispatch();
    const all_products = useSelector((state) => state.catalog.products);
    const activeCategory = useSelector((state) => state.filters.sideBar.activeCategory)
    const activeFilters = useSelector((state) => state.filters.sideBar.activeFilters)
    const activeEdible = useSelector((state) => state.filters.sideBar.activeEdible)

    console.log('activeCategory',activeCategory)
    const products = getFilteredProducts(all_products, activeCategory, activeFilters, activeEdible)
    const increment = (select_item_id) => {
        dispatch(incrementProductCountAC(select_item_id));
    };

    const decrement = (select_item_id) => {
        dispatch(decrementProductCountAC(select_item_id));
    };

    return <Product products={products} increment={increment} decrement={decrement}/>;
};

export default ProductContainer;


/*
const mapStateToProps = (state) => {
    return {
        products: state.catalog.products,
        // products: getFilteredProducts(state),
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
*/
