import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Product from "./Product";
import {
    decrementProductCountAC,
    incrementProductCountAC,
    openModalAC, setIsAuthenticatedAC,
} from "../../../../store/actions/actionCreators";
import {getFilteredProducts} from "../../../../store/selectors/filterSelectors";
import {addNewCartTC, getProductsTC} from "../../../../store/thunks/thunkCreators";
import {getToken} from "../../../../customProvider/tokenProvider";

const ProductContainer = () => {
    const dispatch = useDispatch();
    const all_products = useSelector((state) => state.catalog.products);
    const activeCategory = useSelector((state) => state.filters.sideBar.activeCategory)
    const activeFilters = useSelector((state) => state.filters.sideBar.activeFilters)
    const activeEdible = useSelector((state) => state.filters.sideBar.activeEdible)
    const activeSortSelect = useSelector((state) => state.filters.activeSortSelect)
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const userToken = getToken()

    const addNewCart = (product_id) => {
        dispatch(addNewCartTC(userToken.value, product_id))
    }

    useEffect(() => {
        dispatch(getProductsTC())
    },[]);

    const openModal= (currentModalID)=>{
        dispatch(openModalAC(currentModalID))
    }

    const setIsAuthenticated = (isUserAuth) =>{
        dispatch(setIsAuthenticatedAC(isUserAuth))
    }

    const products = getFilteredProducts(all_products, activeCategory, activeFilters, activeEdible, activeSortSelect)
    const increment = (select_item_id) => {
        dispatch(incrementProductCountAC(select_item_id));
    };
    const decrement = (select_item_id) => {
        dispatch(decrementProductCountAC(select_item_id));
    };
    return <Product isAuthenticated={isAuthenticated} openModal={openModal} setIsAuthenticated={setIsAuthenticated} products={products} increment={increment} decrement={decrement} addNewCart={addNewCart}/>;
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
