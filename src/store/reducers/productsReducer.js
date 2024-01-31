import {DECREMENT_PRODUCT_COUNT, INCREMENT_PRODUCT_COUNT, SET_PRODUCTS} from "../actions/actionTypes";


let InitialState = {
    products: [],
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
        case SET_PRODUCTS:
            console.log(JSON.stringify(action.products));
            return {
                ...state,
                products: action.products
            }
        default:
            return state
    }
}


// let InitialState = {
//     products: [
//         {id: 1, category_id: 4, subcategory_id: null, filterIDs:['pac-234', ], isEdible: false, title: 'Наушники Аппл', price: 11590, art: '24553252', description: 'Лучшие в своем сегменте', images: [], count: 0,},
//         {id: 2, category_id: 4, subcategory_id: null, filterIDs:['pac-234', ], isEdible: false, title: 'Телефон Самсунг', price: 41990, art: '24523490', description: 'Не уступает другим в своей ценовой категории', images: [], count: 0,},
//         {id: 3, category_id: 5, subcategory_id: null, filterIDs:['pac-345', 'pur-345',], isEdible: false, title: 'Хлопковый худи', price: 1990, art: '53893490', description: 'Хорошая ткань - держит тепло', images: [], count: 0,},
//         {id: 4, category_id: 3, subcategory_id: null, filterIDs:['pac-234', ], isEdible: false, title: 'Игрушечный вертолет', price: 4990, art: '57456356', description: 'Порадует ребенка. Вертолет безопасный, так как имеет защиту лопастей', images: [], count: 0,},
//         {id: 5, category_id: 4, subcategory_id: null, filterIDs:['pac-123', ], isEdible: false, title: 'Рюкзак Хд дизайн', price: 9690, art: '90893412', description: 'Рюкзак антивор - популярнейшая модель 2023', images: [], count: 0,},
//         {id: 6, category_id: 4, subcategory_id: null, filterIDs:['pac-456', 'pur-345',], isEdible: true, title: 'Сникерс', price: 65, art: '90893352', description: 'Шоколадный ботончик Сникерс', images: [], count: 0,},
//     ],
// }


/*
[
    {
        "id": 1,
        "category_id": 2,
        "title": "Букет алых роз",
        "description": "Классный подарок для женщин",
        "price": 2990,
        "is_published": true,
        "created_at": "2024-01-21T09:26:30.898006Z",
        "updated_at": "2024-01-21T09:26:30.898006Z",
        "is_edible": false,
        "purpose": null,
        "package": null,
        "vendor_code": 23432424,
        "quantity_in_stock": 12
    },
    {
        "id": 2,
        "category_id": 4,
        "title": "Рыбаловная Удочка",
        "description": "Обрадуйте мужика офигенным подарком",
        "price": 4500,
        "is_published": true,
        "created_at": "2024-01-21T09:27:25.238078Z",
        "updated_at": "2024-01-21T09:27:25.238078Z",
        "is_edible": false,
        "purpose": null,
        "package": "BOX",
        "vendor_code": 63464363,
        "quantity_in_stock": 3
    },
    {
        "id": 3,
        "category_id": 3,
        "title": "Конструктор Лего",
        "description": "Дорогой, но того стоит.",
        "price": 13990,
        "is_published": true,
        "created_at": "2024-01-21T09:28:29.637896Z",
        "updated_at": "2024-01-21T09:28:29.637896Z",
        "is_edible": false,
        "purpose": null,
        "package": "BOX",
        "vendor_code": 46456454,
        "quantity_in_stock": 20
    }
]

 */