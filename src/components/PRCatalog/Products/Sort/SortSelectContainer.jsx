import React from "react";
import {connect} from "react-redux";
import SortSelect from "./SortSelect";
import {setCurrentSortSelectAC} from "../../../../redux/prCatalogReducer";


const mapStateToProps = (state) => {
    return {
        sortSelect: state.prCatalogPage.sortSelect,
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
