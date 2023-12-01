import React from "react";
import Upheader from "./Upheader";
import {useDispatch} from "react-redux";
import {openModalAC} from "../../../store/actions/actionCreators";

const UpheaderContainer = () =>{
    const dispatch = useDispatch()

    const openModal= ()=>{
        dispatch(openModalAC())
    }
    return <Upheader openModal={openModal}/>
}


export default UpheaderContainer