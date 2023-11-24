import {DECREMENT_PRODUCT_COUNT, INCREMENT_PRODUCT_COUNT} from "../actions/actionTypes";


let InitialState = {
    products: [
        {id: 1, category_id: 4, subcategory_id: null, filterIDs:['pac-234', ], isEdible: false, title: 'Наушники Аппл', price: 11590, art: '24553252', description: 'Лучшие в своем сегменте', images: [], count: 0,},
        {id: 2, category_id: 4, subcategory_id: null, filterIDs:['pac-234', ], isEdible: false, title: 'Телефон Самсунг', price: 41990, art: '24523490', description: 'Не уступает другим в своей ценовой категории', images: [], count: 0,},
        {id: 3, category_id: 5, subcategory_id: null, filterIDs:['pac-345', ], isEdible: false, title: 'Хлопковый худи', price: 1990, art: '53893490', description: 'Хорошая ткань - держит тепло', images: [], count: 0,},
        {id: 4, category_id: 3, subcategory_id: null, filterIDs:['pac-234', ], isEdible: false, title: 'Игрушечный вертолет', price: 4990, art: '57456356', description: 'Порадует ребенка. Вертолет безопасный, так как имеет защиту лопастей', images: [], count: 0,},
        {id: 5, category_id: 4, subcategory_id: null, filterIDs:['pac-123', ], isEdible: false, title: 'Рюкзак Хд дизайн', price: 9690, art: '90893412', description: 'Рюкзак антивор - популярнейшая модель 2023', images: [], count: 0,},
        {id: 6, category_id: 4, subcategory_id: null, filterIDs:['pac-456', ], isEdible: true, title: 'Сникерс', price: 65, art: '90893352', description: 'Шоколадный ботончик Сникерс', images: [], count: 0,},
    ],
}

export const productsReducer = (state = InitialState, action) => {
    switch (action.type) {

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

        default:
            return state
    }
}

