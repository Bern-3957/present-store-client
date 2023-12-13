import React from "react";
import ModalBase from "./modalBase";
import {useDispatch, useSelector} from "react-redux";
import {closeModalAC, openModalAC, setIsUserAuthAC, setUserInfoAC, setUserToken, setUserTokenAC} from "../../store/actions/actionCreators";


const ModalBaseContainer = () => {
    const isModalActive = useSelector(state => state.modal.isModalActive)
    const currentModalID = useSelector(state => state.modal.currentModalID)
    const dispatch = useDispatch()

    const closeModal = ()  =>{
        dispatch(closeModalAC())
    }

    const openModal = (currentModalID)  =>{
        dispatch(openModalAC(currentModalID))
    }

    const setUserInfo = (userInfo) => {
        dispatch(setUserInfoAC(userInfo))
    }

    const setUserToken = (userToken) =>{
        dispatch(setUserTokenAC(userToken))
    }

    const setIsUserAuth = (isUserAuth) =>{
        dispatch(setIsUserAuthAC(isUserAuth))
    }

    return  <ModalBase isModalActive={isModalActive}
                       currentModalID={currentModalID}
                       closeModal={closeModal}
                       openModal={openModal}
                       setUserInfo={setUserInfo}
                       setUserToken={setUserToken}
                       setIsUserAuth={setIsUserAuth}
    />
}


export default ModalBaseContainer;
