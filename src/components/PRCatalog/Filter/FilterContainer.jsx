import React from "react";
import {connect} from "react-redux";
import Filter from "./Filter";
import {setCurrentCategoryAC, setPackagesCheckboxAC, setPresentConsistsCheckboxAC, setPurposesCheckboxAC} from "../../../redux/prCatalogReducer";


const mapStateToProps = (state) => {
    return {
        categories: state.prCatalogPage.sideBar.categories,
        purposes: state.prCatalogPage.sideBar.purposes,
        pr_consists: state.prCatalogPage.sideBar.present_consists,
        packages: state.prCatalogPage.sideBar.packages,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setPresentConsistsCheckbox: (checkbox_id)=>{
            dispatch(setPresentConsistsCheckboxAC(checkbox_id))
        },
        setPurposesCheckbox: (checkbox_id)=>{
            dispatch(setPurposesCheckboxAC(checkbox_id))
        },
        setPackagesCheckbox: (checkbox_id)=>{
            dispatch(setPackagesCheckboxAC(checkbox_id))
        },
        setCurrentCategory: (category_id)=>{
            dispatch(setCurrentCategoryAC(category_id))
        }

    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default FilterContainer;
