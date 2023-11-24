import products from "../components/PRCatalog/Products/Products";
import product from "../components/PRCatalog/Products/Product/Product";

const SET_PRESENT_CONSISTS_CHECKBOX = 'SET_PRESENT_CONSISTS_CHECKBOX'
const SET_PURPOSES_CHECKBOX = 'SET_PURPOSES_CHECKBOX'
const SET_PACKAGES_CHECKBOX = 'SET_PACKAGES_CHECKBOX'
const SET_CURRENT_SORT_SELECT = 'SET_CURRENT_SORT_SELECT'
const DECREMENT_PRODUCT_COUNT = 'DECREMENT_PRODUCT_COUNT'
const INCREMENT_PRODUCT_COUNT = 'INCREMENT_PRODUCT_COUNT'
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'


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
    products: [
        {id: 1, category_id: 4, subcategory_id: null, packing_id: 2, purpose_id: null, isEdible: false, title: 'Наушники Аппл', price: 11590, art: '24553252', description: 'Лучшие в своем сегменте', images: [], count: 0,},
        {id: 2, category_id: 4, subcategory_id: null, packing_id: 2, purpose_id: null, isEdible: false, title: 'Телефон Самсунг', price: 41990, art: '24523490', description: 'Не уступает другим в своей ценовой категории', images: [], count: 0,},
        {id: 3, category_id: 5, subcategory_id: null, packing_id: 3, purpose_id: null, isEdible: false, title: 'Хлопковый худи', price: 1990, art: '53893490', description: 'Хорошая ткань - держит тепло', images: [], count: 0,},
        {id: 4, category_id: 3, subcategory_id: null, packing_id: 2, purpose_id: null, isEdible: false, title: 'Игрушечный вертолет', price: 4990, art: '57456356', description: 'Порадует ребенка. Вертолет безопасный, так как имеет защиту лопастей', images: [], count: 0,},
        {id: 5, category_id: 4, subcategory_id: null, packing_id: 2, purpose_id: null, isEdible: false, title: 'Рюкзак Хд дизайн', price: 9690, art: '90893412', description: 'Рюкзак антивор - популярнейшая модель 2023', images: [], count: 0,},
        {id: 6, category_id: 4, subcategory_id: null, packing_id: 4, purpose_id: 3, isEdible: true, title: 'Сникерс', price: 65, art: '90893352', description: 'Шоколадный ботончик Сникерс', images: [], count: 0,},
    ],

}
// filteredProducts: [],
export const prCatalogReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_PRESENT_CONSISTS_CHECKBOX:
            return {
                ...state,
                sideBar: {
                    ...state.sideBar,
                    present_consists: state.sideBar.present_consists.map(ch => {
                        return ch.id === action.checkbox_id ? {...ch, isActive: !ch.isActive} : ch
                    }),
                },
            }
        case SET_PURPOSES_CHECKBOX:
            return {
                ...state,
                sideBar: {
                    ...state.sideBar,
                    purposes: state.sideBar.purposes.map((ch) => {
                        return ch.id === action.checkbox_id ? {...ch, isActive: !ch.isActive} : ch
                    }),
                }
            }
        case SET_PACKAGES_CHECKBOX:
            return {
                ...state,
                sideBar: {
                    ...state.sideBar,
                    packages: state.sideBar.packages.map((ch) => {
                        return ch.id === action.checkbox_id ? {...ch, isActive: !ch.isActive} : ch
                    }),
                }
            }
        case SET_CURRENT_SORT_SELECT:
            return {
                ...state,
                sortSelect: state.sortSelect.map(s => {
                    return s.id === action.select_item_id ? {...s, isCurrent: !s.isCurrent} : {...s, isCurrent: false}
                })
            }
        case INCREMENT_PRODUCT_COUNT:
            return {
                ...state,
                products: state.products.map(p => {
                    return p.id === action.product_id ? {...p, count: p.count + 1} : p
                })
            }
        case DECREMENT_PRODUCT_COUNT:
            return {
                ...state,
                products: state.products.map(p => {
                    return p.id === action.product_id && p.count > 0 ? {...p, count: p.count - 1} : p
                })
            }
        case SET_CURRENT_CATEGORY:
            // const productsOfCurrentCategorty = state.products.filter((p) => p.category_id === action.category_id).map((p) => ({...p}))
            // return {
            //     ...state,
            //     filteredProducts: action.category_id === 1 ? state.products : productsOfCurrentCategorty,
            //     filters: {
            //         ...state.filters,
            //         category: action.category_id
            //     },
            return {
                ...state,
                sideBar: {
                    ...state.sideBar,
                    categories: state.sideBar.categories.map(category => {
                        return category.id === action.category_id ? {...category, isActive: true} : {...category, isActive: false}
                    })
                }
            }

        default:
            return state
    }
}


export const setPresentConsistsCheckboxAC = (checkbox_id) => {
    return {type: SET_PRESENT_CONSISTS_CHECKBOX, checkbox_id}
}
export const setPurposesCheckboxAC = (checkbox_id) => {
    return {type: SET_PURPOSES_CHECKBOX, checkbox_id}
}
export const setPackagesCheckboxAC = (checkbox_id) => {
    return {type: SET_PACKAGES_CHECKBOX, checkbox_id}
}
export const setCurrentSortSelectAC = (select_item_id) => {
    return {type: SET_CURRENT_SORT_SELECT, select_item_id}
}
export const incrementProductCountAC = (product_id) => {
    return {type: INCREMENT_PRODUCT_COUNT, product_id}
}
export const decrementProductCountAC = (product_id) => {
    return {type: DECREMENT_PRODUCT_COUNT, product_id}
}
export const setCurrentCategoryAC = (category_id) => {
    return {type: SET_CURRENT_CATEGORY, category_id}
}


//
// filteredProducts: this.sideBar.present_consists.map((item)=>{
//     if (item.isActive){
//         debugger;
//         return  state.products.map((p) => p.isEdible? p: '')
//     } else {
//         return state.products
//     }
// })


// const isEdibleCheckbox = action.checkbox_id === 1; // Предполагаем, что чекбокс 'съедобные' имеет id 1
// const filteredProducts = isEdibleCheckbox
//     ? state.products.filter(product => product.isEdible)
//     : state.products;