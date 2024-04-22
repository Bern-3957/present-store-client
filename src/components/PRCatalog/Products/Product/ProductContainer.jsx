import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Product from "./Product";
import {
    decrementProductCountAC,
    incrementProductCountAC,
    openModalAC, setCostAC, setIsAuthenticatedAC,
} from "../../../../store/actions/actionCreators";
import {getFilteredProducts} from "../../../../store/selectors/filterSelectors";
import {
    addNewCartTC,
    getCartsTC,
    getProductsTC,
    getProductTC
} from "../../../../store/thunks/thunkCreators";
import {getToken} from "../../../../customProvider/tokenProvider";

const ProductContainer = () => {
    const dispatch = useDispatch();
    const all_products = useSelector((state) => state.catalog.products);
    const activeCategory = useSelector((state) => state.filters.sideBar.activeCategory)
    const activeFilters = useSelector((state) => state.filters.sideBar.activeFilters)
    const activeEdible = useSelector((state) => state.filters.sideBar.activeEdible)
    const activeSortSelect = useSelector((state) => state.filters.activeSortSelect)
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const cart_items = useSelector(state => state.cart.cartItems)
    const userToken = getToken()

    useEffect(() => {
        dispatch(getProductsTC())
        if(userToken){
            dispatch(getCartsTC(userToken.value))}

    },[]);

    const products = getFilteredProducts(all_products, activeCategory, activeFilters, activeEdible, activeSortSelect)

    const addNewCart = async (product_id) => {
        dispatch(addNewCartTC(userToken.value, product_id))
        dispatch(getCartsTC(userToken.value))
    }
    const openModal= (currentModalID)=>{
        dispatch(openModalAC(currentModalID))
    }
    const setIsAuthenticated = (isUserAuth) =>{
        dispatch(setIsAuthenticatedAC(isUserAuth))
    }
    const increment = (select_item_id) => {
        dispatch(incrementProductCountAC(select_item_id));
    };
    const decrement = (select_item_id) => {
        dispatch(decrementProductCountAC(select_item_id));
    };

    const getProduct = async (product_id) => {
        await dispatch(getProductTC(product_id))
        debugger
    }

    return <Product getProduct={getProduct}
                    cart_items={cart_items}
                    isAuthenticated={isAuthenticated}
                    openModal={openModal}
                    setIsAuthenticated={setIsAuthenticated}
                    products={products}
                    increment={increment}
                    decrement={decrement}
                    addNewCart={addNewCart}/>;
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
