import React from "react";
import {useDispatch, useSelector} from "react-redux";
import PersonalArea from "./personalArea";
import {changeUserInfoAC, setIsUserAuthAC} from "../../store/actions/actionCreators";

const PersonalAreaContainer = () =>{
    const dispatch = useDispatch()
    const isUserAuth = useSelector(state => state.user.isUserAuth)
    const userInfo = useSelector(state => state.user.userInfo)
    const userToken = useSelector(state => state.user.userToken)

    const setIsUserAuth = (isUserAuth) =>{
        dispatch(setIsUserAuthAC(isUserAuth))
    }

    const changeUserInfo = (userInfo) => {
        dispatch(changeUserInfoAC(userInfo))
    }

    return <PersonalArea changeUserInfo={changeUserInfo}
                         setIsUserAuth={setIsUserAuth}
                         isUserAuth={isUserAuth} userInfo={userInfo} userToken={userToken}/>
}


export default PersonalAreaContainer;