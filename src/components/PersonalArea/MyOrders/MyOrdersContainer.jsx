import React, {useEffect, useState} from "react";
import s from "./MyOrders.module.css";
import {orderAPI, userAPI} from "../../../api/api";
import {removeToken} from "../../../customProvider/tokenProvider";
import {useAuth} from "../../../hoc/withAuth";
import {useDispatch} from "react-redux";
import {setCartItemsAC} from "../../../store/actions/actionCreators";
import base_img from "./../../../assets/images/cart/Rectangle 21.png";
import MyOrders from "./MyOrders";

const MyOrdersContainer = (props) => {
    const [orders, setOrders] = useState({})
    debugger
    useEffect(() => {
        orderAPI.getOrders(props.userToken.value).then(response=>{
            debugger
            console.log(response)
            setOrders(response.data.orders)
        })


    }, []);
    return <MyOrders orders={orders}/>;
};

export default MyOrdersContainer;
