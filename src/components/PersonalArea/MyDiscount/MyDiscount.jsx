import React from "react";
import s from "./MyDiscount.module.css";
import { userAPI } from "../../../api/api";
import {removeToken} from "../../../customProvider/tokenProvider";
import {useAuth} from "../../../hoc/withAuth";
import {useDispatch} from "react-redux";
import {setCartItemsAC} from "../../../store/actions/actionCreators";

const MyDiscount = (props) => {
    const dispatch = useDispatch();


    return (
        <div>

        </div>
    );
};

export default MyDiscount;
