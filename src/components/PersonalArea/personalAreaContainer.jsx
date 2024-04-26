import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import PersonalArea from "./personalArea";
import {
    changeUserInfoAC,
    setIsAuthenticatedAC,
} from "../../store/actions/actionCreators";
import {getToken} from "../../customProvider/tokenProvider";
import {logoutUserTC} from "../../store/thunks/thunkCreators";
import {Navigate} from "react-router-dom";

const PersonalAreaContainer = () =>{
    console.log('Перерисовывется """"""""""""""""')
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

    const handleLogout = () => {
        try {
            dispatch(logoutUserTC(userToken))
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    if (isAuthenticated === false){
        return <Navigate to={"/"}/>
    }
    return <PersonalArea changeUserInfo={changeUserInfo}
                         setIsAuthenticated={setIsAuthenticated}
                         personalAreaPage={personalAreaPage}
                         handleLogout = {handleLogout}
                         setPersonalAreaPage={setPersonalAreaPage}
                         isAuthenticated={isAuthenticated} userInfo={userInfo} userToken={userToken}/>
}


export default PersonalAreaContainer;