import React from "react";
import ModalBase from "./modalBase";
import {useDispatch, useSelector} from "react-redux";
import {closeModalAC, openModalAC} from "../../store/actions/actionCreators";


const ModalBaseContainer = () => {
    const isModalActive = useSelector(state => state.modal.isModalActive)
    const dispatch = useDispatch()

    const closeModal = ()  =>{
        dispatch(closeModalAC())
    }

    const openModal = ()  =>{
        dispatch(openModalAC())
    }
    return  <ModalBase isModalActive={isModalActive} closeModal={closeModal} openModal={openModal}/>
}


export default ModalBaseContainer;
