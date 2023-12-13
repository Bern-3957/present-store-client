import React from "react";
import Upheader from "./Upheader";
import {useDispatch, useSelector} from "react-redux";
import {openModalAC, setIsUserAuthAC} from "../../../store/actions/actionCreators";
import modals from "./../../../constants/modals"

const UpheaderContainer = () =>{
    const dispatch = useDispatch()
    const isUserAuth = useSelector(state => state.user.isUserAuth)
    const userInfo = useSelector(state => state.user.userInfo)
    const userToken = useSelector(state => state.user.userToken)
    const openModal= (currentModalID)=>{
        dispatch(openModalAC(currentModalID))
    }

    const setIsUserAuth = (isUserAuth) =>{
        dispatch(setIsUserAuthAC(isUserAuth))
    }

    return <Upheader openModal={openModal} setIsUserAuth={setIsUserAuth} isUserAuth={isUserAuth} userInfo={userInfo} userToken={userToken}/>
}


export default UpheaderContainer