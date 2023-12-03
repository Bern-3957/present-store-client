import React from "react";
import Upheader from "./Upheader";
import {useDispatch} from "react-redux";
import {openModalAC} from "../../../store/actions/actionCreators";
import modals from "./../../../constants/modals"

const UpheaderContainer = () =>{
    const dispatch = useDispatch()

    const openModal= (currentModalID)=>{
        dispatch(openModalAC(currentModalID))
    }
    return <Upheader openModal={openModal}/>
}


export default UpheaderContainer