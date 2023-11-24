import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Filter from "./Filter";
import {setCurrentCategoryAC, setPackagesCheckboxAC, setPresentConsistsCheckboxAC, setPurposesCheckboxAC} from "../../../store/actions/actionCreators";
import { categories, presentConsists, purposes, packages } from './../../../constants/filters';


const FilterContainer = () => {
    const dispatch = useDispatch();

    // const categories = useSelector((state) => state.filters.sideBar.categories);
    // const purposes = useSelector((state) => state.filters.sideBar.purposes);
    // const pr_consists = useSelector((state) => state.filters.sideBar.present_consists);
    // const packages = useSelector((state) => state.filters.sideBar.packages);
    const activeFilters = useSelector((state) => state.filters.sideBar.activeFilters);
    const activeEdible = useSelector((state) => state.filters.sideBar.activeEdible);

    const setPresentConsistsCheckbox= (checkbox_id)=>{
        dispatch(setPresentConsistsCheckboxAC(checkbox_id))
    }
    const setPurposesCheckbox= (checkbox_id)=>{
        dispatch(setPurposesCheckboxAC(checkbox_id))
    }
    const setPackagesCheckbox= (checkbox_id)=>{
        dispatch(setPackagesCheckboxAC(checkbox_id))
    }
    const setCurrentCategory= (category_id)=>{
        dispatch(setCurrentCategoryAC(category_id))
    }

    return (
        <Filter
            categories={categories}
            purposes={purposes}
            pr_consists={presentConsists}
            packages={packages}
            setPresentConsistsCheckbox={setPresentConsistsCheckbox}
            setPurposesCheckbox={setPurposesCheckbox}
            setPackagesCheckbox={setPackagesCheckbox}
            setCurrentCategory={setCurrentCategory}
            activeFilters={activeFilters}
            activeEdible={activeEdible}
        />
    );
}

export default FilterContainer;





/*
const mapStateToProps = (state) => {
    return {
        // categories: state.prCatalogPage.sideBar.categories,
        categories: state.filters.sideBar.categories,
        purposes: state.filters.sideBar.purposes,
        pr_consists: state.filters.sideBar.present_consists,
        packages: state.filters.sideBar.packages,
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
*/