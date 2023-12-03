import React from "react";
import ModalBase from "./modalBase";
import {useDispatch, useSelector} from "react-redux";
import {closeModalAC, openModalAC} from "../../store/actions/actionCreators";


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
    return  <ModalBase isModalActive={isModalActive} currentModalID={currentModalID} closeModal={closeModal} openModal={openModal}/>
}


export default ModalBaseContainer;
