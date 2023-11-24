import React from "react";
import {useDispatch, useSelector} from "react-redux";
import SortSelect from "./SortSelect";
import {setCurrentSortSelectAC} from "../../../../store/actions/actionCreators";


const SortSelectContainer = ()=> {
    const dispatch = useDispatch();
    const sortSelect = useSelector((state)=>state.filters.sortSelect)

    const setCurrentSortSelect = (select_item_id)=>{
        dispatch(setCurrentSortSelectAC(select_item_id))
    }

    return <SortSelect sortSelect={sortSelect} setCurrentSortSelect={setCurrentSortSelect}/>
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