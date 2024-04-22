import React, {useEffect} from "react";
import AboutProduct from "./AboutProduct";
import {useDispatch, useSelector} from "react-redux";
import {getToken} from "../../customProvider/tokenProvider";
import {addNewCartTC, getCartsTC, getProductsTC} from "../../store/thunks/thunkCreators";
import {openModalAC} from "../../store/actions/actionCreators";


const AboutProductContainer = () => {
    const dispatch = useDispatch()
    const currentProduct = useSelector(state => state.catalog.currentProduct)
    const cart_items = useSelector(state => state.cart.cartItems)
    const userToken = getToken()
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)

    useEffect(() => {
        dispatch(getProductsTC())
        if(userToken){
            dispatch(getCartsTC(userToken.value))}

    },[]);

    const addNewCart = (product_id) => {
        dispatch(addNewCartTC(userToken.value, product_id))
        dispatch(getCartsTC(userToken.value))
    }
    const openModal= (currentModalID)=>{
        dispatch(openModalAC(currentModalID))
    }


    return <AboutProduct cart_items={cart_items}
                         isAuthenticated={isAuthenticated}
                         addNewCart={addNewCart}
                         openModal={openModal}
                         currentProduct={currentProduct}/>
}

export default AboutProductContainer