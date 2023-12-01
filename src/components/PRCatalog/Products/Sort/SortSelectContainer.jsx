import React from "react";
import {useDispatch, useSelector} from "react-redux";
import SortSelect from "./SortSelect";
import {setSortSelectAC} from "../../../../store/actions/actionCreators";
import { sortSelect } from './../../../../constants/filters';


const SortSelectContainer = ()=> {
    const dispatch = useDispatch();
    const activeSortSelectID = useSelector((state)=>state.filters.activeSortSelect)

    const setSortSelect = (select_item_id)=>{
        dispatch(setSortSelectAC(select_item_id))
    }

    return <SortSelect sortSelect={sortSelect} activeSortSelectID={activeSortSelectID} setSortSelect={setSortSelect}/>
}

export default SortSelectContainer;




/*
const mapStateToProps = (state) => {
    return {
        sortSelect: state.filters.sortSelect,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentSortSelect: (select_item_id)=>{
            dispatch(setCurrentSortSelectAC(select_item_id))
        }
    }
}

const SortSelectContainer = connect(mapStateToProps, mapDispatchToProps)(SortSelect);
export default SortSelectContainer;
*/