import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import PersonalArea from "./personalArea";
import {changeUserInfoAC, setIsAuthenticatedAC,} from "../../store/actions/actionCreators";
import {getToken} from "../../customProvider/tokenProvider";

const PersonalAreaContainer = () =>{
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const userInfo = useSelector(state => state.user.userInfo)
    const userToken = getToken()
    const [personalAreaPage, setPersonalAreaPage] = useState("myData")


    const setIsAuthenticated = (isUserAuth) =>{
        dispatch(setIsAuthenticatedAC(isUserAuth))
    }

    const changeUserInfo = (userInfo) => {
        dispatch(changeUserInfoAC(userInfo))
    }

    return <PersonalArea changeUserInfo={changeUserInfo}
                         setIsAuthenticated={setIsAuthenticated}
                         personalAreaPage={personalAreaPage}
                         setPersonalAreaPage={setPersonalAreaPage}
                         isAuthenticated={isAuthenticated} userInfo={userInfo} userToken={userToken}/>
}


export default PersonalAreaContainer;