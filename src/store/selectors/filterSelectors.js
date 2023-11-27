import product from "../../components/PRCatalog/Products/Product/Product";

export const getFilteredProducts = (all_products, activeCategory, activeFilters, activeEdible, activeSortSelect) => {

    function checkingCheckboxes(products, activeFilters, activeEdible) {
        let afterEdiblePr = []
        if (activeEdible === true) {
            afterEdiblePr = products.filter(pr => pr.isEdible)
        } else if (activeEdible === false) {
            afterEdiblePr = products.filter(pr => pr.isEdible === false)
        } else {
            afterEdiblePr = [...products]
        }

        let afterLastCheckboxesPr = [];
        if (activeFilters.length !== 0) {
            let foundMatch = false;

            for (let pr of afterEdiblePr) {
                for (let filter_id of activeFilters) {
                    if (pr.filterIDs.includes(filter_id)) {
                        afterLastCheckboxesPr.push(pr)
                        foundMatch = true;
                    }
                }
            }
            if (!foundMatch) {
                return [];
            }
        } else {
            afterLastCheckboxesPr = afterEdiblePr
        }
        return afterLastCheckboxesPr;

    }

    function sortBySelect(products, selectID) {

        switch (selectID) {
            // По умолчанию
            case 1:
                return products
            // По убыванию
            case 2:
                return products.sort((a, b) => {
                    let priceA = a.price;
                    let priceB = b.price;
                    return priceB - priceA
                })
            // По возрастанию
            case 3:
                return products.sort((a, b) => {
                    let priceA = a.price;
                    let priceB = b.price;
                    return priceA - priceB
                })
            default:
                return products
        }
    }

    if (activeCategory === null) {
        return sortBySelect(checkingCheckboxes(all_products, activeFilters, activeEdible), activeSortSelect)
    } else if (activeCategory) {
        let products = all_products.filter(pr => pr.category_id === activeCategory ? pr : '')
        if (activeCategory === 1) {
            products = all_products
        }
        return sortBySelect(checkingCheckboxes(products, activeFilters, activeEdible), activeSortSelect)
    }
};


// export const getFilteredProducts = (all_products, activeCategory, activeFilters, activeEdible) => {
//     let currentProducts = all_products.filter(pr=>pr.category_id===activeCategory ? pr : '')
//
//     if (activeEdible===true){
//         currentProducts = currentProducts.filter(pr=>pr.isEdible)
//     } else if (activeEdible===false){
//         currentProducts = currentProducts.filter(pr=>pr.isEdible===false)
//     } else {
//         currentProducts = [...currentProducts]
//     }
//
//     let totalProducts = [];
//     if (activeFilters.length!==0){
//         let foundMatch = false;
//
//         for (let pr of currentProducts){
//             for (let filter_id of activeFilters){
//                 if (pr.filterIDs.includes(filter_id)){
//                     totalProducts.push(pr)
//                     foundMatch = true;
//                 }
//             }
//         }
//         if (!foundMatch) {
//             return [];
//         }
//     }
//
//     if (totalProducts.length === 0){
//         return currentProducts;
//     }
//     else {
//         return totalProducts;
//     }
//
// };


// export const getFilteredProducts = (all_products, activeCategory, activeFilters, activeEdible) => {
//     let currentProducts = all_products.filter(pr => pr.category_id === activeCategory ? pr : '');
//
//     if (activeEdible) {
//         currentProducts = currentProducts.filter(pr => pr.isEdible);
//     }else if (activeEdible===false){
//         currentProducts = currentProducts.filter(pr=>pr.isEdible===false)
//     } else {
//         currentProducts = [...currentProducts]
//     }
//
//     let totalProducts = [];
//     if (activeFilters.length !== 0) {
//         let foundMatch = false; // Флаг для отслеживания наличия хотя бы одного соответствия
//
//         for (let pr of currentProducts) {
//             for (let filter_id of activeFilters) {
//                 if (pr.filterIDs.includes(filter_id)) {
//                     totalProducts.push(pr);
//                     foundMatch = true;
//                     // Можно использовать break, если вы хотите прекратить проверку фильтров после первого соответствия
//                 }
//             }
//         }
//
//         if (!foundMatch) {
//             return [];
//         }
//     }
//
//     return totalProducts.length === 0 ? currentProducts : totalProducts;
// };
