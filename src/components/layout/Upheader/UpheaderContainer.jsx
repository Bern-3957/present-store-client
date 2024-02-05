import React from "react";
import Upheader from "./Upheader";
import {useDispatch, useSelector} from "react-redux";
import {openModalAC, setIsAuthenticatedAC, setIsUserAuthAC} from "../../../store/actions/actionCreators";
import modals from "./../../../constants/modals"
import {useAuth} from "../../../hoc/withAuth";
import {getToken} from "../../../customProvider/tokenProvider";

const UpheaderContainer = () =>{
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.user.userInfo)
    const userToken = getToken()
    // const {isAuthenticated, setIsAuthenticated} = useAuth()
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const openModal= (currentModalID)=>{
        dispatch(openModalAC(currentModalID))
    }

    const setIsAuthenticated = (isUserAuth) =>{
        dispatch(setIsAuthenticatedAC(isUserAuth))
    }


    return <Upheader isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} openModal={openModal} userInfo={userInfo} userToken={userToken}/>
}


export default UpheaderContainer