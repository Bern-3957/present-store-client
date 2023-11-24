import {
    SET_CURRENT_CATEGORY,
    SET_CURRENT_SORT_SELECT,
    SET_PACKAGES_CHECKBOX,
    SET_PRESENT_CONSISTS_CHECKBOX,
    SET_PURPOSES_CHECKBOX
} from "../actions/actionTypes";

let InitialState = {
    sideBar: {
        activeCategory: null,
        activeFilters: [],
        activeEdible: null,
    },
};

export const filtersReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_PRESENT_CONSISTS_CHECKBOX:
            return {
                ...state,
                sideBar: {
                    ...state.sideBar,
                    activeEdible: action.checkbox_id === 'pre-123'
                },
            }
        case SET_PURPOSES_CHECKBOX:
            return {
                ...state,
                sideBar: {
                    ...state.sideBar,
                    // activeFilters: [state.sideBar.activeFilters[0], action.checkbox_id],
                    activeFilters: state.sideBar.activeFilters.includes(action.checkbox_id)
                        ? state.sideBar.activeFilters.filter(id => id !== action.checkbox_id)
                        : [...state.sideBar.activeFilters, action.checkbox_id]
                }
            }
        case SET_PACKAGES_CHECKBOX:
            return {
                ...state,
                sideBar: {
                    ...state.sideBar,
                    // activeFilters: [state.sideBar.activeFilters[0], action.checkbox_id],
                    activeFilters: state.sideBar.activeFilters.includes(action.checkbox_id)
                        ? state.sideBar.activeFilters.filter(id => id !== action.checkbox_id)
                        : [...state.sideBar.activeFilters, action.checkbox_id]
                }
            }
        case SET_CURRENT_SORT_SELECT:
            return {
                ...state,
                sortSelect: state.sortSelect.map(s => {
                    return s.id === action.select_item_id ? {...s, isCurrent: !s.isCurrent} : {...s, isCurrent: false}
                })
            }

        case SET_CURRENT_CATEGORY:

            return {
                ...state,
                sideBar: {
                    ...state.sideBar,
                    activeCategory: action.category_id,
                }
            }

        default:
            return state
    }
}


/*
let InitialState = {
    sideBar: {
        categories: [
            {id: 1, slug: "vse-podarky", isActive: false, title: 'Все подарки', subcategories: []},
            {
                id: 2, slug: "k-prasdnikam", isActive: false, title: 'К праздникам', subcategories: [
                    {id: 1, title: 'Ураза-байрам'},
                    {id: 2, title: 'Курбан-байрам'},
                    {id: 3, title: 'День матери'},
                    {id: 4, title: '1 сентября'},
                    {id: 5, title: 'Новый год'},
                ]
            },
            {id: 3, slug: "dlya-detey", isActive: false, title: 'Для детей', subcategories: []},
            {id: 4, slug: "dlya-nego", isActive: false, title: 'Для него', subcategories: []},
            {id: 5, slug: "dlya-neyo", isActive: false, title: 'Для нее', subcategories: []},
        ],
        present_consists: [
            {id: 1, title: 'съедобные', isActive: false},
            {id: 2, title: 'несъедобные', isActive: false}
        ],
        purposes: [
            {id: 1, title: 'Для кухни', isActive: false},
            {id: 2, title: 'Для бани', isActive: false},
            {id: 3, title: 'В гости', isActive: false},
            {id: 4, title: 'Косметические наборы', isActive: false},
        ],
        packages: [
            {id: 1, title: 'корзина', isActive: false},
            {id: 2, title: 'коробка', isActive: false},
            {id: 3, title: 'пакет', isActive: false},
            {id: 4, title: 'ящик', isActive: false},
        ],
    },
    sortSelect: [
        {id: 1, title: 'По умолчанию', isCurrent: true},
        {id: 2, title: 'По убыванию цены', isCurrent: false},
        {id: 3, title: 'По возрастанию цены', isCurrent: false},
    ],

}
*/

